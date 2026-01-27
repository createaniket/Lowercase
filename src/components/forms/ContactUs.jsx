import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";

const ContactUs = () => {
  const [data, setData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
    formType: "Contact Us",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("/api/forms/submit", data);
    alert("Submitted");
  };

  return (
    <form className="bwForm" onSubmit={submitForm}>
      <h2>Contact Us</h2>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
      <input name="email" placeholder="Email Address" onChange={handleChange} />
      <textarea name="message" placeholder="Your Message" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default ContactUs;
