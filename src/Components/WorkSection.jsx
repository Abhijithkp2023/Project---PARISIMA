import React, { useRef } from "react";
import recruitment from "../assets/Recruitment.png";
import placement from "../assets/placement.PNG";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Arrow_right_white from "../assets/Arrow_right_white.svg";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const WorkSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="work_section">
      <div className="work_left">
        {/* <div> */}
        <h2>How We Work</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          porttitor sollicitudin est. Praesent id nibh mi. Aliquam commodo
          tellus sit amet libero volutpat scelerisque. Quisque eu blandit
          turpis, in porttitor purus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc mattis vitae mauris sed pharetra. Vivamus non ex
          suscipit, blandit lacus id, hendrerit nisi.
        </p>
        <button className="custom_button_cyan">
          Explore <img src={Arrow_right_white} alt="" />
        </button>
        {/* </div> */}
      </div>
      <div className="work_right">
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          loop={true}
          spaceBetween={10}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="work_slider_container"
        >
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
      </div>

      <div className="arrow_container">
        <div className="arrow" ref={prevRef}>
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className="arrow" ref={nextRef}>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
