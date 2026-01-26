import React, { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import LowerCaseLogo from "../assests/LowercaseLogoRect.png";
import Brandslogocarousel from "../brandscarousel/Brandslogocarousel";
import Artists from "./Artistshome";
// import EventAlbums from "../photos/EventAlbums";
import Prefooter from "../footer/Prefooter";

import HomeNewGallery from "./HomeNewGallery";

// import FatosmaImg from "../assests/fatsoma_home.jpg";
// import Contact from "./Contact";
import InstagramEmbed from "../Insta/Insta";
import Modernphotos from "../photos/Modernphotos";
import Lowercaseticketwidget from "../LowercaseTicket/Lowercaseticketwidget";
import BrandCreator from "./BrandCreator";
// import PhotoWall from "./PhotoWall";
// import PhotoWallSkeleton from "./PhotoWallSkeleton";
// import { lazy , Suspense } from "react";

// import Supportinghome from "./Supportinghome";
// import Instagidphotos from "../photos/Instagidphotos";

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);





  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const scrollPosition = window.scrollY; // Current scroll position
  //     const viewportHeight = window.innerHeight; // Total viewport height
  //     const triggerHeight = viewportHeight * 0.22; // 22% of the viewport height

  //     if (scrollPosition > triggerHeight) {
  //       setIsVisible(true);
  //     }

  //     if (scrollY > triggerHeight) {
  //       setIsVisible(true);
  //     }

  //     if( scrollY < triggerHeight){
  //       setIsVisible(false);
  //     }

  //     if( scrollPosition > triggerHeight && time after 2 seconds){
  //       setIsVisible(false);
  //     }
  //   };



  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  const timeoutRef = useRef(null);



  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = window.innerHeight * 0.01;  
      // instead of scroll make 2sec wait efore showing and 5 sec see then hide.

      // ✅ If user scrolls past trigger → show
      if (scrollY > triggerHeight) {
        setIsVisible(true);

        // ✅ Reset previous timer
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // ✅ After 2 seconds → hide automatically
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      }

      // ✅ If user goes back above trigger → hide instantly
      if (scrollY <= triggerHeight) {
        setIsVisible(false);

        // ✅ also clear timer
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
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
            <p className="vdoheadhomepage">
              Transforming The scene, one Event <br /> at a Time since 2010 _
            </p>
            <p className="vdohome_contentone">
              Lowercase Events exists for the nights you remember and the ones
              you don’t. We blend the right music, the right crowd, and the
              right atmosphere to create experiences that feel authentic,
              high-energy, and unmistakably now.
            </p>

            <p className="vdohome_contenttwo">
              This isn’t background noise - this is student culture in motion.
            </p>
          </div>
        </div>
      </div>

      <Brandslogocarousel />
      <Lowercaseticketwidget />

      <Modernphotos />

      {/* <Instagidphotos /> */}

      {/* <EventAlbums /> */}

      {/* <PhotoWall/> */}

      <HomeNewGallery />

      <BrandCreator />

      <Artists />

      {/* <Supportinghome /> */}

      {/* <div className="home_fatsoma">
        <img src={FatosmaImg} alt="" />
      </div> */}

      <InstagramEmbed />

      {/* <Contact /> */}

      <Prefooter />

      <Footer />
    </div>
  );
};

export default Homepage;
