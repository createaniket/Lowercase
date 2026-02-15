import React, { useState } from "react";

import "./GroupBookings.css";
import axios from "axios";

import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";

import SEO from "../SEO";

const GroupBookings = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    data: "",
    formType: "group-booking",
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

      alert("Group booking request sent!");

      // Reset
      setFormData({
        name: "",
        phone: "",
        email: "",
        data: "",
        formType: "group-booking",
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

      <SEO
  title="Group Bookings"
  description="Book group tickets for parties and club nights."
  url="/group-bookings"
/>


      <div className="groupbookings_page">
        <h2 className="group_heading">Group bookings and Special Requests</h2>

        <div className="groupbookings_content_cont">
          <div className="groupbookings_content_cont_left">
            <p className="groupbookings_content_cont_left_head">
              Tell us what you need, and we'll get back to you shortly
            </p>

            <p className="groupbookings_content_cont_left_para">
              *Group bookings are for parties of 10 or more.
            </p>
          </div>

          <div className="groupbookings_content_cont_right">
            <form className="bwForm" onSubmit={submit}>
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
                placeholder="Booking Details"
                value={formData.data}
                onChange={handleChange}
              />

              {/* Button */}
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default GroupBookings;