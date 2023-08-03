import React from "react";
import "./News.css";
import newsPic from "../../../assets/footer-upwords.jpg";

const News = () => {
  return (
    <div className="news-main-div container mt-5 position-relative">
      <div className="news-content-wrapper d-flex">
        <div className="news-text-content d-flex align-items-center flex-column gap-5 justify-content-between">
          <div className="news-content-one w-100 mw-100">
            {/* start */}
            <h1 className="reus-h">Latest News</h1>
            <h2 className="w-50 mw-100">
              The most common mistakes when managing personal finances
            </h2>
            <span>
              <i className="fa-solid fa-calendar-days"></i> 03.03.2021
            </span>
            <p className="reus-small-p w-75 mw-100 pt-2">
              The ability to manage money competently is especially valuable
              quality in the conditions of financial crisis, when the purchasing
              power of the population is shrinking, inflation is rising, and
              currency exchange rates are completely unpredictable.
            </p>
            {/* end */}
          </div>
          <div className="news-content-two">
            {/* start */}
            <h2>Methods of the recruitment</h2>
            <span>
              <i className="fa-solid fa-calendar-days"></i> 03.03.2021
            </span>
            <p className="reus-small-p w-50 mw-100 pt-2">
              Search of staff is not an easy task. According to the departmental
              heads' of personnel management words, in order to find a personnel
              who will correspond to the relevant customer needs and
              requirements, it is necessary to carry out a great job.
            </p>
            {/* end */}

          </div>
        </div>
        <div className="news-image-div w-100 w-100 mw-100 position-absolute">
          <img className="w-100 mw-100" src={newsPic} alt="dsa" />
        </div>
      </div>
    </div>
  );
};

export default News;
