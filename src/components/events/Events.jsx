import React from "react";
import "./Events.css";

import Footer from "../footer/Footer";
import Prefooter from "../footer/Prefooter";
import Navbartoplogo from "../navbar/Navbartoplogo";
import SEO from "../SEO";
import FatsomaIframe from "../LowercaseTicket/FatsomaIframe";

const Events = () => {
  return (
    <div>
      <SEO
        title="Upcoming Events"
        description="Browse upcoming club nights, parties and ticketed events."
        url="/events"
      />

      <div className="event-container">
        <Navbartoplogo />

        <div className="event-heading">EVENTS</div>

        {/* <div className="belownavbar">
          <video
            className="background-video"
            src="https://res.cloudinary.com/doph28x3i/video/upload/v1729323634/Lowercase%20Events/jwm2qahfxoikoudl7kkc.mp4"
            autoPlay
            loop
            muted
          />
        </div> */}

        {/* Widget Container */}
        {/* <div className="events_page_widget_container">
          <div className="fatsoma_tkt_wgt_main"></div>
        </div> */}
       <div className="margin">

      
        <FatsomaIframe />
         </div>

        <Prefooter />
        <Footer />
      </div>
    </div>
  );
};

export default Events;