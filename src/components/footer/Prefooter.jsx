import React, { useState } from "react";
import "./Prefooter.css";
import axios from "axios";

import FatosmaImg from "../assests/prefooter/fatsoma.jpg";

import Taski from "../assests/prefooter/footerp.jpg";

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
          <a
            href="https://www.fatsoma.com/discover"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FatosmaImg} alt="Partner 1" />
          </a>

          <a
            href="https://www.yourfreshersguide.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Taski} alt="Partner 2" />
          </a>
        </div>

        {/* RIGHT */}
        <div className="prefooter_main_right">
          <h2 className="prefooter_heading">Join the announcement here</h2>

          <p className="prefooter_subheading">
            From zero to lit in one click – <strong>Lowercase Events</strong>{" "}
            got you!
          </p>

          {/* FORM */}
          <form className="prefooter_form" onSubmit={submit}>
            <input
              type="number"
              name="phone"
              placeholder="Enter your number*"
              value={formData.phone}
              onChange={handleChange}
              required
            />



<div className="pre_footer_right_sms_sctn">



<div className="prefooter_form_row">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`prefooter_city ${
                  formData.city === "" ? "placeholder" : ""
                }`}
                required
              >
                <option value="" disabled hidden>
                  Select your city*
                </option>

                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              {/* Checkbox */}
              <label className="prefooter_checkbox">
                <input type="checkbox" required />
                <span>
                  By submitting this form, you agree to our Privacy Policy
                </span>
              </label>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
</div>


          </form>
        </div>
      </div>
    </section>
  );
};

export default Prefooter;