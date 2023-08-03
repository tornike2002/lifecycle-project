import React from "react";
import "./Burgermenu.css";
import { NavLink } from "react-router-dom";
const Burgermenu = () => {
  return (
    <div className="container w-100 mw-100 p-0 mt-4">
      <div className="burg-navlink-container d-flex flex-column gap-3">
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/about">ABOUT ME</NavLink>
        <NavLink to="/exhibitions">EXHIBITIONS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </div>
  );
};

export default Burgermenu;
