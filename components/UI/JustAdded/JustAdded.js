import React from "react";

const JustAdded = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++) {
          thumbnails.push(comp)
        }
    
        return thumbnails;
      }
  return (
    <>
      <div className="just-added">
        <h3 className="just-added__title">Just Added</h3>
        <div className="just-added__thumbnails">
        
          {loopComp(
            (<div className="just-added__thumbnail">
              <img src="https://cdn.shopify.com/s/files/1/0405/1927/0554/products/ScreenShot2021-02-17at12.45.47PM_631x950.png?v=1613599039" />
              <div className="just-added__top-layer">
                <i className="fas fa-play"/>  
              </div>  
            </div>), 10
            
            )}
      </div>
      </div>
    </>
  );
};

export default JustAdded;
