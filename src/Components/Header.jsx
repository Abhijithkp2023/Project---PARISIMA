import React, { useState } from "react";
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

import cloud from "../assets/hero_image_2.png";

import hero_image from "../assets/hero_image.png";
import hero_round from "../assets/hero_round.png";
import hero_vector from "../assets/hero_vector.svg";

import { IoMdClose } from "react-icons/io";

import round from "../assets/Round.png";
import round_text from "../assets/Round_text.svg";

import Arrow_right from "../assets/Arrow_right.svg";

import { IoIosArrowDown } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";

import { RiMenu2Fill } from "react-icons/ri";

const Header = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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

  const handleSidebar = () => {
    console.log("clicked");

    setSidebarActive(!sidebarActive);
  };

  const handleShowDropwnDown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  return (
    <header className="header_container">
      <div className={`sidebar ${sidebarActive ? "sidebar_active" : ""}`}>
        <IoMdClose size={30} onClick={handleSidebar} className="close_icon" />
        <div className="sidebar_container">
          <ul className="sidebar_ul">
            <li className="sidebar_link">
              {/* <a href="" className="" onClick={(e) => e.preventDefault()}> */}
              <div className="sidebar_text_container">
                <p>ABOUT US </p>
                <FaChevronRight
                  onClick={() => handleShowDropwnDown("ABOUT_US")}
                  size={20}
                  className={`${
                    openDropdown === "ABOUT_US" ? "icon_rotate" : ""
                  }`}
                />
              </div>

              <div
                className={`sidebar_dropdown_menu ${
                  openDropdown === "ABOUT_US" ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <p className="sub_menu">Item 1</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <p className="sub_menu">Item 2</p>
                    </a>
                  </li>
                </ul>
              </div>
              {/* </a> */}
            </li>

            <li className="sidebar_link">
              {/* <a href="" className="" onClick={(e) => e.preventDefault()}> */}
              <div className="sidebar_text_container">
                <p>OUR SERVICES </p>
                <FaChevronRight
                  onClick={() => handleShowDropwnDown("OUR_SERVICES")}
                  size={20}
                  className={`${
                    openDropdown === "OUR_SERVICES" ? "icon_rotate" : ""
                  }`}
                />
              </div>
              <div
                className={`sidebar_dropdown_menu ${
                  openDropdown === "OUR_SERVICES" ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <p className="sub_menu">Servivce 1</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <p className="sub_menu">Service 2</p>
                    </a>
                  </li>
                </ul>
              </div>
              {/* </a> */}
            </li>

            <li className="sidebar_link">
              {/* <a href="" className="" onClick={(e) => e.preventDefault()}> */}
              <div className="sidebar_text_container">
                <p>FOR CANDIDATES </p>
                <FaChevronRight
                  onClick={() => handleShowDropwnDown("FOR_CANDIDATES")}
                  size={20}
                  className={`${
                    openDropdown === "FOR_CANDIDATES" ? "icon_rotate" : ""
                  }`}
                />
              </div>
              <div
                className={`sidebar_dropdown_menu ${
                  openDropdown === "FOR_CANDIDATES" ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <p className="sub_menu">Candidate 1</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <p className="sub_menu">Candidate 2</p>
                    </a>
                  </li>
                </ul>
              </div>
              {/* </a> */}
            </li>
            <li className="sidebar_link">
              {/* <a href="" className="" onClick={(e) => e.preventDefault()}> */}
              <div className="sidebar_text_container">
                <p>OUR EXPERTISE </p>
                <FaChevronRight
                  onClick={() => handleShowDropwnDown("OUR_EXPERTISE")}
                  size={20}
                  className={`${
                    openDropdown === "OUR_EXPERTISE" ? "icon_rotate" : ""
                  }`}
                />
              </div>
              <div
                className={`sidebar_dropdown_menu ${
                  openDropdown === "OUR_EXPERTISE" ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <p className="sub_menu">Expertise 1</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <p className="sub_menu">Expertise 2</p>
                    </a>
                  </li>
                </ul>
              </div>
              {/* </a> */}
            </li>
            <li className="sidebar_link">
              <a href="" onClick={(e) => e.preventDefault()}>
                <p>INSIGHTS</p>
              </a>
            </li>
            <li className="sidebar_link">
              <a href="" onClick={(e) => e.preventDefault()}>
                <p>CAREERS</p>{" "}
              </a>
            </li>
            <li className="sidebar_link">
              <a href="" onClick={(e) => e.preventDefault()}>
                <p>CONTACT US </p>
              </a>
            </li>
            <li className="sidebar_link">
              <a href="" onClick={(e) => e.preventDefault()}>
                <p> عربي</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {sidebarActive && (
        <div className="sidebr_overlay" onClick={handleSidebar}></div>
      )}

      <div className="header_sub_container">
        <div className="gradient_container"></div>

        <div className="clouds">
          <img src={cloud} style={{ "--i": 1 }} alt="" />
          <img src={cloud} style={{ "--i": 2 }} alt="" />
        </div>

        <div className="wrapper">
          {/* <div className="nav_container"> */}
          <nav className="nav">
            <div className="nav_top">
              <div className="nav_top_left_icons">
                <ul>
                  <li>
                    <img src={phone} alt="" />
                  </li>
                  <li>
                    <img src={mail} alt="" />
                  </li>
                  <li>|</li>
                  <li>عربي</li>
                </ul>
              </div>

              <div className="nav_top_left">
                <div className="phone">
                  <a href="tel:+971 (0)4 586 7200">
                    <img src={phone} alt="" />
                    <p>+971 (0)4 586 7200</p>
                  </a>
                </div>
                <div className="mail">
                  <a href="mailto:info@parisima.com">
                    <img src={mail} alt="" />
                    <p>info@parisima.com</p>
                  </a>
                </div>
              </div>

              <div className="nav_top_right">
                <div className="job_register">
                  <a href="">
                    <img src={register} alt="" />
                    <p>REGISTER YOUR JOB</p>
                  </a>
                </div>
                <div className="cv_register">
                  <a href="">
                    <img src={user} alt="" />
                    <p>REGISTER YOUR CV</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="logo_container">
              <img src={logo} alt="" />
            </div>

            <div className="nav_bottom">
              <div className="hamburger_container">
                <RiMenu2Fill size={40} onClick={handleSidebar} />
              </div>

              <div className="nav_links">
                <ul className="nav_ul">
                  <li className="nav_li">
                    <a href="" className="nav_link">
                      <div className="link">
                        <p>ABOUT US </p>
                        <IoIosArrowDown />
                      </div>
                      <div className="dropdown_menu">
                        <ul>
                          <li>
                            <a href="#">Item 1</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className="nav_li">
                    <a href="" className="nav_link">
                      <div className="link">
                        <p>OUR SERVICES </p>
                        <IoIosArrowDown />
                      </div>
                      <div className="dropdown_menu">
                        <ul>
                          <li>
                            <a href="#">Servivce 1</a>
                          </li>
                          <li>
                            <a href="#">Service 2</a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className="nav_li">
                    <a href="" className="nav_link">
                      <div className="link">
                        <p>FOR CANDIDATES </p>
                        <IoIosArrowDown />
                      </div>
                      <div className="dropdown_menu">
                        <ul>
                          <li>
                            <a href="#">Candidate 1</a>
                          </li>
                          <li>
                            <a href="#">Candidate 2</a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className="nav_li">
                    <a href="" className="nav_link">
                      <div className="link">
                        <p>OUR EXPERTISE </p>
                        <IoIosArrowDown />
                      </div>
                      <div className="dropdown_menu">
                        <ul>
                          <li>
                            <a href="#">Expertise 1</a>
                          </li>
                          <li>
                            <a href="#">Expertise 2</a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className="nav_li">
                    <a href=""> INSIGHTS</a>
                  </li>
                  <li className="nav_li">
                    <a href=""> CAREERS </a>
                  </li>
                  <li className="nav_li">
                    <a href="">CONTACT US </a>
                  </li>
                  <li className="nav_li">
                    <a href="">عربي</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* </div> */}
        </div>

        <div className="wrapper">
          <div className="hero_text_container">
            <Swiper
              direction="vertical"
              pagination={{ clickable: true }}
              modules={[Pagination]}
              slidesPerView={1}
              loop={true}
              spaceBetween={50}
              className="hero_text_swiper"
              breakpoints={{
                768: {
                  direction: "vertical",
                },
                0: {
                  direction: "horizontal",
                },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="hero_text">
                  <div className="text_container">
                    <h1>{slide.title}</h1>
                    <p>{slide.text}</p>
                    <div className="hero_button">
                      <p>GET STARTED </p>
                      <img src={Arrow_right} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* <div className="hero_image">
        <img src={hero_image} alt="" />
      </div> */}

        {/* <div className="hero_round_container">
          <div className="scroll_text">
            <p>SCROLL DOWN - SCROLL DOWN - SCROLL DOWN</p>
          </div>
          <div className="hero_round"></div>
          <img src={hero_vector} alt="" className="hero_round_icon" />
        </div> */}
        <div className="hero_round_container">
          <div className="round_image_container">
            <img src={round} alt="" />
          </div>
          <div className="round_text_container">
            <img src={round_text} alt="" />
          </div>
        </div>

        {/* <div className="hero_round_icon">
        <img src={hero_vector} alt="" />
      </div> */}
      </div>
    </header>
  );
};

export default Header;
