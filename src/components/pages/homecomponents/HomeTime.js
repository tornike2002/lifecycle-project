import React, { useEffect, useState } from "react";
import "./HomeTime.css";

const HomeTime = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDiff = targetTime - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="homeTime container d-flex justify-content-between pt-5">
      <div className="exhibitionContainer d-flex flex-column">
        <h1>Next</h1>
        <h1>Exhibition</h1>
        <button type="button" className="btn btn-outline-danger">
          BUY TICKETS NOW
        </button>
      </div>

      <div className="timer-container d-flex gap-5 align-items-center w-75p-2">
        <div className="time-days d-flex flex-column align-items-center">
          <h1>{timeRemaining.days}</h1>
          <h2>Days</h2>
        </div>
        <div className="time-hours d-flex flex-column align-items-center">
          <h1>{timeRemaining.hours}</h1>
          <h2>Hours</h2>
        </div>
        <div className="time-minutes d-flex flex-column align-items-center">
          <h1>{timeRemaining.minutes}</h1>
          <h2>Minutes</h2>
        </div>
        <div className="time-seconds d-flex flex-column align-items-center">
          <h1>{timeRemaining.seconds}</h1>
          <h2>Seconds</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeTime;
