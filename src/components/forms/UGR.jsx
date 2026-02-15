import React, { useState } from "react";
import "./UGR.css";
import axios from "axios";

import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";
import SEO from "../SEO";

const UGR = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    data: "",
    formType: "university-partner",
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

  // Handle Submit
  const submit = async (e) => {
    e.preventDefault();

    // Validation
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

      alert("University partnership enquiry sent 🎓");

      // Reset
      setFormData({
        name: "",
        phone: "",
        email: "",
        data: "",
        formType: "university-partner",
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

<SEO
  title="University Partners"
  description="Official university partnership programs."
  url="/university-partners"
/>

      <Navbartoplogo />

      <div className="ugrWrapper">
        <form className="bwForm" onSubmit={submit}>
          <h2>University Partnerships</h2>

          <p className="subtitle">
            Work with Lowercase Events to create unforgettable student
            experiences.
          </p>

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
            type="number"
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
            placeholder="Tell us about your university, society, or partnership idea"
            rows="4"
            value={formData.data}
            onChange={handleChange}
            required
          />

          {/* Button */}
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Partner With Us"}
          </button>
        </form>
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default UGR;