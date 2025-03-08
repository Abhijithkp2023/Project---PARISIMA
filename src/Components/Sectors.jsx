import React from "react";
import arrow_right from "../assets/Arrow_right.svg";
import pentagon from "../assets/Pentagon.svg";

import fly from "../assets/Fly.svg";
import telecom from "../assets/Telecom.svg";
import digital from "../assets/Digital.svg";
import calendar from "../assets/Calendar.svg";

const Sectors = () => {
  return (
    <div className="sector_container">
      <div className="sectors_top">
        <div className="sectors_top_left">
          <h2>SECTORS</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="sectors_top_">
          <button className="custom_button">
            View All <img src={arrow_right} alt="" />
          </button>
        </div>
      </div>

      <div className="sectors_bottom">
        <div className="sector_card">
          <div className="pentagon">
            <img src={fly} alt="" />
          </div>
          <h3>AVIATION</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="sector_button_container">
            <button className="custom_button">
              Learn More
              <img src={arrow_right} alt="" />
            </button>
          </div>
        </div>
        <div className="sector_card">
          <div className="pentagon">
            <img src={telecom} alt="" />
          </div>
          <h3>IT AND TELECOMS</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="sector_button_container">
            <button className="custom_button">
              Learn More
              <img src={arrow_right} alt="" />
            </button>
          </div>
        </div>
        <div className="sector_card">
          <div className="pentagon">
            <img src={digital} alt="" />
          </div>
          <h3>DIGITAL</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="sector_button_container">
            <button className="custom_button">
              Learn More
              <img src={arrow_right} alt="" />
            </button>
          </div>
        </div>
        <div className="sector_card">
          <div className="pentagon">
            <img src={calendar} alt="" />
          </div>
          <h3>EVENT MANAGEMENT</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="sector_button_container">
            <button className="custom_button">
              Learn More
              <img src={arrow_right} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectors;
