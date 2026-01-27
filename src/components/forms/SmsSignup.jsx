import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";

const SmsSignup = () => {
  const [mobile, setMobile] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("/api/forms/submit", {
      mobile,
      formType: "SMS Sign Up",
    });
    alert("Signed up");
  };

  return (
    <form className="bwForm" onSubmit={submit}>
      <h2>SMS Sign Up</h2>
      <input placeholder="Mobile Number" onChange={e=>setMobile(e.target.value)} />
      <button>Join</button>
    </form>
  );
};

export default SmsSignup;
