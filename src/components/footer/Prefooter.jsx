import React from "react";
import "./Prefooter.css";
import FatosmaImg from "../assests/prefooter/fatsoma.jpg";
// import FatsomaImg2 from "../assests/prefooter/bric.jpg";

import Yfg from "../assests/prefooter/yfg.jpg";

const Prefooter = () => {
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
            From zero to lit in one click –{" "}
            <strong>Lowercase Events</strong> got you!
          </p>

          <form className="prefooter_form">
            <div className="prefooter_form_row">
              <input
                type="tel"
                placeholder="Enter your number*"
              />
              <button type="submit">Submit</button>
            </div>

            <input
              type="text"
              placeholder="Enter your city*"
            />

{/* ✅ CHECKBOX */}
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
