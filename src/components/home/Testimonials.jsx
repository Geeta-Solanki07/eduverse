"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const leftTrack = [
  {
    id: 1,
    text:
      "The live sessions were a game changer. Manual task reviews helped me fix my logic errors instantly.",
    name: "Rahul Sharma",
    role: "Web Developer",
    img: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    text:
      "ISO Certification gave my resume the boost it needed. I got placed within 2 months!",
    name: "Ananya Iyer",
    role: "UI/UX Designer",
    img: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    text:
      "The best part is the 24/7 support. They never let me get stuck on any task.",
    name: "Vikram Singh",
    role: "Data Analyst",
    img: "https://i.pravatar.cc/150?u=3",
  },
];

const rightTrack = [
  {
    id: 4,
    text:
      "Highly professional and structured. The batch assignments are very close to real industry work.",
    name: "Sonal Gupta",
    role: "Software Engineer",
    img: "https://i.pravatar.cc/150?u=4",
  },
  {
    id: 5,
    text:
      "From registration to certification, the experience was seamless. Highly recommended!",
    name: "Amit Patel",
    role: "Full Stack Developer",
    img: "https://i.pravatar.cc/150?u=5",
  },
  {
    id: 6,
    text:
      "The mentorship quality is outstanding. They focus on every student's growth.",
    name: "Priya Verma",
    role: "Frontend Lead",
    img: "https://i.pravatar.cc/150?u=6",
  },
];

export default function TestimonialsCinema() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="testimonial-cinema-section py-5">
      <div className="container mb-5 text-center">
        <div className="badge-pill mb-3" data-aos="fade-up">
          STUDENT SUCCESS
        </div>

        <h2 className="display-4 fw-bold mb-3" data-aos="fade-up">
          Real Stories from <br />
          <span className="text-orange">Our Graduates</span>
        </h2>

        <p
          className="text-muted lead mx-auto"
          style={{ maxWidth: "600px" }}
          data-aos="fade-up"
        >
          Join thousands of students who have transformed their careers with
          Dousoft.
        </p>
      </div>

      <div className="marquee-wrapper">
        {/* LEFT TRACK */}
        <div className="marquee-track track-left">
          {[...leftTrack, ...leftTrack].map((item, index) => (
            <div className="testi-card" key={`left-${index}`}>
              <div className="quote-icon">
                <i className="bi bi-quote"></i>
              </div>

              <p>"{item.text}"</p>

              <div className="user-meta">
                <img src={item.img} alt={item.name} />
                <div>
                  <h6>{item.name}</h6>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT TRACK */}
        <div className="marquee-track track-right mt-4">
          {[...rightTrack, ...rightTrack].map((item, index) => (
            <div className="testi-card" key={`right-${index}`}>
              <div className="quote-icon">
                <i className="bi bi-quote"></i>
              </div>

              <p>"{item.text}"</p>

              <div className="user-meta">
                <img src={item.img} alt={item.name} />
                <div>
                  <h6>{item.name}</h6>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
