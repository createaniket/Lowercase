import React from "react";
import "./termsAndConditions.css";

import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";
import Navbartoplogo from "../../navbar/Navbartoplogo";
import SEO from "../../SEO";

const TermsAndConditions = () => {
  return (
    <>
    <SEO
  title="Terms & Conditions"
  description="Our terms and conditions for ticket purchases."
  url="/terms-and-conditions"
/>

      <Navbartoplogo />

      <div className="termsPage">
        <div className="termsContainer">
          <header className="termsHeader">
            <h1 className="termsTitle">
              LOWERCASE EVENTS – TERMS & CONDITIONS
            </h1>
            <p className="termsSub">
              These Terms govern the purchase and use of Tickets and attendance
              at Events under Lowercase Events.
            </p>
          </header>

          <div className="termsImportant">
            <p>
              <strong>IMPORTANT:</strong> Clause 10 contains exclusions of
              warranties and limitations of liability.
            </p>
          </div>

          <div className="termsContent">
            <section className="termsSection">
              <h2>1. INTRODUCTION</h2>
              <p>
                <span className="point">1.1</span> These Terms and Conditions
                (“Terms”) govern the purchase and use of Tickets and attendance
                at Events promoted, produced, operated or delivered under the
                Lowercase Events brand.
              </p>
              <p>
                <span className="point">1.2</span> By purchasing a Ticket,
                attending an Event, or otherwise engaging with an Event, the
                User agrees to be legally bound by these Terms. If the User does
                not agree, the User must not purchase a Ticket or attend an
                Event.
              </p>
            </section>

            <section className="termsSection">
              <h2>2. DEFINITIONS</h2>
              <p>
                <span className="point">2.1</span> In these Terms, unless the
                context otherwise requires, the following definitions shall
                apply:
              </p>

              <div className="termsDefinitionGrid">
                <div className="defItem">
                  <span className="defTitle">“Accept”</span>
                  <span className="defText">
                    means to purchase a Ticket, attend an Event, or otherwise
                    engage with an Event and thereby agree to be bound by these
                    Terms.
                  </span>
                </div>

                <div className="defItem">
                  <span className="defTitle">“Content”</span>
                  <span className="defText">
                    means all information, text, images, video, audio, graphics,
                    branding and other material used in connection with an
                    Event.
                  </span>
                </div>

                <div className="defItem">
                  <span className="defTitle">“Customer”</span>
                  <span className="defText">
                    means any individual who purchases, holds, or uses a Ticket
                    or attends an Event.
                  </span>
                </div>

                <div className="defItem">
                  <span className="defTitle">“Event”</span>
                  <span className="defText">
                    means any live event promoted, operated or delivered under
                    the Lowercase Events brand.
                  </span>
                </div>

                <div className="defItem">
                  <span className="defTitle">
                    “Intellectual Property Rights”
                  </span>
                  <span className="defText">
                    means all copyrights, trademarks, trade names, design rights
                    and other intellectual property rights subsisting anywhere
                    in the world.
                  </span>
                </div>

                <div className="defItem">
                  <span className="defTitle">“Platform”</span>
                  <span className="defText">
                    means any third-party ticketing, payment or distribution
                    platform (including but not limited to Fatsoma) through
                    which Tickets may be sold.
                  </span>
                </div>

                <div className="defItem">
                  <span className="defTitle">“Ticket”</span>
                  <span className="defText">
                    means any ticket, QR code, wristband, guestlist allocation
                    or other entitlement granting entry to an Event.
                  </span>
                </div>

                <div className="defItem">
                  <span className="defTitle">“User”</span>
                  <span className="defText">
                    means any Customer or attendee of an Event.
                  </span>
                </div>

                <div className="defItem">
                  <span className="defTitle">“Venue”</span>
                  <span className="defText">
                    means the premises at which an Event takes place.
                  </span>
                </div>

                <div className="defItem">
                  <span className="defTitle">“We / Us / Our”</span>
                  <span className="defText">means Lowercase Events.</span>
                </div>
              </div>

              <p>
                <span className="point">2.2</span> Interpretation provisions
                equivalent to clauses 2.2.1–2.2.6 of the Fatsoma Terms apply and
                are incorporated by reference.
              </p>
            </section>

            <section className="termsSection">
              <h2>3. COMMENCEMENT OF AGREEMENT</h2>
              <p>
                <span className="point">3.1</span> A legally binding contract
                between Lowercase Events and the User shall come into effect at
                the time the User Accepts these Terms and shall continue for the
                duration of the Event and any related obligations.
              </p>
            </section>

            <section className="termsSection">
              <h2>4. TERMS APPLICABLE</h2>
              <p>
                <span className="point">4.1</span> These Terms apply in addition
                to:
              </p>
              <ul className="termsList">
                <li>any Venue rules;</li>
                <li>any Platform terms; and</li>
                <li>
                  any additional Event-specific terms notified to the User.
                </li>
              </ul>
              <p>
                <span className="point">4.2</span> In the event of conflict,
                these Terms shall prevail in respect of Event attendance and
                liability.
              </p>
              <p>
                <span className="point">4.3</span> We reserve the right to amend
                these Terms at any time. Updated Terms shall take effect upon
                publication.
              </p>
            </section>

            <section className="termsSection">
              <h2>5. TICKETS, PLATFORMS & PAYMENTS</h2>
              <p>
                <span className="point">5.1</span> Tickets may be sold via one
                or more Platforms.
              </p>
              <p>
                <span className="point">5.2</span> Where Tickets are sold via a
                Platform:
              </p>
              <ul className="termsList">
                <li>the Platform acts as agent only for Lowercase Events;</li>
                <li>payment processing is governed by the Platform’s terms;</li>
                <li>
                  Lowercase Events is not responsible for Platform outages,
                  errors or delays.
                </li>
              </ul>
              <p>
                <span className="point">5.3</span> The contract for Event
                attendance is always between Lowercase Events and the Customer,
                regardless of the Platform used.
              </p>
              <p>
                <span className="point">5.4</span> Tickets are non-refundable
                unless expressly stated or required by law.
              </p>
            </section>

            <section className="termsSection">
              <h2>6. ENTRY, AGE & CONDUCT</h2>
              <p>
                <span className="point">6.1</span> Events are typically 18+
                unless stated otherwise.
              </p>
              <p>
                <span className="point">6.2</span> Valid government-issued
                photographic ID must be produced upon request.
              </p>
              <p>
                <span className="point">6.3</span> Entry may be refused or
                revoked without refund where a User:
              </p>
              <ul className="termsList">
                <li>fails ID checks;</li>
                <li>is intoxicated or under the influence of drugs;</li>
                <li>behaves dangerously, abusively or unlawfully; or</li>
                <li>breaches these Terms or Venue rules.</li>
              </ul>
            </section>

            <section className="termsSection">
              <h2>7. EVENT CHANGES & CANCELLATIONS</h2>
              <p>
                <span className="point">7.1</span> Event details (including
                venue, timings, line-up and format) are subject to change.
              </p>
              <p>
                <span className="point">7.2</span> Artist or programme changes
                do not automatically entitle the Customer to a refund.
              </p>
              <p>
                <span className="point">7.3</span> In the event of cancellation,
                refunds (if applicable) shall be processed in accordance with
                Platform procedures and applicable law.
              </p>
            </section>

            <section className="termsSection">
              <h2>8. SAFETY, SPECIAL EFFECTS & ENTERTAINMENT</h2>
              <p>
                <span className="point">8.1</span> Events may include:
              </p>
              <ul className="termsList">
                <li>lasers;</li>
                <li>CO₂ cannons;</li>
                <li>smoke or haze;</li>
                <li>strobe or intense lighting;</li>
                <li>loud music and crowd density.</li>
              </ul>
              <p>
                <span className="point">8.2</span> Some Events may include
                physical or mechanical entertainment such as bouncy castles,
                rodeo machines or interactive installations.
              </p>
              <p>
                <span className="point">8.3</span> Attendance and participation
                are entirely at the User’s own risk.
              </p>
              <p>
                <span className="point">8.4</span> Users acknowledge that such
                features may pose risks to individuals with medical conditions
                including (but not limited to) asthma, epilepsy, heart
                conditions or pregnancy.
              </p>
              <p>
                <span className="point">8.5</span> Lowercase Events accepts no
                liability for injury or loss arising from such features except
                where caused by proven negligence.
              </p>
            </section>

            <section className="termsSection">
              <h2>9. PHOTOGRAPHY & RECORDING</h2>
              <p>
                <span className="point">9.1</span> Events may be photographed,
                filmed or recorded for:
              </p>
              <ul className="termsList">
                <li>promotional use;</li>
                <li>social media;</li>
                <li>security; and</li>
                <li>archival purposes.</li>
              </ul>
              <p>
                <span className="point">9.2</span> By attending an Event, the
                User grants Lowercase Events an irrevocable, royalty-free
                licence to use their image or likeness for lawful promotional
                purposes without compensation.
              </p>
            </section>

            <section className="termsSection termsDanger">
              <h2>10. EXCLUSION OF WARRANTIES & LIMITATION OF LIABILITY</h2>
              <p>
                <span className="point">10.1</span> Events are provided “as is”
                and without warranties of any kind.
              </p>
              <p>
                <span className="point">10.2</span> To the maximum extent
                permitted by law, Lowercase Events shall not be liable for:
              </p>
              <ul className="termsList">
                <li>indirect or consequential loss;</li>
                <li>loss of enjoyment;</li>
                <li>loss of income or travel costs; or</li>
                <li>loss or damage to personal property.</li>
              </ul>
              <p>
                <span className="point">10.3</span> Total liability, whether in
                contract, tort or otherwise, shall not exceed the face value of
                the Ticket.
              </p>
              <p>
                <span className="point">10.4</span> Nothing in these Terms
                excludes liability for death or personal injury caused by
                negligence or for fraud.
              </p>
            </section>

            <section className="termsSection">
              <h2>11. PERSONAL PROPERTY</h2>
              <p>
                <span className="point">11.1</span> Personal belongings are
                brought to Events at the User’s own risk.
              </p>
              <p>
                <span className="point">11.2</span> Cloakrooms are used at the
                User’s own risk.
              </p>
            </section>

            <section className="termsSection">
              <h2>12. INTELLECTUAL PROPERTY</h2>
              <p>
                <span className="point">12.1</span> All Intellectual Property
                Rights in the Lowercase Events brand and Content are owned by
                the Brand Owner and/or licensed for use.
              </p>
              <p>
                <span className="point">12.2</span> No rights are granted to
                Users other than the right to attend the Event.
              </p>
            </section>

            <section className="termsSection">
              <h2>13. INDEMNITY</h2>
              <p>
                <span className="point">13.1</span> The User agrees to indemnify
                and hold harmless Lowercase Events against all claims, losses,
                damages and expenses arising from:
              </p>
              <ul className="termsList">
                <li>breach of these Terms;</li>
                <li>unlawful conduct; or</li>
                <li>injury to others caused by the User.</li>
              </ul>
            </section>

            <section className="termsSection">
              <h2>14. FORCE MAJEURE</h2>
              <p>
                <span className="point">14.1</span> Lowercase Events shall not
                be liable for failure or delay caused by events beyond its
                reasonable control, including acts of God, terrorism, public
                disorder, venue closure or regulatory intervention.
              </p>
            </section>

            <section className="termsSection">
              <h2>15. TERMINATION</h2>
              <p>
                <span className="point">15.1</span> We may terminate this
                agreement immediately by refusing entry or removing a User from
                an Event.
              </p>
            </section>

            <section className="termsSection">
              <h2>16. INVALIDITY</h2>
              <p>
                <span className="point">16.1</span> If any provision is held
                invalid or unenforceable, the remaining provisions shall remain
                in full force.
              </p>
            </section>

            <section className="termsSection">
              <h2>17. LAW & JURISDICTION</h2>
              <p>
                <span className="point">17.1</span> These Terms are governed by
                the laws of England and Wales.
              </p>
              <p>
                <span className="point">17.2</span> The courts of England and
                Wales shall have exclusive jurisdiction.
              </p>
            </section>

            <section className="termsSection">
              <h2>18. THIRD-PARTY RIGHTS</h2>
              <p>
                <span className="point">18.1</span> No third party has rights to
                enforce these Terms under the Contracts (Rights of Third
                Parties) Act 1999.
              </p>
            </section>
          </div>

          <footer className="termsFooter">
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

export default TermsAndConditions;
