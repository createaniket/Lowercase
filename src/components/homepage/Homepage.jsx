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

import SEO from "../SEO";

const Homepage = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [showtexttwo, setShowtexttwo] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {

    setTimeout(() => {
      setIsVisible(true);
    }, 400);

  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowtexttwo(true);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <div className="homepage-container">

      <SEO
        title="Official Site"
        description="Buy official tickets for club nights, freshers parties and student events."
        url="/"
      />

      <Navbar />

      {/* HERO SECTION */}
      <section className="belownavbar">

        {/* VIDEO */}
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/doph28x3i/video/upload/v1729323634/Lowercase%20Events/jwm2qahfxoikoudl7kkc.mp4"
            type="video/mp4"
          />
        </video>

        {/* CONTENT */}
        <div
          ref={sectionRef}
          className={`vdo_home_content_main ${isVisible ? "visible" : ""}`}
        >

          {/* LOGO */}
          <div className="vdo_home_content_logo">

            <img
              src={LowerCaseLogo}
              alt="Lowercase Events Logo"
              className="rotating-logo"
            />

          </div>

          {/* TEXT */}
          <div className="vdo_home_content_text">

            <div className="vdohome_contentone">

              <ShinyText text="Music" speed={2} color="#b5b5b5" shineColor="#fff" />

              <ShinyText text="Space" speed={2} color="#b5b5b5" shineColor="#fff" />

              <ShinyText text="People" speed={2} color="#b5b5b5" shineColor="#fff" />

            </div>

            {showtexttwo && (

              <div className="vdoheadhomepage">

                <Typewriter
                  words={["Trusted by leading venues, artists, and partners."]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                />

              </div>

            )}

          </div>

        </div>

      </section>

      {/* OTHER SECTIONS */}
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
