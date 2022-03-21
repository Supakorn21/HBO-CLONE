/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useStateContext } from "../../HBOProvider";
import { useClickOutSide } from "../../Hooks/useClickOutSide";
import Link from "next/link";
import { useState } from "react";

const GenreNav = ({ genresData, mediaType }) => {
  const globalState = useStateContext();

  const domNode = useClickOutSide(() => {
    globalState.setSideNavOpenAction(false);
  });

  const [activeNav, setActiveNav] = useState(false);
  setTimeout(() => setActiveNav(true), 100);

  return (
    <>
      <ul
        ref={domNode}
        className={`genre-nav ${activeNav ? "genre-nav--active" : ""}`}
      >
        <GenreList genresData={genresData} mediaType={mediaType} />
        
      </ul>
    </>
  );
};

const GenreList = ({ genresData, mediaType }) => {
  return genresData.map((item) => {
    return(
      <li key={item.id}>
          <a href={`/${mediaType}/genre/${item.id}`}>
            {item.name}
          </a>
        </li>
    )
  } );
};

export default GenreNav;
