import React, { useEffect } from "react";
import arrow_right from "../assets/Arrow_right.svg";
import pentagon from "../assets/Pentagon.png";

import fly from "../assets/Fly.svg";
import telecom from "../assets/Telecom.svg";
import digital from "../assets/Digital.svg";
import calendar from "../assets/Calendar.svg";
import Arrow_right from "../assets/Arrow_right.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Sectors = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      // offset: 100,
    });
  }, []);

  return (
    <div className="sector_container">
      <div className="wrapper">
        <div className="sector_sub_container">
          <div className="sectors_top" data-aos="fade-up">
            {/* data-aos="fade-up" */}
            <div className="sectors_top_left">
              <h2>SECTORS</h2>
              <p className="sector_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <br />
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              {/* <button className="sector_button for_small_device">
                <p className="sector_button_para">VIEW ALL</p>
                <img src={Arrow_right} alt="" />
              </button> */}

              <button className="White_arrow_button sector_button_small_device">
                <p className="white_button_para">VIEW ALL</p>
                <div className="button_img_container">
                  <img className="button_img button_img_1" src={Arrow_right} />
                  <img className="button_img button_img_2" src={Arrow_right} />
                </div>
              </button>
            </div>

            {/* <div className="sector_button top_button">
              <p className="sector_button_para">VIEW ALL</p>
              <img src={Arrow_right} alt="" />
            </div> */}
            <button className="White_arrow_button sector_top_button">
              <p className="white_button_para">VIEW ALL</p>
              <div className="button_img_container">
                <img className="button_img button_img_1" src={Arrow_right} />
                <img className="button_img button_img_2" src={Arrow_right} />
              </div>
            </button>
          </div>

          <div className="sectors_bottom">
            <div className="sector_card" data-aos="fade-up">
              {/* data-aos="fade-up" */}
              <div className="pentagon">
                <img src={pentagon} alt="" />
                <div className="sector_icon">
                  <img src={fly} alt="" />
                </div>
              </div>
              <h3>AVIATION</h3>
              <div className="sector_card_para_container">
                <p className="sector_para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <button className="White_arrow_button">
                <p className="white_button_para">GET STARTED </p>
                <div className="button_img_container">
                  <img className="button_img button_img_1" src={Arrow_right} />
                  <img className="button_img button_img_2" src={Arrow_right} />
                </div>
              </button>
            </div>
            <div className="sector_card" data-aos="fade-up">
              {/* data-aos="fade-up" */}
              <div className="pentagon">
                <img src={pentagon} alt="" />
                <div className="sector_icon">
                  <img src={telecom} alt="" />
                </div>
              </div>
              <h3>IT AND TELECOMS</h3>
              <div className="sector_card_para_container">
                <p className="sector_para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <button className="White_arrow_button">
                <p className="white_button_para">GET STARTED </p>
                <div className="button_img_container">
                  <img className="button_img button_img_1" src={Arrow_right} />
                  <img className="button_img button_img_2" src={Arrow_right} />
                </div>
              </button>
            </div>
            <div className="sector_card" data-aos="fade-up">
              {/* data-aos="fade-up" */}
              <div className="pentagon">
                <img src={pentagon} alt="" />
                <div className="sector_icon">
                  <img src={digital} alt="" />
                </div>
              </div>
              <h3>DIGITAL</h3>
              <div className="sector_card_para_container">
                <p className="sector_para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <button className="White_arrow_button">
                <p className="white_button_para">GET STARTED </p>
                <div className="button_img_container">
                  <img className="button_img button_img_1" src={Arrow_right} />
                  <img className="button_img button_img_2" src={Arrow_right} />
                </div>
              </button>
            </div>
            <div className="sector_card" data-aos="fade-up">
              {/* data-aos="fade-up" */}
              <div className="pentagon">
                <img src={pentagon} alt="" />
                <div className="sector_icon">
                  <img src={calendar} alt="" />
                </div>
              </div>
              <h3>EVENT MANAGEMENT</h3>
              <div className="sector_card_para_container">
                <p className="sector_para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <button className="White_arrow_button">
                <p className="white_button_para">GET STARTED </p>
                <div className="button_img_container">
                  <img className="button_img button_img_1" src={Arrow_right} />
                  <img className="button_img button_img_2" src={Arrow_right} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectors;
