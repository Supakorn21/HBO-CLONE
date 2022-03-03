import React from "react";

const FeaturedMedia = () => {
  return (
    <>
      <div className="featured-media">
        <iframe
          className="featured-media__video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1&start=16&mute=1&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          
        ></iframe>
        <div className="featured-media__bg">
          <div className="featured-media__container">
            <div className="featured-media__title">THE BATMAN</div>
            <div className="featured-media__playing">NOW PLAYING</div>
            <div className="featured-media__location">
              In theaters and on HBO MAX. Streaming throughout March 3.
            </div>
            <div className="featured-media__buttons">
              <div className="featured-media__play-btn">
                <i className="fas fa-play"></i>
              </div>
              <div className="featured-media__info-btn">MORE INFO</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedMedia;
