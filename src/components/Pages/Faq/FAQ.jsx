import React, { useState } from "react";
import "./Faq.css";
import Navbar from "../../navbar/Navbar";
import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";

const faqData = {
    "🎟️ Ticket & Entry": [
      {
        q: "I lost my ticket",
        a: "Please double-check your email inbox for a digital copy of your ticket. If you're still unable to find it, contact us immediately. We may be able to provide a replacement ticket for a fee, depending on availability.",
      },
      {
        q: "Can I get a refund?",
        a: "Unfortunately, we cannot provide refunds for lost tickets. However, if the event is canceled or rescheduled, we may offer alternative arrangements or a refund at our discretion.",
      },
      {
        q: "Can I purchase tickets at the door?",
        a: "Ticket availability at the door depends on the event. We recommend purchasing tickets in advance to guarantee entry.",
      },
      {
        q: "Can I transfer my ticket to someone else?",
        a: "Transferability of tickets depends on the event. Please check the event terms and conditions for details.",
      },
      {
        q: "Do I need a passport?",
        a: "Yes, you will need to present a valid passport or government-issued ID as proof of age and identity for entry into the event.",
      },
    ],
  
    "🍔 Venue Rules & Policies": [
      {
        q: "Can I bring my own food and drinks?",
        a: "Outside food and drinks are not allowed. Our venue offers a variety of food and beverage options to choose from.",
      },
      {
        q: "What is the dress code for the event?",
        a: "Please refer to the event description for the specific dress code.",
      },
    ],
  
    "🛡️ Safety & Event Updates": [
      {
        q: "What are the security measures in place for the event?",
        a: "We implement security measures such as bag checks, metal detectors, and security personnel.",
      },
      {
        q: "What should I do if I see something suspicious?",
        a: "If you notice anything suspicious, please report it to a member of our staff or security personnel immediately.",
      },
      {
        q: "What happens if the event is canceled or postponed?",
        a: "In case of cancellation or postponement, we will provide information about rescheduling or refund options.",
      },
    ],
  
    "🎉 Event Planning Services": [
      {
        q: "Do you offer event planning services?",
        a: "Yes, we offer comprehensive event planning services from conceptualization to execution.",
      },
      {
        q: "What is included in your event planning packages?",
        a: "Our packages include venue scouting, vendor coordination, timelines, guest management, and on-site support.",
      },
      {
        q: "How far in advance should I book your services?",
        a: "We recommend booking at least 3–6 months in advance for popular dates.",
      },
      {
        q: "How do you determine the cost of your services?",
        a: "Pricing depends on event size, scope, and services required. A custom quote is provided.",
      },
    ],
  };
  

  

const Faq = () => {
  const [activeTab, setActiveTab] = useState("🎟️ Ticket & Entry");

  // 🔥 Store opened question by ID instead of index
  const [openId, setOpenId] = useState(null);

  const [search, setSearch] = useState("");

  const filteredFaq = faqData[activeTab]
    .map((item, i) => ({ ...item, id: i })) // add id
    .filter((item) => item.q.toLowerCase().includes(search.toLowerCase()));

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (

    <>

    <Navbar />
    

    <div className="faq-container">
      {/* Tabs */}
      <div className="faq-tabs">
        {Object.keys(faqData).map((tab) => (
          <button
            key={tab}
            className={`faq-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setOpenId(null); // reset on tab change
              setSearch("");
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search FAQs..."
        className="faq-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FAQ List */}
      <div className="faq-list">
        {filteredFaq.map((item) => (
          <div key={item.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(item.id)}>
              <span className="faq-text">{item.q}</span>

              {/* Plus / Cross */}
              <span className="faq-icon">{openId === item.id ? "×" : "+"}</span>
            </div>

            {openId === item.id && <div className="faq-answer">{item.a}</div>}
          </div>
        ))}
      </div>
    </div>


    <Prefooter />

    <Footer />

    </>
  );
};

export default Faq;
