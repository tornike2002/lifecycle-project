import React from "react";
import "./Burgermenu.css";
import { NavLink } from "react-router-dom";
const Burgermenu = () => {
  return (
    <div className="container w-100 mw-100 p-0 mt-4">
      <div className="burg-navlink-container d-flex flex-column gap-3">
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/">ABOUT ME</NavLink>
        <NavLink to="/">GALLERY</NavLink>
        <NavLink to="/">EXHIBITIONS</NavLink>
        <NavLink to="/">CONTACT</NavLink>
      </div>
    </div>
  );
};

export default Burgermenu;
