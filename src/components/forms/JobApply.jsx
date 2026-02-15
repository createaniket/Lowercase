import React, { useState, useEffect } from "react";
import "./JobApply.css";

import axios from "axios";

import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";
import { jobs } from "../../data/jobsData.js";
import { useParams } from "react-router-dom";

function JobApply() {
  const { jobSlug } = useParams();
  const job = jobs[jobSlug];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "Job: Event Manager",
    letter: null,
    cv: null,
    formType: "job-application",
  });

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (job) {
      setFormData((prev) => ({
        ...prev,
        role: job.title,
        formType: "job-application",
      }));
    }
  }, [job]);

  if (!job) {
    return (
      <>
        <Navbartoplogo />
        <div className="contactWrapper">
          <h2>Job not found ❌</h2>
        </div>
        <Footer />
      </>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,


      
    });

    

     
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.cv ||
      !formData.letter
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("data", `Applied for: ${job.title}`);
      payload.append("role", job.title);
      payload.append("letter", formData.letter);
      payload.append("cv", formData.cv);

      await axios.post(`${baseUrl}/api/form/${formData.formType}`, payload);

      

      alert("Application sent successfully ✅");

      setFormData({
        name: "",
        phone: "",
        email: "",
        role: job.title,
        letter: null,
        cv: null,
        formType: "job-application",
      });
    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <>
      <Navbartoplogo />

      <div className="contactWrapper">
        
        <div className="contactLeft">
          <h1>{job.title}</h1>

          <h3>Role</h3>
          <p>{job.roleDesc}</p>

          <h3 className="do">What you’ll do</h3>
          <ul>
            {job.duties.map((item, i) => (
              <li key={i}>{item}</li>
            ))} 
          </ul>

          <h3 className="looking">What we’re looking for</h3>
          <ul>
            {job.lookingFor.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="contactRight">
           <h1 className="contactRightHeading">Please fill the form</h1>
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
              inputMode="numeric"
               pattern="[0-9]*"
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

            <input type="text" name="role" value={formData.role} readOnly />

            

            <label className="fileBox">
              {formData.letter ? formData.letter.name : "Upload Cover Letter"}
              <input
                type="file"
                name="letter"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                hidden
              />
            </label>

            <label className="fileBox">
              {formData.cv ? formData.cv.name : "Upload CV"}
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                hidden
              />
            </label>

           

            <button type="submit">{loading ? "Sending..." : "Submit"}</button>
          </form>
        </div>
      </div>

      <Prefooter />
      <Footer />
    </>
  );
}

export default JobApply;