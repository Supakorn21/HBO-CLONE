import React from "react";

const MediaRow = ({title, type}) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++) {
          thumbnails.push(comp)
        }
    
        return thumbnails;
      }
  return (
    <>
      <div className={`media-row ${type}`}>
        <h3 className="media-row__title">{title}</h3>
        <div className="media-row__thumbnails">
        
          {loopComp(
            (<div className="media-row__thumbnail">
              <img src="https://cdn.shopify.com/s/files/1/0405/1927/0554/products/ScreenShot2021-02-17at12.45.47PM_631x950.png?v=1613599039" />
              <div className="media-row__top-layer">
                <i className="fas fa-play"/>  
              </div>  
            </div>), 10
            
            )}
      </div>
      </div>
    </>
  );
};

export default MediaRow;
