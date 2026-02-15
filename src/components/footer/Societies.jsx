import React, { useState } from "react";
import "./Societies.css";
import axios from "axios";

import Prefooter from "./Prefooter";
import Footer from "./Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";

import SEO from "../SEO";

const Societies = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    data: "",
    formType: "societies",
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
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `${baseUrl}/api/form/${formData.formType}`,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          data: formData.data,
        }
      );

      alert("Societies enquiry sent 🎓");

      setFormData({
        name: "",
        phone: "",
        email: "",
        data: "",
        formType: "societies",
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

<SEO
  title="Student Societies"
  description="Partner with us for college society events."
  url="/socities"
/>

      <Navbartoplogo />

      <div className="soc_wrapper">
        <div className="soc_container">

          {/* Left */}
          <div className="soc_left">

            <h1 className="soc_title">Societies</h1>

            <p className="soc_highlight">
              Tell us what you're planning, and we'll help bring it to life.
            </p>

          </div>

          {/* Right */}
          <form className="soc_form" onSubmit={submit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="soc_input"
            />

            <input
              type="number"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="soc_input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="soc_input"
            />

            <textarea
              name="data"
              placeholder="Tell us about your event (date, guests, vibe...)"
              rows="4"
              value={formData.data}
              onChange={handleChange}
              required
              className="soc_textarea"
            />

            <button
              type="submit"
              disabled={loading}
              className="soc_button"
            >
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

export default Societies;