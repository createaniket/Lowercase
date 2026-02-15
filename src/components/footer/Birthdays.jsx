import React, { useState } from "react";
import "./Birthdays.css";
import axios from "axios";

import Prefooter from "./Prefooter";
import Footer from "./Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";
import SEO from "../SEO";

const Birthdays = () => {
  const [data, setData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
    formType: "Birthdays",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/forms/submit", data);
      alert("Birthday enquiry sent 🎉");
      setData({
        fullName: "",
        mobile: "",
        email: "",
        message: "",
        formType: "Birthdays",
      });
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <>

<SEO
  title="Birthday Parties"
  description="Celebrate birthdays with exclusive party experiences."
  url="/birthdays"
/>

      <Navbartoplogo />

      <div className="birthdayWrapper">
        <div className="birthdayContainer">
          {/* LEFT CONTENT */}
          <div className="birthdayLeft">
            <h1>Birthday Bookings <br /> Made Simple.</h1>


            <p>Tell us a few details and we’ll get back to you shortly.</p>
          </div>


          <div className="birthdayRight">

    

          {/* RIGHT FORM */}
          <form className="bwForm" onSubmit={submit}>
            <input
              type="text"
              placeholder="Full Name"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
              required
            />

            <input
              type="number"
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
              placeholder="Tell us your birthday plan (date, guests, vibe...)"
              rows="4"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              required
            />

            <button type="submit">Submit</button>
          </form>
          </div>
        </div>
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default Birthdays;