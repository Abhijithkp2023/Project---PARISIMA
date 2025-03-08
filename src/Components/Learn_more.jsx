import React from "react";
import learn_more1 from "../assets/Learn_more_1.png";
import learn_more2 from "../assets/Learn_more_2.png";
import learn_more3 from "../assets/Learn_more_3.png";
import learn_more4 from "../assets/Learn_more_4.png";

const Learn_more = () => {
  return (
    <div className="learn_container">
      <div className="learn_sub_container">
        <div className="learn_text_container">
          <h2>LEARN MORE ABOUT THE GROUPS</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="learn_cards_conatiner">
          <div className="learn_card">
            <img src={learn_more1} alt="" />
          </div>
          <div className="learn_card">
            <img src={learn_more2} alt="" />
          </div>
          <div className="learn_card">
            <img src={learn_more3} alt="" />
          </div>
          <div className="learn_card">
            <img src={learn_more4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn_more;
