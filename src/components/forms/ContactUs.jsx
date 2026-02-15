import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";

import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";
import { Link, useNavigate  } from "react-router-dom";

import SEO from "../SEO";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    data: "",
    formType: "contact",
  });

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
const [showThankYou, setShowThankYou] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // original submit
  // const submit = async (e) => {
  //   e.preventDefault();

    
  //   if (!formData.name || !formData.email || !formData.phone) {
  //     alert("Please fill all required fields");
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     const response = await axios.post(
  //       `${baseUrl}/api/form/${formData.formType}`,
  //       {
  //         name: formData.name,
  //         email: formData.email,
  //         phone: formData.phone,
  //         data: formData.data,
  //       }
  //     );

  //     console.log("Response:", response.data);

  //     alert("Message sent successfully!");

      
  //     setFormData({
  //       name: "",
  //       phone: "",
  //       email: "",
  //       data: "",
  //       formType: "contact",
  //     });
  //   } catch (error) {
  //     console.error("Error:", error);

  //     alert("Something went wrong. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // bharti
  const submit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.phone) {
    alert("Please fill all required fields");
    return;
  }

  try {
    setLoading(true);

    await axios.post(`${baseUrl}/api/form/${formData.formType}`, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      data: formData.data,
    });

    // Show thank you screen
    setShowThankYou(true);

    // Reset form (optional)
    setFormData({
      name: "",
      phone: "",
      email: "",
      data: "",
      formType: "contact",
    });

    // Redirect after 0.5 sec
    setTimeout(() => {
      navigate("/");
    }, 1500);
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <>

    {showThankYou && (
  <div className="thankyou-overlay">
    <p>Thank you! We’ll get back to you 😊</p>
  </div>
)}

    <SEO
  title="Contact Us"
  description="Get in touch with Lowercase Events for bookings and support."
  url="/contact"
/>

      <Navbartoplogo />
      <div className="contactWrapper">
        {/* Left Content */}
        <div className="contactLeft">
          <h1>
            Need help
            <br />
            with an event?
          </h1>

          <p>
            Fill out the form below and our <br />
            team will respond soon.
          </p>

          <Link to="/support">
            <span className="faqLink">See FAQ's</span>
          </Link>
        </div>

        <div className="contactRight">
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
              placeholder="Tell us your birthday plan (date, guests, vibe...)"
              value={formData.data}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default ContactUs;