import React, { useEffect } from "react";
import map from "../assets/Map.png";
import arrow_right_white from "../assets/Arrow_right_white.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Opportunities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 200,
    });
  }, []);

  return (
    <div className="wrapper opportunities_main_container">
      <div className="opportunities_text_container" data-aos="fade-up">
        <h2>OPPORTUNITIES ACROSS THE GCC REGION</h2>
        <p className="opportunities_para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolored exercitation
        </p>
        {/* <div className="opportunities_button">
          <p>EXPLORE OPPORTUNITIES </p>
          <img src={arrow_right_white} alt="" />
        </div> */}
        <button className="cyan_arrow_button">
          <p className="cyan_button_para">EXPLORE OPPORTUNITIES</p>
          <div className="button_img_container">
            <img className="button_img button_img_1" src={arrow_right_white} />
            <img className="button_img button_img_2" src={arrow_right_white} />
          </div>
        </button>
      </div>

      <div className="opportunities_bottom" data-aos="fade-up">
        <div className="opportunities_image_container">
          <img src={map} alt="" />
        </div>
        <div className="opportunities_button_container">
          <div className="opportunities_button_bottom">
            <p>Dubai</p>
          </div>
          <div className="opportunities_button_bottom">
            <p>Abu Dhabi </p>
          </div>
          <div className="opportunities_button_bottom">
            <p>Riyadh</p>
          </div>
        </div>
      </div>

      {/* 
      </div> */}
    </div>
  );
};

export default Opportunities;
