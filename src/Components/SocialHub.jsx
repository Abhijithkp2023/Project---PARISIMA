import React, { useRef, useState, useEffect } from "react";
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

import AOS from "aos";
import "aos/dist/aos.css";

const SocialHub = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

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
    <div className="social_hub_container" data-aos="fade-up">
      <div className="social_header">
        <h3>SOCIAL HUB</h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        slidesPerView={"auto"}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="swiper_container"
        spaceBetween={50}
        breakpoints={{
          1600: { slidesPerView: 5 },
          // 1100: { slidesPerView: 4 },
          // 900: { slidesPerView: 3.5 },
          // 700: { slidesPerView: 3 },
          // 550: { slidesPerView: 2.5, loop: false },
          // 400: { slidesPerView: 1.7, loop: false },
          // 290: { slidesPerView: 1, loop: true },
        }}
      >
        {socials.map((slide, index) => {
          const isAlternate = (index - activeIndex) % 2 !== 0;
          return (
            <SwiperSlide
              className="social_slide"
              key={index}
              style={{
                transform: isAlternate ? "translateY(60px)" : "translateY(0px)",
                transition: "transform 0.4s ease-in",
              }}
            >
              <img src={slide} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper_button_container left_right_hover ">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SocialHub;
