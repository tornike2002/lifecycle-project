import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="container mt-5 pt-5 d-flex justify-content-between align-items-center">
      <h1>© 2021 Life ART. All rights reserved.</h1>
      <div className="footer-icons d-flex gap-3">
        <i className="ft-icons fa-brands fa-facebook"></i>
        <i className="ft-icons fa-brands fa-twitter"></i>
        <i className="ft-icons fa-brands fa-instagram"></i>
        <i className="ft-icons fa-brands fa-youtube"></i>
      </div>
    </footer>
  );
};

export default Footer;
