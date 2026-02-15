import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";

const SmsSignup = () => {

  const [formData, setFormData] = useState({
    name: "SMS User",   // default name
    phone: "",
    email: "noemail@sms.com", // dummy email
    data: "SMS Signup",
    formType: "sms-signup",
  });

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [loading, setLoading] = useState(false);

  // Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value,
    });
  };

  // Submit
  const submit = async (e) => {
    e.preventDefault();

    if (!formData.phone) {
      alert("Please enter mobile number");
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

      alert("Signed up successfully 📩");

      // Reset
      setFormData({
        name: "SMS User",
        phone: "",
        email: "noemail@sms.com",
        data: "SMS Signup",
        formType: "sms-signup",
      });

    } catch (error) {
      console.error("Error:", error);

      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="bwForm" onSubmit={submit}>

      <h2>SMS Sign Up</h2>

      <input
        type="number"
        name="phone"
        placeholder="Mobile Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Joining..." : "Join"}
      </button>

    </form>
  );
};

export default SmsSignup;