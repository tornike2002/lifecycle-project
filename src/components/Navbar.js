import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../assets/nav-logo.png";
import "./Navbar.css";
import Burgermenu from "./UI/Burgermenu";
const Navbar = () => {
  const [burgermenu, setBurgermenu] = useState(false);

  const burgermenuHandler = () => {
    setBurgermenu(!burgermenu);
  };
  return (
    <div className="container mt-3">
      <nav className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="nav-logo d-flex align-items-center gap-3">
          <img src={navLogo} alt="logo" />
          <h1>LifeArt</h1>
        </div>
        <div className="nav-links-container d-flex gap-4">
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/" className="nav-link">
            About ME
          </NavLink>
          <NavLink to="/" className="nav-link">
            GALLERY
          </NavLink>
          <NavLink to="/" className="nav-link">
            EXHIBITIONS
          </NavLink>
          <NavLink to="/" className="nav-link">
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
