import React, { useRef, useState } from "react";
import social1 from "../assets/Social_1.png";
import social2 from "../assets/Social_2.png";
import social3 from "../assets/Social_3.png";
import social4 from "../assets/Social_4.png";
import social5 from "../assets/Social_5.png";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const SocialHub = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const socials = [
    social2,
    social3,
    social4,
    social5,
    social2,
    social3,
    social4,
    social5,
  ];

  return (
    <div className="social_hub_container">
      <div className="social_header">
        <h3>SOCIAL HUB</h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        slidesPerView={5}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="swiper_container"
        spaceBetween={15}
      >
        {socials.map((slide, index) => {
          const isAlternate = (index - activeIndex) % 2 !== 0;
          return (
            <SwiperSlide
              key={index}
              style={{
                transform: isAlternate ? "translateY(50px)" : "translateY(0px)",
                transition: "transform 0.4s ease-in",
              }}
            >
              <img src={slide} alt="" />
            </SwiperSlide>
          );
        })}

        <div className="swiper_button_container">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default SocialHub;
