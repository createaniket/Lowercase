import React, { useState } from "react";
import "./Venues.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";

const Venues = () => {
  const [data, setData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
    formType: "Venues",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/forms/submit", data);
      alert("Venue enquiry sent 🏢");
      setData({
        fullName: "",
        mobile: "",
        email: "",
        message: "",
        formType: "Venues",
      });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="venuesWrapper">
        <form className="bwForm" onSubmit={submit}>
          <h2>Partner Your Venue With Us</h2>
          <p className="subtitle">
            Let’s collaborate on events, promotions, and unforgettable nights.
          </p>

          <input
            type="text"
            placeholder="Full Name"
            value={data.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
            required
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            value={data.mobile}
            onChange={(e) => setData({ ...data, mobile: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />

          <textarea
            placeholder="Tell us about your venue (location, capacity, availability)"
            rows="4"
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            required
          />

          <button type="submit">Get In Touch</button>
        </form>
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default Venues;
