import React from "react";
import Navbar from "../Navbar";
import "./Home.css";
import HomeTime from "./homecomponents/HomeTime";
import LittleIntro from "./homecomponents/LittleIntro";

const Home = () => {
  const targetDate = "2023-12-31T23:59:59"; // Replace this with your desired target date
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
          <button type="button" className="btn btn-outline-light p-3">
            VIEW MY GALLERY
          </button>
        </div>
      </header>

      <section>
        <HomeTime targetDate={targetDate} />
      </section>
      <section>
        <LittleIntro />
      </section>
    </section>
  );
};

export default Home;
