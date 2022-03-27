import axios from "axios";
import { useState, useEffect } from "react";
import { useStateContext } from "../../HBOProvider";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchModal = () => {
  const globalState = useStateContext();
  const router = useRouter();

  const [popData, setPopData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchCast, setSearchCast] = useState([])
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("");

  useEffect(async () => {
    try {
      let popData = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2022&api_key=174406b9a949ae4ad6a40666c6a29393&language=en-US`
      );
      setPopData(popData.data.results.filter((item, i) => i < 14));

      setShowResults(false);
      console.log("popdata", popData.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleInput = async (e) => {
    try {
      setText(e.target.value);

      let searchData = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=174406b9a949ae4ad6a40666c6a29393&language=en-US`
      );

      
      setSearchData(
        searchData.data.results.filter(
          (item, i) => item.media_type === "tv" || item.media_type === "movie"
        )
      );
      
      setShowResults(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchCast = async (e) => {
    try {
      setText(e.target.value);
      
      
      
      setShowResults(true)
    } catch (err) {
      console.log(err);
    }
  };
  
 

 
  const clickedThumbnail = (type, id, media_type) => {
    if (type === "popular") {
      router.push(`/movie/${id}`);
      globalState.setSearchOpenAction(!globalState.searchOpen);
    }
    if (type === "search") {
      router.push(`/${media_type}/${id}`);
      globalState.setSearchOpenAction(!globalState.searchOpen);
    }
  };

  // const loopComp = (comp, digit) => {
  //   let thumbnails = [];
  //   for (let index = 1; index <= digit; index++) {
  //     thumbnails.push(comp);
  //   }

  //   return thumbnails;
  // };

  return (
    <>
      <div
        className={`search-modal ${
          globalState.searchOpen ? "search-modal--active" : ""
        }`}
      >
        <div className="search-modal__input-group">
          <input
            className="search-modal__input"
            type="text"
            placeholder="Search for a title"
            onChange={handleInput }
            value={text}
          />
          <div
            className="search-modal__close-btn"
            onClick={() =>
              globalState.setSearchOpenAction(!globalState.searchOpen)
            }
          >
            <i className="fas fa-times"></i>
          </div>
        </div>

        <h3 className="search-modal__title">
          {" "}
          {showResults && searchData.length >= 1
            ? `Search Result for ${text}`
            : `Popular Searches`}
        </h3>

        <div className="search-modal__thumbnails">
          {showResults && searchData.length >= 1 ? (
            <SearchResults
              searchData={searchData}
              clickedThumbnail={clickedThumbnail}
            />
          ) : (
            <PopularResults
              popData={popData}
              clickedThumbnail={clickedThumbnail}
            />
          )}
        </div>
      </div>
    </>
  );
};

import React from "react";

const PopularResults = ({ popData, clickedThumbnail }) => {
  return popData.map((item, index) => {
    return (
      <div
        key={index}
        className="search-modal__thumbnail"
        onClick={() => clickedThumbnail("popular", item.id)}
      >
        <img src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} />
        <div className="search-modal__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  });
};
const SearchResults = ({ searchData, clickedThumbnail }) => {
  return searchData.map((item, index) => {
    return (
      <div
        key={index}
        className="search-modal__thumbnail"
        onClick={() => clickedThumbnail("popular", item.id, item.media_type)}
      >
        <img src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} />
        <div className="search-modal__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  });
};

export default SearchModal;
