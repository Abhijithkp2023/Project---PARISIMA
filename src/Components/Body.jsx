import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import clients from "../assets/Client.svg";
import employ from "../assets/Employ.svg";
import thumb from "../assets/Thumb.svg";

import building from "../assets/Building_image.png";
import meeting from "../assets/meeting_image.png";

import Arrow_right from "../assets/Arrow_right.svg";
import ceo from "../assets/ceo_image.png";
import Sectors from "./Sectors";

import recruitment from "../assets/Recruitment.png";
import placement from "../assets/placement.PNG";

import new_office from "../assets/Inauguration.png";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Opportunities from "./Opportunities";
import Learn_more from "./Learn_more";
import Insights from "./Insights";
import SocialHub from "./SocialHub";
import Review from "./Review";
import WorkSection from "./WorkSection";

const Body = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="body_container">
      {/* -----introduction section ------- */}

      <div className="intro_container">
        <div className="intro_sub_container">
          <div className="intro_top">
            <div className="intro_top_left">
              
              <div className="intro_top_left_image_overlap_container">
                <div className="image_one_container">
                  <img src={building} alt="" />
                </div>
                <div className="image_two_container">
                  <img src={meeting} alt="" />
                </div>
              </div>
            </div>

            <div className="intro_top_right">
              <h2>
                WE BUILD LEADING EDGE INFRASTRUCTURE WITHIN YOUR ORGANISATION
              </h2>
              <p>
                Parisima enables clients to improve their performance through
                better talent acquisition. We deliver world-class talent
                acquisition solutions, from Board and Executive moves, through
                to training, strategic hiring projects and complex recruitment
                programmes across geographies. Parisima has the expertise to
                provide best practice, cost effective and agile solutions.
                Bringing together Recruitment Process. <br />
                <br />
                Outsourcing (RPO), Permanent Placement, Contract Staffing and
                Assessment Centres, Parisima has the capability to create a
                unique solution to meet your needs.
              </p>
              <div>
                <button className="custom_button">
                  LEARN MORE <img src={Arrow_right} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="intro_middle" ref={ref}>
            <div className="counter">
              <img src={clients} alt="Clients" />
              <div>
                <p>Clients</p>
                <h2>
                  {inView && <CountUp start={1000} end={3500} duration={3} />}+
                </h2>
              </div>
            </div>
            <div className="counter">
              <img src={employ} alt="Employees" />
              <div>
                <p>Employees</p>
                <h2>
                  {inView && <CountUp start={10000} end={16000} duration={3} />}
                  +
                </h2>
              </div>
            </div>
            <div className="counter">
              <img src={thumb} alt="Years of Experience" />
              <div>
                <p>Years of Experience</p>
                <h2>
                  {inView && <CountUp start={50} end={80} duration={3} />}+
                </h2>
              </div>
            </div>
          </div>

          <div className="intro_bottom">
            <div className="intro_bottom_text">
              <h3>CEO Message</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                malesuada lacus sit amet consectetur sollicitudin. Vivamus
                condimentum at urna at hendrerit. Sed in laoreet ex. Curabitur
                at mauris ipsum. Praesent scelerisque mi et aliquet commodo.
                Aliquam ullamcorper ante mattis volutpat vulputate. Morbi
                tincidunt ante urna, ac congue odio laoreet quis. Nam nibh
                velit, porta in pharetra et, condimentum eu leo.
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
      </div>

      <WorkSection />

      <Sectors />
      <Opportunities />

      <section className="new_office_container">
        <div className="new_office_image_container">
          <img src={new_office} alt="" />
        </div>
        <div className="new_office_text_container">
          <h4>
            Parisima Talent continues GCC expansion with new office in KSA
          </h4>
        </div>
      </section>

      <Review />
      <Insights />
      <Learn_more />
      <SocialHub />
    </section>
  );
};

export default Body;
