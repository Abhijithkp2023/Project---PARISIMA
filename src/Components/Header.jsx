import React from "react";
import phone from "../assets/Phone.svg";
import mail from "../assets/Mail.svg";
import register from "../assets/Register.svg";
import user from "../assets/User.svg";
import logo from "../assets/Logo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import hero_image from "../assets/hero_image.png"
import hero_round from "../assets/hero_round.png"
import hero_vector from "../assets/hero_vector.svg"

import Arrow_right from "../assets/Arrow_right.svg";

import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const slides = [
    {
      title: "GCC expansion with new office in KSA",
      text: "Parisima is expanding its presence in the GCC with a new office in Riyadh dedicated to supporting growing demand for talent solutions in the Kingdom.",
    },
    {
      title: "New Talent Acquisition Solutions",
      text: "We are revolutionizing hiring strategies with cutting-edge talent solutions tailored for businesses in the region.",
    },
    {
      title: "Empowering Workforce Growth",
      text: "Our latest initiatives aim to enhance workforce development, ensuring businesses thrive in a competitive landscape.",
    },
    {
      title: "GCC expansion with new office in KSA",
      text: "Parisima is expanding its presence in the GCC with a new office in Riyadh dedicated to supporting growing demand for talent solutions in the Kingdom.",
    },
    {
      title: "New Talent Acquisition Solutions",
      text: "We are revolutionizing hiring strategies with cutting-edge talent solutions tailored for businesses in the region.",
    },
    {
      title: "Empowering Workforce Growth",
      text: "Our latest initiatives aim to enhance workforce development, ensuring businesses thrive in a competitive landscape.",
    },
  ];

  return (
    <header className="header_container">
      <div className="container">
        <div className="nav_container">
          <nav className="nav">
            <div className="nav_top">
              <div className="nav_top_left">
                <div className="phone">
                  <img src={phone} alt="" />
                  <p>+971 (0)4 586 7200</p>
                </div>
                <div className="mail">
                  <img src={mail} alt="" />
                  <p>info@parisima.com</p>
                </div>
              </div>
              <div className="nav_top_right">
                <div className="job_register">
                  <img src={register} alt="" />
                  <p>Register your Job</p>
                </div>
                <div className="cv_register">
                  <img src={user} alt="" />
                  <p>Register your CV</p>
                </div>
              </div>
            </div>

            <div className="nav_bottom">
              <div className="logo_container">
                <img src={logo} alt="" />
              </div>

              <div className="nav_links">
                <ul>
                  <li>
                    <a href="">
                      About Us <IoIosArrowDown />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      OUR SERVICES <IoIosArrowDown />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      FOR CANDIDATES <IoIosArrowDown />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      OUR EXPERTISE <IoIosArrowDown />
                    </a>
                  </li>
                  <li>
                    <a href=""> INSIGHTS</a>
                  </li>
                  <li>
                    <a href=""> CAREERS </a>
                  </li>
                  <li>
                    <a href="">CONTACT US </a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="">عربي</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* <div className="hero_image">
        <img src={hero_image} alt="" />
      </div> */}

      <div className="hero_round">
        <img src={hero_round} alt="" />
      </div>

      <div className="hero_round_icon"><img src={ hero_vector} alt="" /></div>

      {/* <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          vertical: true,
        }}
        direction="vertical"
        loop={true}
        slidesPerView={1}
        className="hero_text_slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero_text">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <div>
                <p>
                  Get Started <img src={Arrow_right} alt="" />
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </header>
  );
};

export default Header;
