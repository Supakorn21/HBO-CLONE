import Image from "next/image";
import React from "react";
import { useStateContext } from "../../HBOProvider";
import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import Link from "next/link";

const Header = () => {
  const globalState = useStateContext();

  return (
    <>
      <header
        className={`top-header ${
          globalState.accountModalOpen || globalState.sideNavOpen
            ? "top-header--menu-open"
            : ""
        }`}
      >
        <div className="top-header__left-side">
          <div
            style={{ cursor: "pointer" }}
            className="top-header__menu-btn"
            onClick={() => globalState.setSideNavOpenAction(true)}
          >
            <i className="fas fa-bars"></i>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="top-header__search-btn"
            onClick={() => globalState.setSearchOpenAction(true)}
          >
            <i className="fas fa-search"></i>
          </div>
        </div>
        <Link href="/">
          <div className="top-header__logo"></div>
        </Link>

        <div
          className="top-header__account"
          style={{ cursor: "pointer" }}
          onClick={() =>
            globalState.setAccountModalOpenAction(!globalState.accountModalOpen)
          }
        >
          <img
            src="https://userstock.io/data/wp-content/uploads/2020/06/jack-finnigan-rriAI0nhcbc-1024x1024.jpg"
            className="top-header__user-img"
          />
          <div className="top-header__user-name">Tommy</div>
        </div>
        <Account />
        <SearchModal />
      </header>
    </>
  );
};

export default Header;
