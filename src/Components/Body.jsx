import React, { useRef, useState, useEffect } from "react";

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

import AOS from "aos";
import "aos/dist/aos.css";

const Body = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 200,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <section className="body_container">
      <section className="intro">
        <div className="intro_container">
          <div className="wrapper">
            <div className="intro_sub_container">
              <div className="intro_top">
                <div className="intro_top_left">
                  <div className="image_one_container" data-aos="fade-up">
                    <img src={building} alt="" />
                  </div>
                  <div className="image_two_container" data-aos="fade-up">
                    <img src={meeting} alt="" />
                  </div>
                </div>

                <div className="intro_top_right" data-aos="fade-up">
                  <h2>
                    WE BUILD LEADING EDGE INFRASTRUCTURE WITHIN YOUR
                    ORGANISATION
                  </h2>
                  <p>
                    Parisima enables clients to improve their performance
                    through better talent acquisition. We deliver world-class
                    talent acquisition solutions, from Board and Executive
                    moves, through to training, strategic hiring projects and
                    complex recruitment programmes across geographies. Parisima
                    has the expertise to provide best practice, cost effective
                    and agile solutions. Bringing together Recruitment Process.{" "}
                    <br />
                    <br />
                    Outsourcing (RPO), Permanent Placement, Contract Staffing
                    and Assessment Centres, Parisima has the capability to
                    create a unique solution to meet your needs.
                  </p>
                  <div className="intro_button">
                    <p className="intro_button_para">LEARN MORE</p>
                    <img src={Arrow_right} alt="" />
                  </div>
                </div>
              </div>

              <div className="intro_middle" ref={ref}>
                <div className="counter counter_start">
                  <div className="counter_image_container">
                    <img src={clients} alt="Clients" />
                  </div>
                  <div>
                    <p>Clients</p>
                    <h2>
                      {inView && (
                        <CountUp start={1000} end={3500} duration={3} />
                      )}
                      +
                    </h2>
                  </div>
                </div>
                <div className="counter counter_middle">
                  <div className="counter_image_container">
                    <img src={employ} alt="Clients" />
                  </div>
                  <div>
                    <p>Employees</p>
                    <h2>
                      {inView && (
                        <CountUp start={10000} end={16000} duration={3} />
                      )}
                      +
                    </h2>
                  </div>
                </div>
                <div className="counter counter_end">
                  <div className="counter_image_container">
                    <img src={thumb} alt="Clients" />
                  </div>
                  <div>
                    <p>Years of Experience</p>
                    <h2>
                      {inView && <CountUp start={50} end={80} duration={3} />}+
                    </h2>
                  </div>
                </div>
              </div>

              <div className="intro_bottom_container" data-aos="fade-up"></div>
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
              pharetra et.
            </p>
            <div>
              <h4>Tiago Costa</h4>
              <p className="ceo_para">CEO, Parisima</p>
            </div>
          </div>
          <div className="intro_bottom_ceo">
            <img src={ceo} alt="" />
          </div>
        </div>
      </section>

      <WorkSection />
      <Sectors />
      <Opportunities />

      <section className="new_office_container wrapper" data-aos="fade-up">
        <div className="new_office_sub_container"></div>
        <div className="new_office_text_container">
            <h4>
              Parisima Talent continues GCC expansion with new office in KSA
            </h4>
          </div>
      </section>

      {/* <div className="new_office_image_container"> */}
      {/* <img src={new_office} alt="" /> */}
      {/* </div> */}

      <Review />
      <Insights />
      <Learn_more />
      <SocialHub />
    </section>
  );
};

export default Body;
