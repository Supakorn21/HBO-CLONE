import React from "react";

const SearchModal = () => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 1; index <= digit; index++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  };
  return (
    <>
      <div className="search-modal search-modal--active">
        <div className="search-modal__input-group">
          <input
            className="search-modal__input"
            type="text"
            placeholder="Search for a title"
            value=""
          />
          <div className="search-modal__close-btn">
              <i className="fas fa-times"></i>
          </div>
        </div>

        <h3 className="search-modal__title">
            Popular Searches
        </h3>
        
        <div className="search-modal__thumbnails">
          {loopComp(
            <div className="search-modal__thumbnail">
              <img src="https://cdn.shopify.com/s/files/1/0405/1927/0554/products/ScreenShot2021-02-17at12.45.47PM_631x950.png?v=1613599039" />
              <div className="search-modal__top-layer">
                <i className="fas fa-play" />
              </div>
            </div>,
            10
          )}
        </div>
      </div>
    </>
  );
};

export default SearchModal;
