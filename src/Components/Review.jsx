import React, { useRef, useState, useEffect } from "react";
import review_1 from "../assets/Review_1.png";
import review_2 from "../assets/Review_2.png";
import review_3 from "../assets/Review_3.png";
import review_4 from "../assets/Review_4.png";
import star from "../assets/star.svg";
import quotation from "../assets/Quotation.svg";

import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, A11y } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const reviews = [
    {
      image: review_1,
      review:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas id orci in sodales. Sed commodo orci consectetur ultrices scelerisque. Aliquam a finibus velit. Maecenas at nisi finibus, lacinia augue eu, vehicula arcu. Praesent et magna nisl. Quisque congue orci eu nulla consectetur tincidunt. Sed ullamcorper rutrum mi, sed gravida augue porttitor...”",
      reviewer: "Jonatha Doe",
    },
    {
      image: review_2,
      review:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas id orci in sodales. Sed commodo orci consectetur ultrices scelerisque. Aliquam a finibus velit. Maecenas at nisi finibus, lacinia augue eu, vehicula arcu. Praesent et magna nisl. Quisque congue orci eu nulla consectetur tincidunt. Sed ullamcorper rutrum mi, sed gravida augue porttitor...”",
      reviewer: "Jonatha Doe2",
    },
    {
      image: review_3,
      review:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas id orci in sodales. Sed commodo orci consectetur ultrices scelerisque. Aliquam a finibus velit. Maecenas at nisi finibus, lacinia augue eu, vehicula arcu. Praesent et magna nisl. Quisque congue orci eu nulla consectetur tincidunt. Sed ullamcorper rutrum mi, sed gravida augue porttitor...”",
      reviewer: "Jonatha Doe3",
    },
    {
      image: review_4,
      review:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas id orci in sodales. Sed commodo orci consectetur ultrices scelerisque. Aliquam a finibus velit. Maecenas at nisi finibus, lacinia augue eu, vehicula arcu. Praesent et magna nisl. Quisque congue orci eu nulla consectetur tincidunt. Sed ullamcorper rutrum mi, sed gravida augue porttitor...”",
      reviewer: "Jonatha Doe4",
    },
  ];

  return (
    <div className="wrapper">
      <div className="review_container" data-aos="fade-up">
        <h3>WHAT OUR CLIENTS SAY ABOUT US</h3>

        <div className="review_card_container">
          <div className="review_card_container_left" data-aos="fade-up">
            <h4>WHAT OUR CLIENTS SAY ABOUT US</h4>
            <p className="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sagittis nunc sit amet nisl blandit, nec aliquam nisi eleifend.
              Proin vel odio eu sem placerat lacinia ut non nisi. Nam maximus
              nunc ac nisl hendrerit, sit amet mollis nisi molestie. Nulla vel
              nibh eget lectus suscipit iaculis.
            </p>
            <div className="image_container">
              <div className="image">
                <img src={review_1} alt="" />
              </div>
              <div className="image">
                <img src={review_2} alt="" />
              </div>
              <div className="image">
                <img src={review_3} alt="" />
              </div>
              <div className="image">
                <img src={review_4} alt="" />
              </div>
            </div>
            <div className="review_count_container">
              <img src={star} alt="" />
              <p>
                5.0 <span className="fade_font">(5000 reviews)</span>
              </p>
            </div>
          </div>

          <div className="review_card_container_right" data-aos="fade-up">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              loop={true}
              slidesPerView={1}
              direction="vertical"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="review_slider_container"
              spaceBetween={500}
              speed={1000}
            >
              {reviews.map((item, index) => (
                <SwiperSlide key={index} className="slider">
                  <div className="reviewer_image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="right_review_container">
                    <p className="review">{item.review}</p>
                    <div className="star_container">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={star} alt="Star" />
                      ))}
                    </div>
                    <h5>{item.reviewer}</h5>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="overlap_review"></div>

            <div className="review_swiper_button_container_left">
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <MdOutlineKeyboardArrowLeft />
              </button>
            </div>
            <div className="review_swiper_button_container_right">
              <button onClick={() => swiperRef.current?.slideNext()}>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
