import React, { useState } from "react";
import "./Birthdays.css";
import axios from "axios";

import Prefooter from "./Prefooter";
import Footer from "./Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";

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


    <Navbartoplogo />

    <div className="birthdayWrapper">
      <form className="bwForm" onSubmit={submit}>
        <h2>Celebrate Your Birthday With Us</h2>
        <p className="subtitle">
          Big night, VIP tables, special treats — tell us your plan 🎂
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
          placeholder="Tell us your birthday plan (date, guests, vibe...)"
          rows="4"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          required
        />

        <button type="submit">Enquire Now</button>
      </form>
    </div>

<Prefooter />
<Footer />
    </>
  );
};

export default Birthdays;
