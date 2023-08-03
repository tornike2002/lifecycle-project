import React from "react";
import "./About.css";
import Navbar from "../Navbar";
import about1 from "../../assets/home-1.jpg";
import about2 from "../../assets/home-2.jpg";
import about3 from "../../assets/home-3.jpg";
import about4 from "../../assets/home-4.jpg";
import about5 from "../../assets/home-5.jpg";
import about6 from "../../assets/home-6.jpg";
import EmailValidation from "../UI/EmailValidation";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-main-container container mt-3">
        <div className="about-text-cont d-flex  flex-column align-items-end">
          <h1 className="reus-h">About Me</h1>
          <hr className="w-25 text-danger" />
          <p className="reus-o w-50 mw-100">
            I take inspiration from the innovative styles of contemporary and
            urban art, such as graphic and graffiti illustrations. I am always
            open to new artistic challenges and collaborations.
          </p>
          <button type="button" className="btn btn-outline-secondary p-3">
            PORTFOLIO
          </button>
        </div>
      </div>

      <div className="about-center-side d-flex gap-4 container mt-5">
        <h1 className="reus-h">Upcoming Exhibitions</h1>
        <p className="reus-p">
          I never made one of my discoveries through the process of rational
          thinking. Around here, however, we don’t look backwards for very long.
          You will have a chance to admire more than 200 masterpieces.
        </p>
      </div>

      <div className="about-cards-side d-flex gap-5 container mt-5 pt-5">
        <div className="about-numbers d-flex flex-column justify-content-center">
          <h1 className="reus-h">19</h1>
          <p className="reus-small-p">March</p>
        </div>
        <div className="about-texts d-flex flex-column gap-2">
          <h1 className="reus-h">Little Red Riding Hood</h1>
          <p className="reus-small-p">
            You will have a chance to admire more than 200 masterpieces.
          </p>
        </div>
        <div className="about-buttons d-flex gap-3">
          <button type="button" className="btn  btn-outline-secondary">
            READ MORE
          </button>
          <button type="button" className="btn btn-outline-danger">
            BUY TICKETS NOW
          </button>
        </div>
      </div>
      <div className="about-cards-side d-flex gap-5 container mt-5 pt-5">
        <div className="about-numbers d-flex flex-column justify-content-center">
          <h1 className="reus-h">19</h1>
          <p className="reus-small-p">March</p>
        </div>
        <div className="about-texts d-flex flex-column gap-2">
          <h1 className="reus-h">Little Red Riding Hood</h1>
          <p className="reus-small-p">
            You will have a chance to admire more than 200 masterpieces.
          </p>
        </div>
        <div className="about-buttons d-flex gap-3">
          <button type="button" className="btn  btn-outline-secondary">
            READ MORE
          </button>
          <button type="button" className="btn btn-outline-danger">
            BUY TICKETS NOW
          </button>
        </div>
      </div>

      <div className="about-subscribe container d-flex flex-column justify-content-center mt-5 pt-5">
        <h1 className="reus-h">Subscribe to Our Newsletter</h1>
        <p className="reus-p">Get informations about our programs monthly</p>
        <EmailValidation />
      </div>
      <Footer />
    </div>
  );
};

export default About;
