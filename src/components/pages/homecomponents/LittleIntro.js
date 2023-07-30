import React from "react";
import "./LittleIntro.css";
import introbg from "../../../assets/intro-background.jpg";
const LittleIntro = () => {
  return (
    <div className="little-intro-main container pt-5 mt-5 pb-5">
      <div className="little-intro-text d-flex gap-5 align-items-start">
        <div className="little-helper d-flex flex-column w-25">
          <h1>A Little Intro</h1>
          <hr className="intro-hr text-danger" />
        </div>
        <div className="little-helper-paragraph">
          <p>
            My name is Dominica Boivin and I’m a professional fine artist based
            in Los Angeles, CA. I take inspiration from the innovative styles of
            contemporary and urban art.
          </p>
        </div>
      </div>
      <div className="little-intro-image pt-4">
        <img src={introbg} alt="introbg" />
      </div>
    </div>
  );
};

export default LittleIntro;
