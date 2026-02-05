import React from "react";
import "./privacyPolicy.css";
import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";

import Navbartoplogo from "../../navbar/Navbartoplogo";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbartoplogo />

      <div className="policyPage">
        <div className="policyContainer">
          <header className="policyHeader">
            <h1 className="policyTitle">Privacy Policy</h1>
            <p className="policySub">
              This Privacy Policy explains how Lowercase Events collects, uses
              and protects your information.
            </p>
          </header>

          <div className="policyContent">
            <section className="policySection">
              <h2>1. Introduction</h2>
              <p>
                We respect your privacy and are committed to protecting your
                personal data. This policy explains how we collect and use your
                data when you purchase tickets, attend events, or interact with
                our services.
              </p>
            </section>

            <section className="policySection">
              <h2>2. Information We Collect</h2>
              <ul className="policyList">
                <li>Name, email address, phone number</li>
                <li>Ticket purchase and transaction information</li>
                <li>Event attendance information</li>
                <li>Marketing preferences</li>
                <li>Technical information (IP address, device, browser)</li>
              </ul>
            </section>

            <section className="policySection">
              <h2>3. How We Use Your Information</h2>
              <ul className="policyList">
                <li>To provide access to events and ticket services</li>
                <li>To communicate important event updates</li>
                <li>To process payments through third-party platforms</li>
                <li>To improve user experience and security</li>
                <li>To send promotional messages (only if you opt-in)</li>
              </ul>
            </section>

            <section className="policySection">
              <h2>4. Photography & Media</h2>
              <p>
                Events may be photographed or recorded for promotional,
                security, and archival purposes. By attending, you may appear in
                event media used lawfully by Lowercase Events.
              </p>
            </section>

            <section className="policySection">
              <h2>5. Sharing Your Data</h2>
              <p>We may share your data with:</p>
              <ul className="policyList">
                <li>Ticketing and payment platforms (e.g. Fatsoma)</li>
                <li>
                  Event venues and partners (as required for entry/security)
                </li>
                <li>Legal authorities (if required by law)</li>
              </ul>
            </section>

            <section className="policySection">
              <h2>6. Data Security</h2>
              <p>
                We take reasonable steps to protect your personal data. However,
                no online system is 100% secure and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section className="policySection">
              <h2>7. Your Rights</h2>
              <ul className="policyList">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw marketing consent</li>
                <li>Request data portability where applicable</li>
              </ul>
            </section>

            <section className="policySection">
              <h2>8. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us using the details provided on our website.
              </p>
            </section>
          </div>

          <footer className="policyFooter">
            <p>
              © {new Date().getFullYear()} Lowercase Events. All rights
              reserved.
            </p>
          </footer>
        </div>
      </div>

      <Prefooter />

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
