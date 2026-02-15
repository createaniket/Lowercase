import React, { useState } from "react";
import "./Venues.css";
import axios from "axios";

import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";
import SEO from "../SEO";

const Venues = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    data: "",
    formType: "venue-partner",
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

      alert("Venue enquiry sent 🏢");

      // Reset
      setFormData({
        name: "",
        phone: "",
        email: "",
        data: "",
        formType: "venue-partner",
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
  title="Venue Partnerships"
  description="List your venue and collaborate with Lowercase Events."
  url="/venues"
/>

      <Navbartoplogo />

      <div className="venuesWrapper">
        <div className="venuesContainer">
          {/* Left Content */}
          <div className="venuesLeft">
            <h1>
              Venue <br /> Partnerships.
            </h1>

            <p>
              Tell us about your space. <br />
              We'll take it from there.
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
              placeholder="Tell us about your venue (location, capacity, availability)"
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

export default Venues;