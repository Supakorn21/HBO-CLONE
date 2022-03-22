import React from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../../HBOProvider";
import ls from 'local-storage'

const FeaturedMedia = ({ mediaUrl, title, location, linkUrl, type, mediaId, mediaType }) => {
  const router = useRouter();

  const globalState = useStateContext();

  const clickedPlay = () => {
    router.push(linkUrl);
    console.log("send user to media page" + mediaUrl);
  };
  const clickedAdd = ({ mediaId, mediaType, mediaUrl }) => {
    globalState.addToList({
      mediaId: mediaId,
      mediaType: mediaType,
      mediaUrl: mediaUrl,
    });
    console.log("clicked to add movie");
    
  };


  const showMedia = () => {
    if (type === "front") {
      return (
        <iframe
          className="featured-media__video"
          width="100%"
          height="100%"
          src={mediaUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      );
    } else {
      return <img src={mediaUrl} alt="" className="featured-media__img" />;
    }
  };

  return (
    <>
      <div
        className={`featured-media ${
          type === "single" ? "featured-media--single" : ""
        }`}
      >
        {showMedia()}
        <div className="featured-media__bg">
          <div className="featured-media__container">
            <div className="featured-media__title" onClick={clickedPlay}>
              {title}
            </div>
            <div
              className={`featured-media__playing ${
                type === "single" ? "hide-comp" : ""
              } `}
            >
              NOW PLAYING
            </div>
            <div
              className={`featured-media__location ${
                type === "single" ? "hide-comp" : ""
              }`}
            >
              {location}
            </div>
            <div className="featured-media__buttons">
              <div className="featured-media__play-btn" onClick={clickedPlay}>
                <i className="fas fa-play"></i>
              </div>
              <div
                className={`featured-media__add-btn ${
                  type !== "single" ? "hide-comp" : ""
                }`}
                onClick={() => clickedAdd({ mediaId, mediaType, mediaUrl })}
              >
                <i className="fas fa-plus"></i>
              </div>
              <div
                className={`featured-media__info-btn ${
                  type === "single" ? "hide-comp" : ""
                }`}
                onClick={clickedPlay}
              >
                MORE INFO
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedMedia;
