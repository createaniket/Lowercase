import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";

const GroupBookings = () => {
  const [data, setData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
    formType: "Group Bookings",
  });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("/api/forms/submit", data);
    alert("Group Booking Sent");
  };

  return (

    <>

    <Navbar />

    <div className="groupbookings_page">


    <form className="bwForm" onSubmit={submit}>
      <h2>Group Bookings</h2>
      <input placeholder="Full Name" onChange={e=>setData({...data,fullName:e.target.value})}/>
      <input placeholder="Mobile Number" onChange={e=>setData({...data,mobile:e.target.value})}/>
      <input placeholder="Email Address" onChange={e=>setData({...data,email:e.target.value})}/>
      <textarea placeholder="Booking Details" onChange={e=>setData({...data,message:e.target.value})}/>
      <button>Submit</button>
    </form>
    </div>

    <Prefooter />
    <Footer />
    </>
  );
};

export default GroupBookings;
