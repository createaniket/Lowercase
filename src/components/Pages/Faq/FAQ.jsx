import React, { useState } from "react";
import "./Faq.css";

import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";
import Navbartoplogo from "../../navbar/Navbartoplogo";

import faqData from "./faqdata";
import SEO from "../../SEO";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("📞 Contact & Support");
  const [openId, setOpenId] = useState(null);
  const [search, setSearch] = useState("");

  // 🔥 Combine all FAQs when searching
  const allFaqs = Object.keys(faqData).flatMap((tab) =>
    faqData[tab].map((item, index) => ({
      ...item,
      tab,
      id: `${tab}-${index}`,
    }))
  );

  // 🔥 Filter logic
  const filteredFaq = search
    ? allFaqs.filter(
        (item) =>
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      )
    : faqData[activeTab].map((item, i) => ({
        ...item,
        tab: activeTab,
        id: `${activeTab}-${i}`,
      }));

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
    <SEO
  title="Help & FAQ"
  description="Frequently asked questions and support."
  url="/support"
/>

      <Navbartoplogo />

      <div className="faq-container">

        {/* ===== HEADER ===== */}
        <div className="faq-header">
          <h1>Contact & Support</h1>
          <p>Everything you need to know before your night out.</p>
        </div>

        {/* ===== SEARCH ===== */}
        <div className="faq-search-wrapper">
          <input
            type="text"
            placeholder="Search FAQs"
            className="faq-search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpenId(null);
            }}
          />
        </div>

        {/* ===== TABS ===== */}
        {!search && (
          <div className="faq-tabs">
            {Object.keys(faqData).map((tab) => (
              <button
                key={tab}
                className={`faq-tab ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenId(null);
                  setSearch("");
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* ===== FAQ LIST ===== */}
        <div className="faq-list">
          {filteredFaq.length === 0 && (
            <p className="no-result">No results found.</p>
          )}

          {filteredFaq.map((item) => (
            <div key={item.id} className="faq-item">

              {/* Show tab name when searching */}
              {search && (
                <div className="faq-category">
                  {item.tab}
                </div>
              )}

              <div
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
              >
                <span>{item.q}</span>

                <span className="faq-icon">
                  {openId === item.id ? "×" : "+"}
                </span>
              </div>

              {openId === item.id && (
                <div className="faq-answer">{item.a}</div>
              )}
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
