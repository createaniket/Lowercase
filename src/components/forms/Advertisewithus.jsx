import React, { useState } from "react";
import "./Advertisewithus.css";
import axios from "axios";

import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";

const Advertisewithus = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    data: "",
    formType: "brand-partner",
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

      await axios.post(
        `${baseUrl}/api/form/${formData.formType}`,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          data: formData.data,
        }
      );

      alert("Brand enquiry sent 🚀");

      setFormData({
        name: "",
        phone: "",
        email: "",
        data: "",
        formType: "brand-partner",
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

      <div className="brandWrapper">
        <div className="brandContainer">

          {/* Left Content */}
          <div className="brandLeft">

            <p className="smallTitle green">
              Advertise with Lowercase Events
            </p>

            <h1>
              Reach Students <br />
              Where Culture <br />
              Happens
            </h1>

            <p className="desc">
             <strong> Lowercase Events  </strong> connects brands with one of the most engaged
              audiences in the UK: students and young adults aged 18–25.
            </p>

            <p className="desc">
              Through sold-out nightlife events, Freshers Week campaigns,
              and city-wide student communities, we offer brands a direct
              route into real student culture — not just online impressions.
            </p>

            <div className="services">

              <p>Event Sponsorship</p>
              <p>Brand Activations</p>
              <p>Social Media Campaigns</p>
              <p>Email & Ticketing Promotion</p>
              <p>On-Site Visibility</p>
              <p>VIP & Experience Partnerships</p>

   

            </div>
          </div>

          {/* Right Section */}
          <div className="brandRight">

          <p className="Advrtswthus_form_hdn">Complete the form below</p>

            {/* Form */}
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
                placeholder="Tell us about your campaign goals"
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
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default Advertisewithus;