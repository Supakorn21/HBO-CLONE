/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useStateContext } from "../../HBOProvider";
import { useClickOutSide } from "../../Hooks/useClickOutSide";

const SideNav = () => {
  const globalState = useStateContext();

  const domNode = useClickOutSide(() => {
    globalState.setSideNavOpenAction(false)
  })

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
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/">Series</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">Originals</a>
          </li>
          <li>
            <a href="/">Just Added</a>
          </li>
          <li>
            <a href="/">Last Chance</a>
          </li>
          <li>
            <a href="/">Coming Soon</a>
          </li>
          <li>
            <a href="/">Trending Now</a>
          </li>
        </ul>

        <div className="side-nav__divider"></div>

        <ul className="side-nav__main">
          <li>
            <a href="/">Action</a>
          </li>
          <li>
            <a href="/">Animation</a>
          </li>
          <li>
            <a href="/">Comedy</a>
          </li>
          <li>
            <a href="/">Crime</a>
          </li>
          <li>
            <a href="/">Documentaries</a>
          </li>
          <li>
            <a href="/">Drama</a>
          </li>
          <li>
            <a href="/">Fantasy & Sci-fi</a>
          </li>
          <li>
            <a href="/">Horror</a>
          </li>
          <li>
            <a href="/">International</a>
          </li>
          <li>
            <a href="/">Kids & Family</a>
          </li>
          <li>
            <a href="/">Latino</a>
          </li>
          <li>
            <a href="/">Music</a>
          </li>
          <li>
            <a href="/">News/Talk</a>
          </li>
          <li>
            <a href="/">Reality</a>
          </li>
          <li>
            <a href="/">Romance</a>
          </li>
          <li>
            <a href="/">Shorts</a>
          </li>
          <li>
            <a href="/">Sports</a>
          </li>
          <li>
            <a href="/">Suspence</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNav;
