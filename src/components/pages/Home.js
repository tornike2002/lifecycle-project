import React from "react";
import Navbar from "../Navbar";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <header className="home-main-header w-100 mw-100">
        <Navbar />
        <div className="header-main-text container d-flex flex-column align-items-end mt-5">
          <h2>HEY! IT'S ME</h2>
          <h1>Dominica</h1>
          <div className="header-main-text-corrector d-flex gap-3 align-items-center">
            <hr className="header-horizontal-line" />
            <h1>Boivin</h1>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Home;
