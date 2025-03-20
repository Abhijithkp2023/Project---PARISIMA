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
        <div className="sidebar_overlay" onClick={handleSidebar}></div>
      )}

      <div className="header_sub_container">
        <div className="gradient_container"></div>

        <div className="clouds">
          <img src={cloud} style={{ "--i": 1 }} alt="" />
          <img src={cloud} style={{ "--i": 2 }} alt="" />
        </div>

        {/* <div className="wrapper"> */}
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
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                  >
                    <path d="M2.97012 17.5039L3.4685 16.9435L3.46826 16.9432L2.97012 17.5039ZM16.0279 17.5039L15.5298 16.9432L15.5295 16.9435L16.0279 17.5039ZM17.0274 10.2917L16.8119 9.57334L16.8118 9.57336L17.0274 10.2917ZM17.6801 10.0316L18.1496 10.6165L18.1504 10.6159L17.6801 10.0316ZM17.9351 9.68828L17.2414 9.4031L17.2398 9.40703L17.9351 9.68828ZM17.7175 6.28955L17.0499 6.63137L17.05 6.63157L17.7175 6.28955ZM16.6101 5.18213L16.2681 5.8496L16.2683 5.84971L16.6101 5.18213ZM2.38794 5.18213L2.72977 5.84971L2.72997 5.8496L2.38794 5.18213ZM1.28053 6.28955L1.948 6.63157L1.9481 6.63137L1.28053 6.28955ZM1.0621 9.68828L0.366543 9.96881L0.366834 9.96953L1.0621 9.68828ZM1.31707 10.0316L0.846798 10.6159L0.849486 10.618L1.31707 10.0316ZM1.97149 10.2926L1.75534 11.0107L1.75599 11.0109L1.97149 10.2926ZM7.37432 12.6884H6.62432V12.6886L7.37432 12.6884ZM7.64118 13.0828L7.36218 13.7789L7.36264 13.7791L7.64118 13.0828ZM8.23611 13.3207L8.51474 12.6244L8.51465 12.6244L8.23611 13.3207ZM10.762 13.3207L10.4835 12.6244L10.4834 12.6244L10.762 13.3207ZM11.3569 13.0828L11.6355 13.7791L11.6359 13.7789L11.3569 13.0828ZM11.6238 12.6884L12.3738 12.6886V12.6884H11.6238ZM6.38659 2.95232C6.24876 3.34293 6.45369 3.77131 6.8443 3.90914C7.23491 4.04696 7.66329 3.84204 7.80112 3.45143L6.38659 2.95232ZM9.49906 1.5V0.75V1.5ZM11.197 3.45143C11.3348 3.84204 11.7632 4.04696 12.1538 3.90914C12.5444 3.77131 12.7494 3.34293 12.6115 2.95232L11.197 3.45143ZM1.09996 10.001C1.09996 11.592 1.09913 13.2613 1.24397 14.6585C1.31653 15.3584 1.42832 16.0204 1.60723 16.5879C1.78277 17.1448 2.046 17.6861 2.47198 18.0646L3.46826 16.9432C3.33416 16.8241 3.17732 16.5794 3.03782 16.1369C2.90169 15.7051 2.80344 15.1546 2.73598 14.5038C2.60078 13.1996 2.59996 11.615 2.59996 10.001H1.09996ZM2.47174 18.0644C3.19627 18.7087 4.10378 18.9875 5.21363 19.1202C6.31011 19.2513 7.71529 19.25 9.49902 19.25V17.75C7.67749 17.75 6.3783 17.7487 5.39168 17.6308C4.41845 17.5144 3.86413 17.2953 3.4685 16.9435L2.47174 18.0644ZM9.49902 19.25C11.2832 19.25 12.6884 19.2513 13.7847 19.1202C14.8945 18.9875 15.8018 18.7086 16.5263 18.0644L15.5295 16.9435C15.1339 17.2953 14.5797 17.5145 13.6067 17.6308C12.6202 17.7487 11.321 17.75 9.49902 17.75V19.25ZM16.5261 18.0646C16.952 17.6861 17.2153 17.1448 17.3908 16.5879C17.5697 16.0204 17.6815 15.3584 17.7541 14.6585C17.8989 13.2613 17.8981 11.592 17.8981 10.001H16.3981C16.3981 11.615 16.3973 13.1996 16.2621 14.5038C16.1946 15.1546 16.0964 15.7051 15.9602 16.1369C15.8207 16.5794 15.6639 16.8241 15.5298 16.9432L16.5261 18.0646ZM11.9753 12.5909L17.243 11.0101L16.8118 9.57336L11.5442 11.1542L11.9753 12.5909ZM17.2429 11.0101C17.5254 10.9253 17.8783 10.8343 18.1496 10.6165L17.2107 9.44674C17.2316 9.42994 17.2362 9.43515 17.1715 9.45952C17.098 9.48721 16.9967 9.51788 16.8119 9.57334L17.2429 11.0101ZM18.1504 10.6159C18.3629 10.4449 18.5281 10.2224 18.6304 9.96953L17.2398 9.40703C17.2334 9.42282 17.2231 9.43671 17.2098 9.44739L18.1504 10.6159ZM18.6288 9.97345C18.7617 9.65007 18.748 9.28483 18.748 8.98797H17.248C17.248 9.18078 17.2475 9.28659 17.242 9.3642C17.2371 9.43248 17.2309 9.42877 17.2414 9.40311L18.6288 9.97345ZM18.748 8.98797C18.748 8.2831 18.7486 7.70931 18.7104 7.24463C18.6715 6.77106 18.5886 6.34493 18.385 5.94752L17.05 6.63157C17.1269 6.7815 17.1842 6.98727 17.2154 7.36741C17.2474 7.75645 17.248 8.2582 17.248 8.98797H18.748ZM18.3851 5.94772C18.0695 5.33148 17.5682 4.8301 16.9519 4.51456L16.2683 5.84971C16.6044 6.02181 16.8778 6.29526 17.0499 6.63137L18.3851 5.94772ZM16.9521 4.51466C16.5547 4.31102 16.1286 4.22814 15.655 4.18924C15.1903 4.15108 14.6165 4.15167 13.9117 4.15167V5.65167C14.6414 5.65167 15.1432 5.65226 15.5322 5.68421C15.9124 5.71543 16.1181 5.77278 16.2681 5.8496L16.9521 4.51466ZM13.9117 4.15167H5.08636V5.65167H13.9117V4.15167ZM5.08636 4.15167C4.3815 4.15167 3.80771 4.15108 3.34303 4.18924C2.86945 4.22814 2.44332 4.31102 2.04591 4.51466L2.72997 5.8496C2.87989 5.77278 3.08566 5.71543 3.46581 5.68421C3.85485 5.65226 4.3566 5.65167 5.08636 5.65167V4.15167ZM2.04612 4.51456C1.42987 4.8301 0.928493 5.33148 0.612952 5.94772L1.9481 6.63137C2.1202 6.29527 2.39366 6.02181 2.72977 5.84971L2.04612 4.51456ZM0.613056 5.94752C0.409415 6.34493 0.326531 6.77106 0.287636 7.24463C0.249471 7.70931 0.250061 8.2831 0.250061 8.98797H1.75006C1.75006 8.2582 1.75065 7.75645 1.7826 7.36741C1.81382 6.98727 1.87117 6.7815 1.948 6.63157L0.613056 5.94752ZM0.250061 8.98797C0.250061 9.2866 0.236842 9.64722 0.366544 9.96881L1.75766 9.40775C1.76707 9.43108 1.76078 9.43297 1.75597 9.36455C1.75049 9.28664 1.75006 9.18065 1.75006 8.98797H0.250061ZM0.366834 9.96953C0.469114 10.2224 0.634334 10.4449 0.846803 10.6159L1.78734 9.44739C1.77408 9.43671 1.76376 9.42282 1.75737 9.40703L0.366834 9.96953ZM0.849486 10.618C1.12033 10.834 1.46978 10.9248 1.75534 11.0107L2.18764 9.57438C2.00207 9.51853 1.90034 9.48762 1.82658 9.45978C1.76189 9.43536 1.76527 9.42978 1.78466 9.44524L0.849486 10.618ZM1.75599 11.0109L7.0228 12.5909L7.4538 11.1541L2.18699 9.57418L1.75599 11.0109ZM11.1988 9.67599H7.79926V11.176H11.1988V9.67599ZM7.79926 9.67599C7.48765 9.67599 7.1888 9.79978 6.96845 10.0201L8.02911 11.0808C7.96815 11.1417 7.88547 11.176 7.79926 11.176V9.67599ZM6.96845 10.0201C6.7481 10.2405 6.62432 10.5393 6.62432 10.8509H8.12432C8.12432 10.9371 8.09007 11.0198 8.02911 11.0808L6.96845 10.0201ZM6.62432 10.8509V12.6884H8.12432V10.8509H6.62432ZM6.62432 12.6886C6.62437 12.9232 6.69468 13.1525 6.82619 13.3468L8.06847 12.5061C8.10485 12.5599 8.1243 12.6233 8.12432 12.6882L6.62432 12.6886ZM6.82619 13.3468C6.9577 13.5411 7.14438 13.6916 7.36218 13.7789L7.92018 12.3866C7.98044 12.4107 8.03209 12.4524 8.06847 12.5061L6.82619 13.3468ZM7.36264 13.7791L7.95757 14.0171L8.51465 12.6244L7.91973 12.3864L7.36264 13.7791ZM7.95749 14.0171C8.94706 14.413 10.0511 14.413 11.0406 14.0171L10.4834 12.6244C9.85152 12.8772 9.1466 12.8772 8.51474 12.6244L7.95749 14.0171ZM11.0405 14.0171L11.6355 13.7791L11.0784 12.3864L10.4835 12.6244L11.0405 14.0171ZM11.6359 13.7789C11.8537 13.6916 12.0404 13.5411 12.1719 13.3468L10.9296 12.5061C10.966 12.4524 11.0177 12.4107 11.0779 12.3866L11.6359 13.7789ZM12.1719 13.3468C12.3034 13.1525 12.3737 12.9232 12.3738 12.6886L10.8738 12.6882C10.8738 12.6233 10.8933 12.5599 10.9296 12.5061L12.1719 13.3468ZM12.3738 12.6884V10.8509H10.8738V12.6884H12.3738ZM12.3738 10.8509C12.3738 10.5393 12.25 10.2405 12.0297 10.0201L10.969 11.0808C10.908 11.0198 10.8738 10.9371 10.8738 10.8509H12.3738ZM12.0297 10.0201C11.8093 9.79978 11.5105 9.67599 11.1988 9.67599V11.176C11.1126 11.176 11.03 11.1417 10.969 11.0808L12.0297 10.0201ZM7.80112 3.45143C7.92507 3.10012 8.15495 2.79591 8.45905 2.58073L7.59264 1.35626C7.03519 1.7507 6.61381 2.30834 6.38659 2.95232L7.80112 3.45143ZM8.45905 2.58073C8.76316 2.36555 9.12652 2.25 9.49906 2.25V0.75C8.81617 0.75 8.15009 0.961819 7.59264 1.35626L8.45905 2.58073ZM9.49906 2.25C9.87159 2.25 10.235 2.36555 10.5391 2.58073L11.4055 1.35626C10.848 0.961819 10.1819 0.75 9.49906 0.75V2.25ZM10.5391 2.58073C10.8432 2.79591 11.073 3.10012 11.197 3.45143L12.6115 2.95232C12.3843 2.30834 11.9629 1.7507 11.4055 1.35626L10.5391 2.58073Z" />
                  </svg>

                  <p>REGISTER YOUR JOB</p>
                </a>
              </div>
              <div className="cv_register">
                <a href="">
                  <svg
                    width="19px"
                    height="19px"
                    viewBox="0 0 0.356 0.356"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.249 0.083a0.071 0.071 0 0 1 -0.071 0.071 0.071 0.071 0 1 1 0.071 -0.071Z"
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeWidth="0.02375"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.297 0.344h-0.237v-0.047a0.071 0.071 0 0 1 0.071 -0.071h0.095a0.071 0.071 0 0 1 0.071 0.071z"
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeWidth="0.02375"
                    />
                  </svg>

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
        {/* </div> */}

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
                    <button className="White_arrow_button">
                      <p className="white_button_para">GET STARTED </p>
                      <div className="button_img_container">
                        <img
                          className="button_img button_img_1"
                          src={Arrow_right}
                        />
                        <img
                          className="button_img button_img_2"
                          src={Arrow_right}
                        />
                      </div>
                    </button>
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
