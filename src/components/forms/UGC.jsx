import React, { useState } from "react";
import "./UGC.css";
import axios from "axios";

import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";

const UGC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    data: "",
    formType: "ugc-influencer",
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

      alert("UGC enquiry sent 🎥");

      // Reset
      setFormData({
        name: "",
        phone: "",
        email: "",
        data: "",
        formType: "ugc-influencer",
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

      <div className="ugcWrapper">
        <div className="ugcContainer">
          {/* LEFT CONTENT */}
          <div className="ugcLeft">
            <h1>
              Creator <br /> Partnerships.
            </h1>

            <p className="highlight">
              From content to bookings, we help creators build their presence
              with Lowercase Events.
            </p>

            <p>
              Create with us. We will help with the planning, promotion, and
              execution.
            </p>
          </div>

          {/* RIGHT FORM */}
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
              placeholder="Tell us your birthday plan (date, guests, vibe...)"
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

export default UGC;