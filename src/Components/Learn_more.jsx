import React, { useEffect } from "react";
import learn_more1 from "../assets/Learn_more_1.png";
import learn_more2 from "../assets/Learn_more_2.png";
import learn_more3 from "../assets/Learn_more_3.png";
import learn_more4 from "../assets/Learn_more_4.png";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

const Learn_more = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 150,
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="learn_container" data-aos="fade-up">
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
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              loop={true}
              slidesPerView={4}
              className="learn_slider_container"
              spaceBetween={30}
              speed={1000}
              pagination={true}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              breakpoints={{
                890: { slidesPerView: 4 },
                650: { slidesPerView: 3 },
                0: { slidesPerView: 2, spaceBetween: 10 },
              }}
            >
              <SwiperSlide className="learn_slider">
                <div className="learn_card_1 learn_card">
                  <img src={learn_more1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="learn_slider">
                <div className="learn_card_2 learn_card">
                  <img src={learn_more2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="learn_slider">
                <div className="learn_card_3 learn_card">
                  <img src={learn_more3} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="learn_slider">
                <div className="learn_card_4 learn_card">
                  <img src={learn_more4} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn_more;
