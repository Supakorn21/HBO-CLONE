import React from "react";
import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";

const Header = () => {
  return (
    <>
      <header className="top-header">
        <div className="top-header__left-side">
          <div className="top-header__menu-btn">
            <i className="fas fa-bars"></i>
          </div>
          <div className="top-header__search-btn">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="top-header__logo"></div>
        <div className="top-header__account">
            <img src="https://api.uifaces.co/our-content/donated/FJkauyEa.jpg" className="top-header__user-img"/>
            <div className="top-header__user-name">Tommy</div>
        </div>
        <Account/>
        <SearchModal/>
      </header>
    </>
  );
};

export default Header;
