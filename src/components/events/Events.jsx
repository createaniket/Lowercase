import React, { useEffect, useRef } from "react";
import "./Events.css";

import Footer from "../footer/Footer";

import Prefooter from "../footer/Prefooter";
import Navbartoplogo from "../navbar/Navbartoplogo";

const Events = () => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    // Copy the ref's current value to a local variable
    const container = widgetContainerRef.current;

    if (container) {
      const script = document.createElement("script");
      script.src = "https://widgets.fatsoma.com/widgets/scripts/events.js";
      script.async = true;
      script.dataset.reference = "b604fd9d-8c9d-456c-8e09-ebccb95cb010";

      container.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = ""; // Clear content
      }
    };
  }, []);

  return (
    <div>
      <div className="event-container">
        <Navbartoplogo />

        <div className="event-heading">EVENTS</div>
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
        </div>

        <div className="events_page_widget_container">
          <div className="fatsoma_tkt_wgt_main" ref={widgetContainerRef}></div>
        </div>
        {/* <iframe src="https://widgets.fatsoma.com/widgets/scripts/events.js'" frameborder="0" title="events-widget"></iframe> */}

        <Prefooter />
        <Footer />
      </div>
    </div>
  );
};

export default Events;
