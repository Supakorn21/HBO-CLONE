/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useStateContext } from "../../HBOProvider";
import { useClickOutSide } from "../../Hooks/useClickOutSide";
import Link from "next/link";

const SideNav = () => {
  const globalState = useStateContext();

  const domNode = useClickOutSide(() => {
    globalState.setSideNavOpenAction(false);
  });

  return (
    <>
      <div
        ref={domNode}
        className={`side-nav ${
          globalState.sideNavOpen ? "side-nav--active" : ""
        }`}
      >
        <div
          className="side-nav__close-btn"
          onClick={() => globalState.setSideNavOpenAction(false)}
        >
          <i className="fas fa-times"></i>
        </div>
        <ul className="side-nav__main">
          <li onClick={() => globalState.setSideNavOpenAction(false)}>
            <Link href="/">
              <a  >
                Home
              </a>
            </Link>
          </li>
          <li onClick={() => globalState.setSideNavOpenAction(false)}>
            <Link href="/movie">
              <a  >
                Movies
              </a>
            </Link>
          </li>
          <li onClick={() => globalState.setSideNavOpenAction(false)}>
            <Link href="/tv">
              <a  >
                Series
              </a>
            </Link>
          </li>
        </ul>

        <div className="side-nav__divider"></div>
      </div>
    </>
  );
};

export default SideNav;
