import Image from "next/image";
import React, { useState,useEffect } from "react";
import { useStateContext } from "../../HBOProvider";
import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import Link from "next/link";
import { useMounted } from "../../Hooks/useMounted";
import localStorage from "local-storage";
import { useClickOutSide } from "../../Hooks/useClickOutSide";

const Header = () => {
  const [loadingUsers, setLoadingUsers] = useState(false);
  const globalState = useStateContext();

  const users = localStorage("users") !== null ? localStorage("users") : [];
  const { hasMounted } = useMounted();

 

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false);
    }
    console.log("load Effect", users);
  }, []);

  const selectUser = (id) => {
    
    localStorage("activeUID", id);
    
  };

   const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div  key={user.id} className="top-header__user-name">{user.user}</div>
        );
      });
    }
  };

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
          {hasMounted ? showUsers() : ""}
        </div>
        <Account />
        <SearchModal />
      </header>
    </>
  );
};

export default Header;
