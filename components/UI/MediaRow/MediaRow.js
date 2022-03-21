/* eslint-disable react/jsx-key */
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { shuffleArray } from "../../Utilities";
import Link from "next/link";

const MediaRow = ({ title, type, endpoint, mediaType,updateData }) => {
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
  }, [updateData]);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 1; index <= digit; index++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  };

  const showThumbnails = ({ type }) => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : moviesData.map((movie) => {
          return (
            <Thumbnail key={movie.id} movieData={movie} type={type} mediaType={mediaType} />
          );
        });
  };

  return (
    <>
      <div className={`media-row ${type}`}>
        <h3 className="media-row__title">{title}</h3>
        <div className="media-row__thumbnails">
          {showThumbnails({ type })}

          {/* {loopComp(<Thumbnail />, 10)} */}
        </div>
      </div>
    </>
  );
};

const Thumbnail = ({ movieData, type, mediaType }) => {
  const thumbSize = (type) => {
    if (type === "large-v") {
      return "400";
    }
    if (type === "small-v") {
      return "185";
    }
    if (type === "large-h") {
      return "500";
    }
    if (type === "small-h") {
      return "342";
    }
  };

  return (
    <Link href={`/${mediaType === 'movie' ? 'movie' : 'tv'}/${movieData.id}`}>
      <div className="media-row__thumbnail" >
        <img
          src={`https://image.tmdb.org/t/p/w${thumbSize(type)}/${
            movieData.poster_path
          }`}
        />
        <div className="media-row__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    </Link>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
};

MediaRow.defaultProps = {
	mediaType: 'movie'
}
export default MediaRow;
