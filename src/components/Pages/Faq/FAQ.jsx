import React, { useState } from "react";
import "./Faq.css";

import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";

import faqData from "./faqdata";
import Navbartoplogo from "../../navbar/Navbartoplogo";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("📞 Contact & Support");

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
      <Navbartoplogo />

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
                <span className="faq-icon">
                  {openId === item.id ? "×" : "+"}
                </span>
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
