import React, { useState } from "react";
import "./UGR.css";
import axios from "axios";
import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const UGR = () => {
  const [data, setData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
    formType: "University Partners (UGR)",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/forms/submit", data);
      alert("University partnership enquiry sent 🎓");
      setData({
        fullName: "",
        mobile: "",
        email: "",
        message: "",
        formType: "University Partners (UGR)",
      });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="ugrWrapper">
        <form className="bwForm" onSubmit={submit}>
          <h2>University Partnerships</h2>
          <p className="subtitle">
            Work with Lowercase Events to create unforgettable student
            experiences.
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
            placeholder="Tell us about your university, society, or partnership idea"
            rows="4"
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            required
          />

          <button type="submit">Partner With Us</button>
        </form>
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default UGR;
