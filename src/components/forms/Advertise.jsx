import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";

const Advertise = () => {
  const [data, setData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
    formType: "Advertise With Us",
  });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("/api/forms/submit", data);
    alert("Advertise enquiry sent");
  };

  return (
    <form className="bwForm" onSubmit={submit}>
      <h2>Advertise With Us</h2>
      <input placeholder="Full Name" onChange={e=>setData({...data,fullName:e.target.value})}/>
      <input placeholder="Mobile Number" onChange={e=>setData({...data,mobile:e.target.value})}/>
      <input placeholder="Email Address" onChange={e=>setData({...data,email:e.target.value})}/>
      <textarea placeholder="Brand / Campaign Details" onChange={e=>setData({...data,message:e.target.value})}/>
      <button>Submit</button>
    </form>
  );
};

export default Advertise;
