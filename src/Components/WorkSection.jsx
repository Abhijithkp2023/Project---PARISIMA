import React, { useRef, useEffect } from "react";
import recruitment from "../assets/Recruitment.png";
import placement from "../assets/placement.PNG";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Arrow_right_white from "../assets/Arrow_right_white.svg";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import arrow_left from "../assets/arrow_left_button.svg";
import arrow_right from "../assets/arrow_right_button.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const WorkSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      // offset: 100,
    });
  }, []);

  return (
    <div className="work_section">
      <div className="work_left" data-aos="fade-up">
        <h2>How We Work</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          porttitor sollicitudin est. Praesent id nibh mi. Aliquam commodo
          tellus sit amet libero volutpat scelerisque. Quisque eu blandit
          turpis, in porttitor purus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc mattis vitae mauris sed pharetra. Vivamus non ex
          suscipit, blandit lacus id, hendrerit nisi.
        </p>
        <div className="work_left_button">
          <p>Explore</p>
          <img src={Arrow_right_white} alt="" />
        </div>
      </div>

      {/* <div className="work_right" data-aos="zoom-in"> */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          690: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        // speed={1000}
        className="work_right"
        data-aos="fade-up"
      >
        <SwiperSlide className="slides" data-aos="fade-up">
          <div className="slide_image_container">
            <img src={recruitment} alt="Recruitment" />
          </div>
          <h2>Recruitment Process Outsourcing (RPO)</h2>
        </SwiperSlide>
        <SwiperSlide className="slides">
          <div className="slide_image_container">
            <img src={placement} alt="Recruitment" />
          </div>
          <h2>Permanent placement</h2>
        </SwiperSlide>
        <SwiperSlide className="slides">
          <div className="slide_image_container">
            <img src={recruitment} alt="Recruitment" />
          </div>
          <h2>Recruitment Process Outsourcing (RPO)</h2>
        </SwiperSlide>
        <SwiperSlide className="slides">
          <div className="slide_image_container">
            <img src={placement} alt="Recruitment" />
          </div>
          <h2>Permanent placement</h2>
        </SwiperSlide>
      </Swiper>
      {/* </div> */}

      <div className="arrow_container">
        <div className="arrow" ref={prevRef}>
          <img src={arrow_left} alt="" />
        </div>
        <div className="arrow" ref={nextRef}>
          <img src={arrow_right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
