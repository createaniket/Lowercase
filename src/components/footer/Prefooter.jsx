import React, { useState } from "react";
import "./Prefooter.css";
import axios from "axios";

import FatosmaImg from "../assests/prefooter/fatsoma.jpg";
import Yfg from "../assests/prefooter/yfg.jpg";

const cities = [
  "London",
  "Aberdeen",
  "Aberystwyth",
  "Bangor",
  "Bath",
  "Belfast",
  "Birmingham",
  "Brighton",
  "Bristol",
  "Cambridge",
  "Canterbury",
  "Cardiff",
  "Cheltenham",
  "Chester",
  "Coventry",
  "Derby",
  "Dublin",
  "Edinburgh",
  "Exeter",
  "Glasgow",
  "Huddersfield",
  "Hull",
  "Ipswich",
  "Lancaster",
  "Leeds",
  "Leicester",
  "Lincoln",
  "Liverpool",
  "Loughborough",
  "Manchester",
  "Middlesbrough",
  "Newcastle",
  "Nottingham",
  "Oxford",
  "Plymouth",
  "Preston",
  "Reading",
  "Salford",
  "Sheffield",
  "Stoke-on-Trent",
  "Sunderland",
  "Winchester",
  "Wolverhampton",
  "York",
];

const Prefooter = () => {

  const [formData, setFormData] = useState({
    phone: "",
    city: "",
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

    if (!formData.phone || !formData.city) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${baseUrl}/api/form/sms-signup`, {
        name: "Prefooter User",
        email: "noemail@lowercase.com",
        phone: formData.phone,
        data: `City: ${formData.city}`,
      });

      alert("Subscribed successfully ✅");

      // Reset
      setFormData({
        phone: "",
        city: "",
      });

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="prefooter">
      <div className="prefooter_main">

        {/* LEFT */}
        <div className="prefooter_main_left">
          <img src={FatosmaImg} alt="Partner 1" />
          <img src={Yfg} alt="Partner 2" />
        </div>

        {/* RIGHT */}
        <div className="prefooter_main_right">

          <h2 className="prefooter_heading">
            Join the announcement here
          </h2>

          <p className="prefooter_subheading">
            From zero to lit in one click – <strong>Lowercase Events</strong> got you!
          </p>

          {/* FORM */}
          <form className="prefooter_form" onSubmit={submit}>

            <div className="prefooter_form_row">

              <input
                type="tel"
                name="phone"
                placeholder="Enter your number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "..." : "Submit"}
              </button>

            </div>

            {/* City Dropdown */}
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="prefooter_city"
              required
            >
              <option value="">Select your city*</option>

              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>

            {/* Checkbox */}
            <label className="prefooter_checkbox">
              <input type="checkbox" required />
              <span>Join the announcement here</span>
            </label>

          </form>

          <p className="prefooter_privacy">
            By submitting this form, you agree to our{" "}
            <span>Privacy Policy</span>.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Prefooter;
