

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Career.css";

import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";
import Navbartoplogo from "../navbar/Navbartoplogo";

const Careers = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const jobs = [
    {
      title: "Customer Success Manager",
      description:"Lead and deliver Lowercase Events nights from start to finish—owning operations on the ground, coordinating teams and talent, and making sure every event runs smoothly from doors open to close.",
      tag: "Marketing",
      date: "Nov 6, 2025",
      // location: "📍London + UK event cities (night work required)",
      route: "/apply/event-manager",
    },
    {
      title: "Promoter",
      tag: "Marketing",
      date: "Nov 6, 2025",
      description:"Build student communities and power the buzz behind Lowercase Events—promoting nights, driving ticket sales, and repping the brand on campus and at events.",
      // location: "📍London + UK event cities (night work required)",
      route: "/apply/promoter",
    },
    {
      title: "Summer Internship",
      tag: "Marketing",
      date: "Nov 6, 2025",
      description:"A hands-on summer internship supporting campaigns, Freshers planning, and live event launches—get real experience across marketing, ops, and growth.",
      // location: "📍London + UK event cities (night work required)",
      route: "/apply/summer-internship",
    },
    {
      title: "Content Creator",
      tag: "Marketing",
      date: "Nov 6, 2025",
      description:"Create social-first content that captures the energy of Lowercase—filming live moments, DJ sets, and crowd vibes to shape how the brand shows up online",
      // location: "📍London + UK event cities (night work required)",
      route: "/apply/content-creator",
    },
    {
      title: "Photographer / Videographer",
      tag: "Marketing",
      date: "Nov 6, 2025",
       description:"Capture the energy of Lowercase nights with high-quality photo and video—documenting the crowd, performers, and atmosphere for web and social.",
      // location: "📍London + UK event cities (night work required)",
      route: "/apply/photographer-videographer",
    },
    {
      title: "Graphic Designer",
      tag: "Marketing",
      date: "Nov 6, 2025",
      description:"Design the visual language of Lowercase—creating bold flyers, socials, and campaign assets that define how the brand looks and feels.",
      // location: "📍London + UK event cities (night work required)",
      route: "/apply/graphic-designer",
    },
    {
      title: "Video Editor",
      tag: "Marketing",
      description:"Edit high-impact nightlife content for Lowercase—turning event footage into reels, aftermovies, and campaign visuals that hit on social.",
      date: "Nov 6, 2025",
      // location: "📍London + UK event cities (night work required)",
      route: "/apply/video-editor",
    },
    {
      title: "Artist & Talent Booker",
      tag: "Marketing",
      date: "Nov 6, 2025",
      description:"Curate the sound and talent behind Lowercase—booking DJs and performers, shaping lineups, and keeping the culture sharp.",
      // location: "📍London + UK event cities (night work required)",
      route: "/apply/artist-talent-booker",
    },
    {
      title: "Partnerships & Sponsorship Manager",
      tag: "Marketing",
      description:"Develop strategic partnerships across venues, brands, and student networks to drive growth and sponsorship opportunities for Lowercase.",
      date: "Nov 6, 2025",
      // location: "📍London + UK event cities (night work required)",
      route: "/apply/partnerships-sponsorship-manager",
    },
    {
      title: "Web & Digital Account Manager",
      tag: "Marketing",
      description:"Own the digital experience behind Lowercase—managing websites, ticket funnels, and content to keep everything converting smoothly.",
      date: "Nov 6, 2025",
      // location: "📍London + UK event cities (night work required)",
      route: "/apply/web-digital-account-manager",
    },
  ];

  const filteredJobs =
    filter === "All"
      ? jobs
      : jobs.filter((job) => job.title === filter);

  return (
    <>
      <Navbartoplogo />

      <div className="career-page">
        {/* <div className="career-header">
          <span className="open-badge">OPEN ROLES</span>
         
        

        <div className="mydiv">
          <h1>Join our team</h1>
            <div className="filter">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            {jobs.map((job) => (
              <option key={job.title} value={job.title}>
                {job.title}
              </option>
            ))}
          </select>
        </div>



        </div>
        </div> */}
  <div className="career-header">
  <span className="open-badge">OPEN ROLES</span>

  <div className="mydiv">
    <h1>Join our team</h1>

    <div className="filter">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        {jobs.map((job) => (
          <option key={job.title} value={job.title}>
            {job.title}
          </option>
        ))}
      </select>
    </div>
  </div>
</div>


      
        {filteredJobs.map((job) => (
          <div className="job-card" key={job.title}>
            <div className="job-card-header">
              <div className="title-wrap">
                <h2>{job.title}</h2>
                <span className="tag-glow">{job.tag.toUpperCase()}</span>
              </div>
              <span className="date">{job.date}</span>
            </div>

            <p className="description">
              {job.description}
            </p>

            <div className="meta">
              <span>{job.location}</span>
            </div>

            <button className="apply-btn" onClick={() => navigate(job.route)}>
              Apply Now
            </button>
          </div>
        ))}
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default Careers;