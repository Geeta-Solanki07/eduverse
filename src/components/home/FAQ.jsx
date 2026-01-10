"use client";

import { useState } from "react";

const FAQ_DATA = [
  {
    id: 1,
    number: "01",
    question: "When will my batch be assigned?",
    answer:
      "Upon manual verification of your payment, your dedicated batch will be assigned within 24 to 48 hours.",
  },
  {
    id: 2,
    number: "02",
    question: "Is the certificate ISO verified?",
    answer:
      "Absolutely. All Dousoft certificates are ISO verified and globally recognized credentials.",
  },
  {
    id: 3,
    number: "03",
    question: "How is attendance tracked?",
    answer:
      "We use a systematic tracker for live sessions. Minimum participation is required for certification.",
  },
];

export default function PremiumFaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="premium-faq-section py-5" id="faqs">
      <div className="container">
        <div className="row align-items-center">
          {/* Header */}
          <div className="faq-header-content mb-5 text-center">
            <div className="badge-pill mb-3">HAVE QUESTIONS?</div>
            <h2 className="display-5 fw-bold">
              Common Queries <br />
              <span className="text-orange">Answered</span>
            </h2>
          </div>

          {/* FAQ LEFT */}
          <div className="col-lg-7">
            <div className="custom-accordion">
              {FAQ_DATA.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`premium-faq-node ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="faq-head"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="faq-info">
                      <span className="faq-number">{faq.number}</span>
                      <h5 className="faq-question">{faq.question}</h5>
                    </div>

                    <div className="faq-icon-box">
                      <span className="faq-line-h"></span>
                      <span className="faq-line-v"></span>
                    </div>
                  </div>

                  <div className="faq-body">
                    <div className="faq-content-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ RIGHT IMAGE */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="faq-visual-container">
              <div className="main-image-wrapper">
                <img
                  src="https://img.freepik.com/premium-vector/faqs-concept-illustration_114360-6685.jpg"
                  alt="Support"
                  className="img-fluid rounded-custom floating-anim"
                />

                <div className="floating-badge shadow-lg">
                  <i className="bi bi-chat-dots-fill text-orange"></i>
                  <span>24/7 Support</span>
                </div>
              </div>
              <div className="accent-blob"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
