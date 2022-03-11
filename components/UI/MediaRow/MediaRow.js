import React from "react";
import {useState, useEffect} from 'react'

const MediaRow = ({ title, type }) => {
  const [loadingData, setLoadingData] = useState(true)
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 1; index <= digit; index++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  };

  const showThumbnails = () => {
    setTimeout(() => setLoadingData(false), 3000)
    return loadingData
      ? loopComp(<Skeleton/>, 10)
      : loopComp(<Thumbnail/>, 10)
  }

  return (
    <>
      <div className={`media-row ${type}`}>
        <h3 className="media-row__title">{title}</h3>
        <div className="media-row__thumbnails">

          {
            showThumbnails()
          }

          {/* {loopComp(<Thumbnail />, 10)} */}
        </div>
      </div>
    </>
  );
};

const Thumbnail = () => {
  return (
    <div className="media-row__thumbnail">
      <img src="https://cdn.shopify.com/s/files/1/0405/1927/0554/products/ScreenShot2021-02-17at12.45.47PM_631x950.png?v=1613599039" />
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
