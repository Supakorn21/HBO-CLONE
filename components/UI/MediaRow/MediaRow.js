/* eslint-disable react/jsx-key */
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { shuffleArray } from "../../Utilities";

const MediaRow = ({ title, type, endpoint }) => {
  const [loadingData, setLoadingData] = useState(true);
  const [moviesData, setMoviesData] = useState([]);

  // This is an api for best movie in 2022
  // /discover/movie?with_genres=28&primary_release_year=2022
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${endpoint}&api_key=174406b9a949ae4ad6a40666c6a29393&language=en-US`
      )
      .then(function (response) {
        setMoviesData(shuffleArray(response.data.results));
        setLoadingData(false);
        // handle success
        console.log("success response For " + title);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log("Error response For " + title);
        console.log(error);
      });
  }, []);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 1; index <= digit; index++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  };

  const showThumbnails = () => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : moviesData.map((movie) => {
          return <Thumbnail movieData={movie} />;
        });
  };

  return (
    <>
      <div className={`media-row ${type}`}>
        <h3 className="media-row__title">{title}</h3>
        <div className="media-row__thumbnails">
          {showThumbnails()}

          {/* {loopComp(<Thumbnail />, 10)} */}
        </div>
      </div>
    </>
  );
};

const Thumbnail = ({ movieData }) => {
  return (
    <div className="media-row__thumbnail">
      <img
        src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
      />
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
};

export default MediaRow;
