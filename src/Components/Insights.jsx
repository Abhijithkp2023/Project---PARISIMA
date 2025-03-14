import React, { useEffect } from "react";
import arrow_right_white from "../assets/Arrow_right_white.svg";
import insight1 from "../assets/Insight_1.png";
import insight2 from "../assets/Insight_2.png";
import insight3 from "../assets/Insight_3.png";
import insight4 from "../assets/Insight_4.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Insights = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="insight_container">
        <div className="insight_text">
          <h2>INSIGHTS</h2>
          <p>Get the latest news and updates from our blog</p>
        </div>

        <div className="insight_news">
          <div className="insight_news_1" data-aos="fade-up">
            <img src={insight1} alt="" />
            <div className="insight_image_overlay_text">
              <p>12 July, 2022</p>
              <h4>
                Dulsco acquires Parisima Talent as part of an expansion plan
              </h4>
            </div>
          </div>

          <div className="insight_news_2" data-aos="fade-up">
            <div className="insight_news_two_image">
              <img src={insight2} alt="" />
            </div>
            <p className="light">26 September, 2019</p>
            <h4>
              Parisima Talent wins two awards at the Gulf Capital SME Awards
              2019
            </h4>
            <p>
              Parisima, a strategic talent advisory and delivery business, is
              pleased to announce that it has won B2B...
            </p>
          </div>

          <div className="insight_news_3" data-aos="fade-up">
            <div className="insight_news_three_image">
              <img src={insight3} alt="" />
            </div>
            <p className="light">26 September, 2019</p>
            <h4>
              Parisima Talent wins two awards at the Gulf Capital SME Awards
              2019
            </h4>
            <p>
              Parisima, a strategic talent advisory and delivery business, is
              pleased to announce that it has won B2B...
            </p>
          </div>

          <div className="insight_news_4" data-aos="fade-up">
            <img src={insight4} alt="" />
            <div className="insight_image_overlay_text">
              <p>12 July, 2022</p>
              <h4>
              Delivering Recruitment Process Outsourcing (RPO) solutions across EMEA
              </h4>
            </div>
          </div>
        </div>

        <div className="insights_button">
          <p>VIEW ALL </p>
          <img src={arrow_right_white} alt="" />
          {/* <img src={arrow_right_white} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Insights;
