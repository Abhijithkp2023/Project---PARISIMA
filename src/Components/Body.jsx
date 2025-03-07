import React from "react";

import clients from "../assets/Client.svg";
import employ from "../assets/Employ.svg";
import thumb from "../assets/Thumb.svg";

import building from "../assets/Building_image.png";
import meeting from "../assets/meeting_image.png";

import Arrow_right from "../assets/Arrow_right.svg";
import ceo from "../assets/ceo_image.png";
import Sectors from "./Sectors";

import Recruitment from "../assets/Recruitment.png"
import placement from "../assets/placement.PNG"

const Body = () => {
  return (
    <section className="body_container">
      {/* -----introduction section ------- */}

      <div className="intro_container">
        <div className="intro_top">
          <div className="intro_top_left">
            <div className="image_one_container">
              <img src={building} alt="" />
            </div>
            <div className="image_two_container">
              <img src={meeting} alt="" />
            </div>
          </div>
          <div className="intro_top_right">
            <h2>
              We build leading edge infrastructure within your organisation
            </h2>
            <p>
              Parisima enables clients to improve their performance through
              better talent acquisition. We deliver world-class talent
              acquisition solutions, from Board and Executive moves, through to
              training, strategic hiring projects and complex recruitment
              programmes across geographies. Parisima has the expertise to
              provide best practice, cost effective and agile solutions.
              Bringing together Recruitment Process. Outsourcing (RPO),
              Permanent Placement, Contract Staffing and Assessment Centres,
              Parisima has the capability to create a unique solution to meet
              your needs.
            </p>
            <div>
              <p>
                Get Started <img src={Arrow_right} alt="" />
              </p>
            </div>
          </div>
        </div>
        <div className="intro_middle">
          <div className="counter">
            <img src={clients} alt="" />
            <div>
              <p>Clients</p>
              <h2>3,500+</h2>
            </div>
          </div>
          <div className="counter">
            <img src={employ} alt="" />
            <div>
              <p>Employees</p>
              <h2>16,000+</h2>
            </div>
          </div>
          <div className="counter">
            <img src={thumb} alt="" />
            <div>
              <p>Years of Experience</p>
              <h2>80+</h2>
            </div>
          </div>
        </div>

        <div className="intro_bottom">
          <div className="intro_bottom_text">
            <h3>CEO Message</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              malesuada lacus sit amet consectetur sollicitudin. Vivamus
              condimentum at urna at hendrerit. Sed in laoreet ex. Curabitur at
              mauris ipsum. Praesent scelerisque mi et aliquet commodo. Aliquam
              ullamcorper ante mattis volutpat vulputate. Morbi tincidunt ante
              urna, ac congue odio laoreet quis. Nam nibh velit, porta in
              pharetra et, condimentum eu leo.
            </p>
            <div>
              <h4>Tiago Costa</h4>
              <p>CEO, Parisima</p>
            </div>
          </div>
          <div className="intro_bottom_ceo">
            <img src={ceo} alt="" />
          </div>
        </div>
      </div>

      <div className="work_section">
        <div className="work_left">
          <div>
            <h2>How We Work</h2>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              porttitor sollicitudin est. Praesent id nibh mi. Aliquam commodo
              tellus sit amet libero volutpat scelerisque. Quisque eu blandit
              turpis, in porttitor purus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc mattis vitae mauris sed
              pharetra. Vivamus non ex suscipit, blandit lacus id, hendrerit
              nisi.
            </div>
            <div className="work_section_button">
              <p>
                Explore
                <img src={Arrow_right} alt="" />
              </p>
            </div>
          </div>
        </div>
        <div className="work_right">
          <div className="work_slider_container">
          <img src={Recruitment} alt="" />
          </div>
          {/* <img src={placement} alt="" /> */}
        </div>
        <div className="work_right">
          <div className="work_slider_container">
          <img src={placement} alt="" />
          </div>
          {/* <img src={placement} alt="" /> */}
        </div>
      </div>

      <Sectors />
    </section>
  );
};

export default Body;
