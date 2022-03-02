import React from "react";


const PosterView = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++) {
          thumbnails.push(comp)
        }
    
        return thumbnails;
      }
  return (
    <>
      <div className="poster-view">
        <h3 className="poster-view__title">Movies</h3>
        <div className="poster-view__thumbnails">
        
          {loopComp(
            (<div className="poster-view__thumbnail">
              <img src="https://cdn.shopify.com/s/files/1/0405/1927/0554/products/ScreenShot2021-02-17at12.45.47PM_631x950.png?v=1613599039" />
              <div className="poster-view__top-layer">
                <i className="fas fa-play"/>  
              </div>  
            </div>), 10
            
            )}
      </div>
      </div>
    </>
  );
};

export default PosterView;
