import React from "react";
import map from "../assets/Map.png";
import arrow_right from "../assets/Arrow_right.svg";

const Opportunities = () => {
  return (
    <div className="opportunities_main_container">
      <div className="opportunities_sub_container">
        <h2>OPPORTUNITIES ACROSS THE GCC REGION</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolored exercitation
        </p>
        <button className="custom_button_cyan">
          EXPLORE OPPORTUNITIES <img src={arrow_right} alt="" />
        </button>
        <div className="opportunities_image_container">
          <img src={map} alt="" />
        </div>
        <div className="opportunities_button_container">
          <button className="custom_button_cyan">Dubai</button>
          <button className="custom_button_cyan">Abu Dhabi</button>
          <button className="custom_button_cyan">Riyadh</button>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
