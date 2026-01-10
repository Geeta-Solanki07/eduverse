"use client";

import { useState, useMemo, useRef, useEffect } from "react";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "45days", label: "45 Days" },
  { key: "3months", label: "3 Months" },
  { key: "6months", label: "6 Months" },
];

const INTERNSHIPS = [
  {
    id: 1,
    category: "6months",
    tag: "Bestseller",
    title: "Full Stack Web Dev",
    desc: "Master the MERN stack and build real-world applications from scratch.",
    duration: "6 Months",
    price: "₹7,499",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
  },
  {
    id: 2,
    category: "45days",
    tag: "Beginner Friendly",
    title: "Python Data Science",
    desc: "Start your journey into data analytics with Python's core libraries.",
    duration: "45 Days",
    price: "₹1,499",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500",
  },
  {
    id: 3,
    category: "3months",
    tag: "Most Popular",
    title: "UI/UX Design Master",
    desc: "Design user-centric interfaces and conduct user research effectively.",
    duration: "3 Months",
    price: "₹3,999",
    img: "https://www.smart-academy.in/wp-content/uploads/2025/04/Your-Master-Guide-to-a-UIUX-Design-Course-Hyderabad-1024x512.webp",
  },
  {
    id: 4,
    category: "6months",
    tag: "Industry Standard",
    title: "Java Full Stack",
    desc: "Professional project-based training with manual review.",
    duration: "6 Months",
    price: "₹7,499",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
  },
  {
    id: 5,
    category: "45days",
    tag: "New Release",
    title: "Android App Dev",
    desc: "Learn to build and publish your first Android application.",
    duration: "45 Days",
    price: "₹1,499",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500",
  },
  {
    id: 6,
    category: "3months",
    tag: "Fast Track",
    title: "Digital Marketing Pro",
    desc: "Strategies for SEO, SEM, Email Marketing and social media brand growth.",
    duration: "3 Months",
    price: "₹3,999",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
  },
];

export default function InternshipsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sliderRef = useRef(null);
  const btnRefs = useRef([]);

  // 🔥 Slider movement logic
  useEffect(() => {
    const index = FILTERS.findIndex(f => f.key === activeFilter);
    const btn = btnRefs.current[index];
    const slider = sliderRef.current;

    if (btn && slider) {
      slider.style.width = `${btn.offsetWidth}px`;
      slider.style.left = `${btn.offsetLeft}px`;
    }
  }, [activeFilter]);

  const filteredData = useMemo(() => {
    if (activeFilter === "all") return INTERNSHIPS;
    return INTERNSHIPS.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      className="section container py-5"
      id="internships"
      style={{ minHeight: "100vh", background: "#222" }}
    >
      {/* Heading */}
      <div className="text-center mb-5">
        <h6
          className="text-uppercase fw-bold"
          style={{
            color: "var(--primary-orange)",
            letterSpacing: "2px",
            fontSize: "14px",
          }}
        >
          Program Selection
        </h6>
        <h2 className="fw-bold display-6" style={{ color: "white" }}>
          Our Systematic{" "}
          <span style={{ color: "var(--primary-orange)" }}>Internship</span>{" "}
          Tracks
        </h2>
        <p style={{ color: "white" }}>
          Structured learning paths designed for every student level.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="d-flex justify-content-center mb-5">
        <div className="filter-container-v4 shadow-sm">
          {FILTERS.map((filter, index) => (
            <button
              key={filter.key}
              ref={(el) => (btnRefs.current[index] = el)}
              className={`f-btn ${activeFilter === filter.key ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
          <div className="f-slider" ref={sliderRef}></div>
        </div>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="col-lg-4 col-md-6 internship-card"
          >
            <div className="edu-card-v4">
              <div className="card-img-box">
                <div className="card-tag">{item.tag}</div>
                <img src={item.img} alt={item.title} />
              </div>

              <div className="card-content-v4">
                <h5 className="card-title-v4">{item.title}</h5>
                <p className="card-text-v4">{item.desc}</p>

                <div className="meta-row-v4">
                  <span className="meta-tag-v4">
                    <i className="far fa-clock"></i> {item.duration}
                  </span>
                  <span className="meta-tag-v4">
                    <i className="far fa-check-circle"></i> Certified
                  </span>
                </div>

                <div className="card-footer-v4">
                  <span className="price-v4">{item.price}</span>
                  <button className="enroll-btn-v4">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
