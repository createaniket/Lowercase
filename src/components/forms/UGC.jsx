import React, { useState } from "react";
import "./UGC.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";

const UGC = () => {
  const [data, setData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
    formType: "UGC / Influencers",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/forms/submit", data);
      alert("UGC enquiry sent 🎥");
      setData({
        fullName: "",
        mobile: "",
        email: "",
        message: "",
        formType: "UGC / Influencers",
      });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (

    <>

    <Navbar />
    <div className="ugcWrapper">
      <form className="bwForm" onSubmit={submit}>
        <h2>Creators & Influencers</h2>
        <p className="subtitle">
          Collaborate with Lowercase Events — gigs, promos & content partnerships.
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
          placeholder="Tell us about your content, platforms & audience"
          rows="4"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          required
        />

        <button type="submit">Collaborate With Us</button>
      </form>
    </div>
    
    <Prefooter />
    <Footer />
    </>

  );
};

export default UGC;
