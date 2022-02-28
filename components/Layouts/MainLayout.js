import React from "react";
import Header from "../UI/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(45,253,239,1) 0%, rgba(45,34,195,1) 100%)",
          minHeight: "100vh",
        }}
      >
        <Header />
        <section className="content-container">{children}</section>
      </div>
    </>
  );
};

export default MainLayout;
