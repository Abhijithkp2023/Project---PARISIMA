import React from "react";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/Instagram.svg";
import youtube from "../assets/Youtube.svg";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="wrapper">
        <div className="footer_items_container">

          <div className="foooter_top_container">

            <div className="footer_left">
              <img src={logo} alt="" />
            </div>

            <div className="footer_right">
              <div className="footer_links_container">
                <h3 className="links_heading">QUICK LINKS</h3>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Our Services</li>
                  <li>Our Expertise</li>
                </ul>
              </div>
              <div className="footer_links_container">
                <h3 className="links_heading">MORE LINKS</h3>
                <ul>
                  <li>Contact Us</li>
                  <li>Careers</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="social_media_container">
                <h3 className="links_heading">CONNECT WITH US</h3>
                <div className="social_media">
                  <img src={linkedin} alt="" />
                  <img src={instagram} alt="" />
                  <img src={youtube} alt="" />
                </div>
              </div>
            </div>
            
          </div>

          <div className="foooter_bottom_container">
            <p>© 2024 . Parisima . All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
