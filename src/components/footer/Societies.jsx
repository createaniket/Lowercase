import React, { useState } from "react";
import "./Societies.css";
import axios from "axios";
import Prefooter from "./Prefooter";
import Footer from "./Footer";
import Navbar from "../navbar/Navbar";

const Societies = () => {
  const [data, setData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
    formType: "Societies",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/forms/submit", data);
      alert("Societies enquiry sent 🎓");
      setData({
        fullName: "",
        mobile: "",
        email: "",
        message: "",
        formType: "Societies",
      });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (

    <>
    <Navbar />


    <div className="societiesWrapper">
      <form className="bwForm" onSubmit={submit}>
        <h2>Societies & Student Events</h2>
        <p className="subtitle">
          Partner with us for unforgettable student nights and society events.
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
          placeholder="Tell us about your society or event idea"
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

export default Societies;
