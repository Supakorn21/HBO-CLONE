import React from "react";
import { useState } from "react";

const PlaceHolders = ({type, title}) => {
    const [loadingData, setLoadingData] = useState(true);
    const [moviesData, setMoviesData] = useState([]);


  return (
    <>
      <div className={`media-row ${type}`}>
        <h3 className="media-row__title">{title}</h3>
        <div className="media-row__thumbnails">
          <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img"></div>
          </div>
          <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img"></div>
          </div>
          <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img"></div>
          </div>
          <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img"></div>
          </div>
          <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img"></div>
          </div>
          <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img"></div>
          </div>
          <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img"></div>
          </div>
          <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceHolders;
