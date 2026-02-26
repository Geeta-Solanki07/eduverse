"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        id="mobileMenu"
      >
        <a href="#" className="m-link" onClick={closeMenu}>
          Home
        </a>
        {/* <a href="#" className="m-link" onClick={closeMenu}>Internships</a> */}
        {/* <a href="#" className="m-link" onClick={closeMenu}>Features</a> */}
        <a href="#" className="m-link" onClick={closeMenu}>
          About Us
        </a>
        <a href="#" className="m-link" onClick={closeMenu}>
          Contact
        </a>

        <div className="mt-4 d-flex flex-column gap-3 mobile-buttons">
          <button className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold">
            Login
          </button>
          <button
            className="btn btn-warning rounded-pill px-4 py-2 fw-bold text-white border-0"
            style={{ background: "var(--primary-orange)" }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div
        className="main-wrapper container"
        style={{
          background:
            "url(https://img.freepik.com/premium-photo/abstract-82-background-wallpaper-gradient_792836-180215.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <nav className="navbar navbar-expand-lg container" data-aos="fade-down">
          <a className="navbar-brand fw-bold fs-3" href="#">
            <img src="assets/images/logo.png" alt="Dousoft Logo" width="90" />
          </a>

          <div className="d-flex align-items-center gap-3">
            <button
              className={`menu-btn d-lg-none ${menuOpen ? "active" : ""}`}
              id="mobileMenuBtn"
              onClick={toggleMenu}
            >
              <div className="line" id="l1"></div>
              <div className="line" id="l2"></div>
              <div className="line" id="l3"></div>
            </button>
          </div>

          {/* ===== DESKTOP NAV ===== */}
          <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
            <div className="nav-container d-flex">
              <a className="nav-link active" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                About us
              </a>
              <a className="nav-link" href="#">
                Contact us
              </a>
            </div>
          </div>

          {/* ===== DESKTOP AUTH ===== */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            <a
              href="https://eduverse-student.vercel.app"
              target="blank"
              className="text-dark text-decoration-none fw-semibold"
            >
              Log in
            </a>
            <button
              className="btn-signup shadow"
              onClick={() =>
                window.open(
                  "https://eduverse-student.vercel.app/sign-up",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Sign up
            </button>
          </div>
        </nav>

        <>
          <section className="page-banner">
            <div className="container" data-aos="fade-up">
              <h1 className="display-4 fw-bold">About Dousoft</h1>
              <div className="breadcrumb-nav">
                <a href="index.html">Home</a> &nbsp; / &nbsp;{" "}
                <span>About Us</span>
              </div>
            </div>
          </section>
          <section className="py-5 my-4">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-6" data-aos="fade-right">
                  <div className="about-img-box">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                      alt="Office Culture"
                    />
                    <div className="since-badge">
                      <h4 className="counter" data-target={6}>
                        0
                      </h4>
                      <span className="small fw-bold text-muted">
                        Years of
                        <br />
                        Experience
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                  <h6
                    className="text-uppercase fw-bold"
                    style={{ color: "var(--primary-orange)", letterSpacing: 2 }}
                  >
                    Who We Are
                  </h6>
                  <h2 className="display-6 fw-bold mb-4">
                    Bridging the Gap Between <br />
                    <span style={{ color: "var(--primary-orange)" }}>
                      Degrees &amp; Careers
                    </span>
                  </h2>
                  <p className="text-muted lead">
                    Dousoft EduVerse isn't just an institute; it's a
                    pre-corporate simulation designed to fix the engineering
                    skills gap.
                  </p>
                  <p className="text-secondary mb-4">
                    We started Dousoft IT Solutions as a development agency.
                    While hiring, we realized fresh graduates lacked practical
                    skills like version control, debugging, and deployment. We
                    built EduVerse to fix this by replacing "classrooms" with
                    "office simulations" and "teachers" with "tech leads".
                  </p>
                  <div className="d-flex gap-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fas fa-check-circle text-success fs-5" />
                      <span className="fw-bold text-dark">ISO Certified</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="fas fa-check-circle text-success fs-5" />
                      <span className="fw-bold text-dark">Live Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5" style={{ backgroundColor: "#fafafa" }}>
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay={0}>
                  <div className="mvg-card">
                    <div className="mvg-icon">
                      <i className="fas fa-rocket" />
                    </div>
                    <h3>Our Mission</h3>
                    <p className="text-muted">
                      To democratize high-quality technical education by making
                      industry-grade mentorship accessible to students from
                      Tier-2 and Tier-3 cities.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="mvg-card">
                    <div className="mvg-icon">
                      <i className="fas fa-eye" />
                    </div>
                    <h3>Our Vision</h3>
                    <p className="text-muted">
                      To become India's most trusted "Finishing School" for
                      engineers, ensuring no student graduates without
                      employable skills.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="mvg-card">
                    <div className="mvg-icon">
                      <i className="fas fa-bullseye" />
                    </div>
                    <h3>Our Goal</h3>
                    <p className="text-muted">
                      To train and place 10,000+ students in top tech startups
                      and MNCs by 2027 through our practical learning ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="comparison-section">
            <div className="container">
              <div className="text-center mb-5" data-aos="fade-up">
                <h6
                  className="text-uppercase fw-bold"
                  style={{ color: "var(--primary-orange)" }}
                >
                  The Reality Check
                </h6>
                <h2 className="fw-bold">
                  Typical Institutes vs.{" "}
                  <span className="dousoft-brand">Dousoft</span>
                </h2>
              </div>
              <div className="comp-table-container" data-aos="zoom-in">
                <div className="comp-header">
                  <div>Feature</div>
                  <div>Other Institutes</div>
                  <div className="dousoft-brand">Dousoft EduVerse</div>
                </div>
                <div className="comp-row">
                  <div className="feature-name">Learning Mode</div>
                  <div className="others-col">Recorded Videos</div>
                  <div className="us-col">Live + Interactive</div>
                </div>
                <div className="comp-row">
                  <div className="feature-name">Task Review</div>
                  <div className="others-col">Automated / None</div>
                  <div className="us-col">Manual Code Audit</div>
                </div>
                <div className="comp-row">
                  <div className="feature-name">Instructor</div>
                  <div className="others-col">Academic Trainers</div>
                  <div className="us-col">Working Developers</div>
                </div>
                <div className="comp-row">
                  <div className="feature-name">Project Type</div>
                  <div className="others-col">Clones / Basic</div>
                  <div className="us-col">Live Client Modules</div>
                </div>
                <div className="comp-row">
                  <div className="feature-name">Certification</div>
                  <div className="others-col">Participation Only</div>
                  <div className="us-col">ISO Verified + Skill Based</div>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <section className="counter-section">
              <div className="row text-center">
                <div className="col-lg-3 col-6 counter-item mb-4 mb-lg-0">
                  <div className="counter-box">
                    <h2 className="counter-val counter" data-target={15}>
                      0
                    </h2>
                    <span className="counter-symbol">K</span>
                  </div>
                  <p className="counter-label">Happy Students</p>
                </div>
                <div className="col-lg-3 col-6 counter-item mb-4 mb-lg-0">
                  <div className="counter-box">
                    <h2 className="counter-val counter" data-target={120}>
                      0
                    </h2>
                    <span className="counter-symbol">+</span>
                  </div>
                  <p className="counter-label">Live Batches</p>
                </div>
                <div className="col-lg-3 col-6 counter-item">
                  <div className="counter-box">
                    <h2 className="counter-val counter" data-target={50}>
                      0
                    </h2>
                    <span className="counter-symbol">+</span>
                  </div>
                  <p className="counter-label">Hiring Partners</p>
                </div>
                <div className="col-lg-3 col-6 counter-item">
                  <div className="counter-box">
                    <h2 className="counter-val counter" data-target="4.8">
                      0
                    </h2>
                  </div>
                  <p className="counter-label">Average Rating</p>
                </div>
              </div>
            </section>
          </div>
          <section className="py-5 mb-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 mb-4 mb-lg-0" data-aos="fade-right">
                  <h2 className="fw-bold mb-3">
                    Why{" "}
                    <span style={{ color: "var(--primary-orange)" }}>
                      Choose Us?
                    </span>
                  </h2>
                  <p className="text-muted">
                    We don't sell courses; we sell careers. Our ecosystem is
                    built to mimic the pressure and standards of a real IT
                    company.
                  </p>
                  <button className="btn btn-outline-dark rounded-pill px-4 py-2 mt-3 fw-bold">
                    View Success Stories
                  </button>
                </div>
                <div className="col-lg-7" data-aos="fade-left">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="fas fa-laptop-code fs-2 mb-3" />
                        <div className="feature-title">Simulated Office</div>
                        <p className="small text-muted">
                          Experience daily standups, Jira ticket management, and
                          Git workflows.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="fas fa-headset fs-2 mb-3" />
                        <div className="feature-title">24/7 Doubt Support</div>
                        <p className="small text-muted">
                          Never get stuck. Our dedicated mentors are available
                          round the clock.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="fas fa-file-contract fs-2 mb-3" />
                        <div className="feature-title">Resume Building</div>
                        <p className="small text-muted">
                          We help you craft ATS-friendly resumes that get
                          shortlisted.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="fas fa-network-wired fs-2 mb-3" />
                        <div className="feature-title">Alumni Network</div>
                        <p className="small text-muted">
                          Join a community of 5000+ developers working in top
                          companies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="container mb-5"
            data-aos="zoom-in"
            style={{ marginTop: 100 }}
          >
            <div className="cta-advanced-wrapper">
              <div className="floating-shape shape-1">
                <i className="fas fa-rocket" />
              </div>
              <div className="floating-shape shape-2">
                <i className="fas fa-code" />
              </div>
              <div className="floating-shape shape-3">
                <i className="fas fa-graduation-cap" />
              </div>
              <div className="glow-blob blob-left" />
              <div className="glow-blob blob-right" />
              <div className="row position-relative z-2 align-items-center">
                <div className="col-lg-8 mx-auto text-center">
                  <span className="badge-pill-cta mb-3">
                    🚀 LIMITED BATCH SEATS
                  </span>
                  <h2 className="display-4 fw-bold text-white mb-3">
                    Don't Just Learn Code.
                    <br />
                    <span className="text-gradient-orange">
                      Build a Legacy.
                    </span>
                  </h2>
                  <p className="lead text-white-50 mb-5">
                    Join the top 1% of students who are building real-world
                    applications and getting hired by top MNCs. Your career
                    transformation starts here.
                  </p>
                  <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
                    <button className="btn-glow-primary">
                      Join Next Batch <i className="fas fa-arrow-right ms-2" />
                    </button>
                    <button className="btn-glass-secondary">
                      <i className="fas fa-download me-2" /> Download Curriculum
                    </button>
                  </div>
                  <div className="mt-4 text-white-50 small">
                    <i className="fas fa-check-circle text-success me-1" /> ISO
                    Verified
                    <span className="mx-2">•</span>
                    <i className="fas fa-check-circle text-success me-1" /> 100%
                    Placement Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
