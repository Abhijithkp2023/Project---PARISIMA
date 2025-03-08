import React from "react";
import arrow_white from "../assets/Arrow_right_white.svg";
import insight1 from "../assets/Insight_1.png";
import insight2 from "../assets/Insight_2.png";
import insight3 from "../assets/Insight_3.png";
import insight4 from "../assets/Insight_4.png";

const Insights = () => {
  return (
    <div className="insight_container">
      <div className="insight_text">
        <h2>INSIGHTS</h2>
        <p>Get the latest news and updates from our blog</p>
      </div>
      <div className="insight_news">
        <div className="insight_news_1">
          <img src={insight1} alt="" />
          <div className="insight_image_overlay_text">
            <p>12 July, 2022</p>
            <h4>
              DULSCO ACQUIRES PARISIMA TALENT AS PART OF AN EXPANSION PLAN
            </h4>
          </div>
        </div>

        <div className="insight_news_2">
          <div className="insight_news_two_image">
            <img src={insight2} alt="" />
          </div>
          <p className="light">26 September, 2019</p>
          <h4>
            Parisima Talent wins two awards at the Gulf Capital SME Awards 2019
          </h4>
          <p>
            Parisima, a strategic talent advisory and delivery business, is
            pleased to announce that it has won B2B...
          </p>
        </div>

        <div className="insight_news_3">
          <div className="insight_news_three_image">
            <img src={insight3} alt="" />
          </div>
          <p className="light">26 September, 2019</p>
          <h4>
            Parisima Talent wins two awards at the Gulf Capital SME Awards 2019
          </h4>
          <p>
            Parisima, a strategic talent advisory and delivery business, is
            pleased to announce that it has won B2B...
          </p>
        </div>

        <div className="insight_news_4">
          <img src={insight4} alt="" />
          <div className="insight_image_overlay_text">
            <p>12 July, 2022</p>
            <h4>
              DULSCO ACQUIRES PARISIMA TALENT AS PART OF AN EXPANSION PLAN
            </h4>
          </div>
        </div>
        
      </div>
      <div className="insight_button">
        <button className="custom_button_cyan">
          View All <img src={arrow_white} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Insights;
