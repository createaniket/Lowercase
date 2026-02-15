import React from "react";

import "./Footer.css";
// import fatsomabglogo from '../assests/fatsomabglogo.png'

import LowercaseEventsLogo from "../assests/LowercaseLogoRect.png";
import { Link } from "react-router-dom";
const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer_main_parent">
      <div className="lisenced">
        <div className="lisenced-logo">
          <Link to="/">
            <img src={LowercaseEventsLogo} alt="" />
          </Link>
          <p className="footer__beow_ogo_txt">
            CONTACT<span>@</span>LOWERCASEEVENTS.CO.UK <strong>|</strong>{" "}
          </p>
        </div>
       

        <div className="footer">
          <div className="footer-box1">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/events">Events</Link>
              </li>

              <li>
                <Link to="/albums">Photos</Link>
              </li>

              <li>
                <Link to="/artists">Artists</Link>
              </li>

              {/* <li>
                <Link to="/collab">Brands</Link>
              </li> */}

            </ul>
          </div>

          <div className="footer-box4">
            <ul>

            <li>
                <Link to="/support">FAQ's</Link>
              </li>
        
           
              <li>
                <Link to="/group-bookings">Group Bookings</Link>
              </li>
              <li>
                <Link to="/birthdays">Birthdays</Link>
              </li>{" "}
              <li>
                <Link to="/socities">Societies</Link>
              </li>{" "}

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>


    
            </ul>
          </div>

          <div className="footer-box4">
            <ul>
              <li>
                <Link to="/venues">Venues</Link>
              </li>
              <li>
                <Link to="/university-partners">University Partners</Link>
              </li>{" "}

              <li>
                <Link to="/advertise-with-us">Advertise with us</Link>
              </li>

                   <li>
                <Link to="/creators">Creators</Link>
              </li> 

              {/* <li>
                <Link to="/">Our Network</Link>
              </li>
              <li>
                <Link to="/ugr">UGR</Link>
              </li>
          */}
          
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>

          {/* <div className="footer-box2"></div> */}

          <div className="footer-box1">
            <div className="social-icons">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/lowercaseevents"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Instagam{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.tiktok.com/@lowercaseevents"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    TikTok{" "}
                  </a>
                </li>

                {/* <li>
                  <a
                    href="https://wa.me/447568564663"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Whatsapp{" "}
                  </a>
                </li> */}

                <li>
                  <a
                    href="https://www.facebook.com/lowercaselondon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Facebook{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@lowercase.events"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Youtube{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://vimeo.com/yourfreshersguide"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Vimeo{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_footer">
        <div className="lisenced-note">
          <span> ©</span> {currentYear} LOWERCASE EVENTS. ALL RIGHTS RESERVED. <br /> WEB
          DEVELOPMENT <a href="/">LOWERCASE AGENCY</a>
        </div>

        <ul>
          <li>
            <Link to={"/privacy-policy"} className="li">Privacy Policy</Link>

            <Link to={"/terms-and-conditions"} className="li">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;