import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../assets/nav-logo.png";
import "./Navbar.css";
import Burgermenu from "./UI/Burgermenu";
const Navbar = () => {
  const [burgermenu, setBurgermenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const burgermenuHandler = () => {
    setBurgermenu(!burgermenu);
  };

  const changeBackgroundHandler = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackgroundHandler);

  return (
    <div
      className={
        navbar
          ? "pt-3 pb-3 sticky-top nav-stick active"
          : "pt-3 pb-3 sticky-top nav-stick"
      }
    >
      <nav className=" container d-flex justify-content-between align-items-center flex-wrap">
        <div className="nav-logo d-flex align-items-center gap-3">
          <img src={navLogo} alt="logo" />
          <h1>LifeArt</h1>
        </div>
        <div className="nav-links-container d-flex gap-4">
          <NavLink to="/home" className="nav-link">
            HOME
          </NavLink>
          <NavLink to="/about" className="nav-link">
            ABOUT ME
          </NavLink>
          <NavLink to="/exhibitions" className="nav-link">
            EXHIBITIONS
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            CONTACT
          </NavLink>
        </div>
        <div className="nav-burgermenu-container">
          <i onClick={burgermenuHandler} className="fa-solid fa-bars"></i>
        </div>
        {burgermenu && (
          <div className="burger-menu-content w-100 mw-100">
            <Burgermenu />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
