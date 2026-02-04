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

import ShinyText from "../motionelements/Shinytextcomp";

// import TrueFocus from "../motionelements/Truefocus";

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [showtextone, setShowtextone] = useState(false);

  const [showtexttwo, setShowtexttwo] = useState(false);

  setTimeout(() => {
    setShowtextone(true);
  }, 1500);

  setTimeout(() => {
    setShowtexttwo(true);
  }, 3500);

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
              <ShinyText
                text="Music"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />

              <ShinyText
                text="Space"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />

              <ShinyText
                text="People"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </p>

            {showtextone && (
              <p className="vdohome_contenttwo">
                {/* <TrueFocus 
sentence="True Focus"
manualMode={false}
blurAmount={5}
borderColor="#fff700"
animationDuration={0.5}
pauseBetweenAnimations={1}
/>
               */}

                {/* <Typewriter
                  words={["Together."]}
                  loop={50}
                  cursor
                  cursorStyle=""
                  typeSpeed={80}
                  deleteSpeed={5000}
                  delaySpeed={900000}
                /> */}
              </p>
            )}

            {showtexttwo && (
              <div className="vdoheadhomepage">
                <Typewriter
                  words={["Trusted by leading venues, artists, and partners."]}
                  loop={50}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            )}
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

      {/* <Shinytextcomp /> */}
    </div>
  );
};

export default Homepage;