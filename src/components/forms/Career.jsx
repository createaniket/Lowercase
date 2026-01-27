import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";

const Careers = () => {
  const [data, setData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
    formType: "Careers",
  });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("/api/forms/submit", data);
    alert("Application Submitted");
  };

  return (
    <form className="bwForm" onSubmit={submit}>
      <h2>Careers</h2>
      <input placeholder="Full Name" onChange={e=>setData({...data,fullName:e.target.value})}/>
      <input placeholder="Mobile Number" onChange={e=>setData({...data,mobile:e.target.value})}/>
      <input placeholder="Email Address" onChange={e=>setData({...data,email:e.target.value})}/>
      <textarea placeholder="Why should we hire you?" onChange={e=>setData({...data,message:e.target.value})}/>
      <button>Apply</button>
    </form>
  );
};

export default Careers;
