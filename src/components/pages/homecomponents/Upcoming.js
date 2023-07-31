import React from "react";
import "./Upcoming.css";
import upcomingPhoto from "../../../assets/upcoming-bg.png";
const Upcoming = () => {
  return (
    <div className="upcoming-main-container d-flex pt-5 mt-5">
      <div className="upcoming-main-photo position-relative">
        <img className="w-100 mw-100" src={upcomingPhoto} alt="upcomingPhoto" />
      </div>
      <div className="upcoming-tickets-side d-flex flex-column position-absolute p-4">
        <h3>MY EXHIBITIONS</h3>
        <h1>Upcoming {<br />} Exhibitions</h1>
        <p className="w-50 mw-100">
          I never made one of my discoveries through the process of rational
          thinking. Around here, however, we don’t look backwards for very long.
        </p>

        <div className="upcoming-tickets-schedule d-flex gap-3 align-items-center">
          {/* first card */}
          <div className="schedule-wrapper">
            <div className="schedule-flex-column d-flex gap-3">
              <div className="schedule-container text-center">
                <h1>19</h1>
                <p>March</p>
              </div>
              <hr className="tickets-hr" />
              <div className="schedule-text">
                <h2>Little Red Riding Hood</h2>
                <p>
                  You will have a chance to admire more than 200 masterpieces.
                </p>
                <div className="schedule-buttons d-flex gap-3">
                  <button type="button" className="btn btn-outline-secondary">
                    READ MORE
                  </button>
                  <button type="button" className="btn btn-outline-danger">
                    BUY TICKETS NOW
                  </button>
                </div>
              </div>
            </div>

            {/* first card */}
            {/* second card */}
            <div className="schedule-flex-column d-flex gap-3">
              <div className="schedule-container text-center">
                <h1>19</h1>
                <p>March</p>
              </div>
              <hr className="tickets-hr" />
              <div className="schedule-text">
                <h2>Little Red Riding Hood</h2>
                <p>
                  You will have a chance to admire more than 200 masterpieces.
                </p>
                <div className="schedule-buttons d-flex gap-3">
                  <button type="button" className="btn btn-outline-secondary">
                    READ MORE
                  </button>
                  <button type="button" className="btn btn-outline-danger">
                    BUY TICKETS NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* second card */}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
