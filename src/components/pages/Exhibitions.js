import React from "react";
import Navbar from "../Navbar";
import "./Exhibitions.css";
import exhibitions from "../../assets/exhibitions.png";
import exhibitions1 from "../../assets/exhibitions1.png";
import Footer from "../Footer";
const Exhibitions = () => {
  return (
    <div>
      <Navbar />
      <div className="exhibit-main-container container mt-5">
        <h1 className="reus-h">Exhibitions</h1>
        <hr className="w-25 text-danger" />
        <div className="exhibition-text-content d-flex align-items-start justify-content-between pt-5">
          <h1>Little Re Riding Hood</h1>
          <p className="reus-small-p w-50 mw-100">
            My name is Dominica Boivin and I’m a professional fine artist based
            in Los Angeles, CA. I take inspiration from the innovative styles of
            contemporary and urban art, such as graphic and graffiti
            illustrations. I am always open to new artistic challenges and
            collaborations. Feel free to contact me if you need a unique,
            one-of-a-kind artwork. “But my only sincere intention is to simply
            transfer the intimacy and vulnerability of my human experience into
            a painted surface.”
          </p>
        </div>

        <div className="exhibitions-ticket-side pt-5 d-flex gap-3 flex-column">
          <div className="tickets-one d-flex gap-5 align-items-center position-relative">
            <img src={exhibitions} alt="das" className=" mw-100 w-25" />
            <h1 className="position-absolute ticket-side-number">19</h1>
            <div className="ticket-one-text d-flex flex-column gap-5">
              <div className="first-tickets d-flex gap-3">
                <h1>$56</h1>
                <h1>Standart</h1>
                <button type="button" class="btn btn-outline-danger">
                  BUY TICKETS NOW
                </button>
              </div>
              <div className="first-tickets d-flex gap-3">
                <h1>$45</h1>
                <h1>Special</h1>
                <button type="button" class="btn btn-outline-danger">
                  BUY TICKETS NOW
                </button>
              </div>
              <div className="first-tickets d-flex gap-3">
                <h1>$65</h1>
                <h1>Premium</h1>
                <button type="button" class="btn btn-outline-danger">
                  BUY TICKETS NOW
                </button>
              </div>
            </div>
          </div>
          {/* second tickets */}
          <div className="tickets-one d-flex gap-5 align-items-center position-relative">
            <img src={exhibitions1} alt="das" className="mw-100 w-25" />
            <h1 className="position-absolute ticket-side-number">25</h1>
            <div className="ticket-one-text d-flex flex-column gap-5">
              <div className="first-tickets d-flex gap-3">
                <h1>$56</h1>
                <h1>Standart</h1>
                <button type="button" class="btn btn-outline-danger">
                  BUY TICKETS NOW
                </button>
              </div>
              <div className="first-tickets d-flex gap-3">
                <h1>$75</h1>
                <h1>Special</h1>
                <button type="button" class="btn btn-outline-danger">
                  BUY TICKETS NOW
                </button>
              </div>
              <div className="first-tickets d-flex gap-3">
                <h1>$80</h1>
                <h1>Premium</h1>
                <button type="button" class="btn btn-outline-danger">
                  BUY TICKETS NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exhibitions;
