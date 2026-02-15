import React, { useState } from "react";
import "./UniversityPartners.css";
import axios from "axios";

import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";

const UniversityPartners = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    data: "",
    formType: "university-partner",
  });

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [loading, setLoading] = useState(false);

  // Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const submit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${baseUrl}/api/form/${formData.formType}`, {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        data: formData.data,
      });

      console.log("Response:", res.data);

      alert("University enquiry sent 🎓");

      // Reset
      setFormData({
        name: "",
        phone: "",
        email: "",
        data: "",
        formType: "university-partner",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbartoplogo />

      <div className="universityWrapper">
        <div className="universityContainer">
          {/* Left Content */}
          <div className="universityLeft">
            <p className="smallTitle">Why Universities partner with</p>

            <h1>Lowercase</h1>

            <p className="desc">
              Universities and student organisations work with us because we
              provide:
            </p>

            <p className="unvrsty_left_btm_txt">
              Trusted Student Experiences Professional Delivery Strong Student
              Reach Safe & Compliant Event Standards
            </p>
          </div>

          {/* Right Form */}
          <form className="bwForm" onSubmit={submit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="data"
              placeholder="Tell us about your university partnership plans"
              rows="4"
              value={formData.data}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default UniversityPartners;