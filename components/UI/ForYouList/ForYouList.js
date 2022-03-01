import React from "react";

const ForYouList = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++) {
          thumbnails.push(comp)
        }
    
        return thumbnails;
      }
  return (
    <>
      <div className="foryou-list">
        <h3 className="foryou-list__title">For You</h3>
        <div className="foryou-list__thumbnails">
        
          {loopComp(
            (<div className="foryou-list__thumbnail">
              <img src="https://www.slashfilm.com/img/gallery/heres-when-the-batman-will-begin-streaming-on-hbo-max/l-intro-1640632402.jpg" />
              <div className="foryou-list__top-layer">
                <i className="fas fa-play"/>  
              </div>  
            </div>), 10
            
            )}
      </div>
      </div>
    </>
  );
};

export default ForYouList;
