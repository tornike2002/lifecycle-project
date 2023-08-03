import React from "react";
import "./Portfolio.css";
import card1 from "../../../assets/home-1.jpg";
import card2 from "../../../assets/home-2.jpg";
import card3 from "../../../assets/home-3.jpg";
import card4 from "../../../assets/home-4.jpg";
import card5 from "../../../assets/home-5.jpg";
import card6 from "../../../assets/home-6.jpg";
import card7 from "../../../assets/home-7.jpg";
import card8 from "../../../assets/home-8.jpg";
const Portfolio = () => {
  return (
    <div className="portfolio-main-div container mt-5">
      <div className="portfolio-title-container d-flex justify-content-between align-items-center gap-3">
        <h1 className="reus-h ">Portfolio</h1>
        <p className="reus-p w-75 mw-100">
          In the meantime, my paintings that started were started in Italy and
          finished in the US have become the subject of many different solo and
          group exhibitions including “Intimacy” at the Kunst Museum.
        </p>
      </div>
      <div className="portfolio-cards-container">
        <div className="row d-flex gap-3">
          <div className="col-xxl col-lg col-sm port-centering">
            <img src={card1} alt="card1" />
          </div>
          <div className="col-xxl col-lg col-sm port-centering">
            <img src={card2} alt="card1" />
          </div>
          <div className="col-xxl col-lg col-sm port-centering">
            <img src={card3} alt="card1" />
          </div>
          <div className="col-xxl col-lg col-sm port-centering">
            <img src={card4} alt="card1" />
          </div>
          <div className="col-xxl col-lg col-sm port-centering">
            <img src={card5} alt="card1" />
          </div>
          <div className="col-xxl col-lg col-sm port-centering">
            <img src={card6} alt="card1" />
          </div>
          <div className="col-xxl col-lg col-sm port-centering">
            <img src={card7} alt="card1" />
          </div>
          <div className="col-xxl col-lg col-sm port-centering">
            <img src={card8} alt="card1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
