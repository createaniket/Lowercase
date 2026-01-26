import React, { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import LowerCaseLogo from "../assests/Lowercase-Events-Logo-Web.png";
import Brandslogocarousel from "../brandscarousel/Brandslogocarousel";
import Artists from "./Artistshome";

import Prefooter from "../footer/Prefooter";

import HomeNewGallery from "./HomeNewGallery";

import InstagramEmbed from "../Insta/Insta";
import Modernphotos from "../photos/Modernphotos";
import Lowercaseticketwidget from "../LowercaseTicket/Lowercaseticketwidget";
import BrandCreator from "./BrandCreator";
import { Typewriter } from "react-simple-typewriter";



const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);
  return (
    <div className="homepage-container">
      <Navbar />

      <div className="belownavbar">
        <video
          className="background-video"
          src={
            "https://res.cloudinary.com/doph28x3i/video/upload/v1729323634/Lowercase%20Events/jwm2qahfxoikoudl7kkc.mp4"
          }
          autoPlay
          loop
          muted
        ></video>

        <div
          className={`vdo_home_content_main ${isVisible ? "visible" : ""}`}
          ref={sectionRef}
        >
          <div className="vdo_home_content_logo">
            <img
              src={LowerCaseLogo}
              alt="Lowercase Logo"
              className="rotating-logo"
            />
          </div>

          <div className="vdo_home_content_text">
            <p className="vdohome_contentone">
              Lowercase Events exists for the nights you remember and the ones
              you don’t. <br /> We blend the right music, the right crowd, and the
              right atmosphere to create experiences that feel authentic,
              culturally relevant, and intentional.
            </p>

            <div className="vdoheadhomepage">
      <Typewriter
                                words={[ 'Trusted by leading venues, artists, and partners.']}
                                loop={50}
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                     
                    
                              />

            </div>
          </div>
        </div>
      </div>

      <Brandslogocarousel />
      <Lowercaseticketwidget />

      <Modernphotos />

      <HomeNewGallery />

      <BrandCreator />

      <Artists />

      <InstagramEmbed />

      <Prefooter />

      <Footer />
    </div>
  );
};

export default Homepage;
