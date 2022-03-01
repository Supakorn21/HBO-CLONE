import React from "react";
import Header from "../UI/Header/Header";
import SideNav from "../UI/SideNav/SideNav";

const MainLayout = ({ children }) => {
  return (
    <>
      <div
        style={{
          background:
            " linear-gradient(307deg, rgba(0,0,0,1) 55%, rgba(30,24,98,1) 100%)",
          minHeight: "100vh",
          backgroundAttachment: 'fixed'
        }}
      >
        <Header />
        <SideNav/>
        <section className="content-container">{children}</section>
      </div>
    </>
  );
};

export default MainLayout;
