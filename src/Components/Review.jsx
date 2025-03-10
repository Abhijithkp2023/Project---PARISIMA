import React, { useRef } from "react";
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

const Review = () => {
  const swiperRef = useRef(null);

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
    <div className="review_container">
      <h3>WHAT OUR CLIENTS SAY ABOUT US</h3>
      <div className="review_card_container">
        <div className="review_card_container_left">
          <h4>
            WHAT OUR CLIENTS SAY <br /> ABOUT US
          </h4>
          <p className="review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            sagittis nunc sit amet nisl blandit, nec aliquam nisi eleifend.
            Proin vel odio eu sem placerat lacinia ut non nisi. Nam maximus nunc
            ac nisl hendrerit, sit amet mollis nisi molestie. Nulla vel nibh
            eget lectus suscipit iaculis.
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

        <div className="review_card_container_right">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            loop={true}
            slidesPerView={1}
            direction="vertical" 
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="review_slider_container"
            spaceBetween={100}
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index} className="slider">
                <div className="reviewer_image">
                  <img src={item.image} alt="" />
                </div>
                <p className="review">{item.review}</p>
                <div className="star_container">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <h5>{item.reviewer}</h5>
                <div className="overlap_review"></div>
              </SwiperSlide>
            ))}
          </Swiper>

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
  );
};

export default Review;
