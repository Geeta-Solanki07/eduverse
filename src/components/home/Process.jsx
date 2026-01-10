"use client";

import { useState } from "react";

const PROCESS_STEPS = [
  {
    id: 0,
    number: "01",
    title: "Select & Register",
    desc:
      "Pick your program from our curated list and jumpstart your career with a seamless registration.",
    image:
      "https://assets.justinmind.com/wp-content/uploads/2020/02/canva-signup-form.png",
    icon: "https://cdn-icons-png.flaticon.com/512/3064/3064155.png",
    tags: ["Instant Access", "Expert Track"],
  },
  {
    id: 1,
    number: "02",
    title: "Admin Approval",
    desc:
      "Your payment is manually verified by our team for maximum security and trust.",
    image:
      "https://cdn.freebiesupply.com/images/large/1x/card-payment-m02.png",
    icon: "https://cdn-icons-png.flaticon.com/512/1067/1067256.png",
    tags: ["Secure Gate", "Manual Check"],
  },
  {
    id: 2,
    number: "03",
    title: "Live Learning",
    desc:
      "Join interactive sessions and work on industry-grade projects in real-time.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    icon: "https://cdn-icons-png.flaticon.com/512/2436/2436636.png",
    tags: ["Live Mentor", "Hands-on"],
  },
  {
    id: 3,
    number: "04",
    title: "Certification",
    desc:
      "Get an ISO-verified certificate to showcase your skills to global recruiters.",
    image:
      "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=800",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135727.png",
    tags: ["Verified", "Job Ready"],
  },
];

export default function KineticProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="kinetic-process-section">
      {/* Header */}
      <div className="container py-5">
        <div className="process-header text-center mb-5">
          <h6 className="text-orange fw-bold text-uppercase tracking-widest">
            Our Methodology
          </h6>
          <h2 className="display-5 fw-bold text-dark">
            How We Build Your <span className="text-orange">Future</span>
          </h2>
        </div>
      </div>

      {/* Tiles */}
      <div className="kinetic-container">
        {PROCESS_STEPS.map((step, index) => (
          <div
            key={step.id}
            className={`process-tile ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {/* Background Image */}
            <div
              className="image-overlay"
              style={{
                backgroundImage: `url(${step.image})`,
              }}
            ></div>

            {/* Background Number */}
            <div className="tile-bg-num">{step.number}</div>

            {/* Content */}
            <div className="tile-content">
              <div className="icon-box">
                <img src={step.icon} alt={step.title} />
              </div>

              <h3 className="tile-title">{step.title}</h3>

              <div className="expand-content">
                <p className="tile-desc">{step.desc}</p>

                <div className="tile-tags">
                  {step.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
