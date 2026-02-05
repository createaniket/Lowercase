import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";

import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";
const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    data: "",
    formType: "careers",
  });

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const submit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${baseUrl}/api/form/${formData.formType}`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          data: formData.data,
        }
      );

      console.log("Response:", response.data);

      alert("Application submitted successfully!");

      // Reset Form
      setFormData({
        name: "",
        phone: "",
        email: "",
        data: "",
        formType: "careers",
      });
    } catch (error) {
      console.error("Error:", error);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbartoplogo />

      <div className="bwformpage">
        <form className="bwForm" onSubmit={submit}>
          <h2>Careers</h2>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Message */}
          <textarea
            name="data"
            placeholder="Why should we hire you?"
            value={formData.data}
            onChange={handleChange}
          />

          {/* Button */}
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Apply"}
          </button>
        </form>
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default Careers;
