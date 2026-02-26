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
      <h1 className="display-3 fw-bold mb-2">Get in Touch</h1>
      <p className="lead text-white-50 mb-3">
        We'd love to hear from you. Let's start a conversation.
      </p>
      <div className="breadcrumb-nav">
        <a href="index.html">Home</a> &nbsp; / &nbsp; <span>Contact Us</span>
      </div>
    </div>
  </section>
  <section className="mb-5 pb-4">
    <div className="container">
      <div className="contact-wrapper" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-0">
          <div className="col-lg-5 contact-info-panel">
            <h3 className="fw-bold mb-2">Contact Information</h3>
            <p className="text-white-50 mb-5">
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt" />
              </div>
              <div className="info-content">
                <h5>Call Us</h5>
                <p>+91 88776 39698</p>
                <p>Mon - Sat, 10:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope" />
              </div>
              <div className="info-content">
                <h5>Email Us</h5>
                <p>dousofteduverse@gmail.com</p>
                <p>support@dousofteduverse.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="info-content">
                <h5>Visit Us</h5>
                <p>
                  A-266, Triveni Nagar,
                  <br />
                  Gopalpura Bypass,
                  <br />
                  Jaipur, Rajasthan 302018
                </p>
              </div>
            </div>
            <div className="social-circle-links">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 contact-form-panel">
            <h3 className="fw-bold mb-4">Send us a Message</h3>
            <form action="#" method="POST">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                      required=""
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                      required=""
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Phone Number"
                      required=""
                    />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="subject"
                      aria-label="Subject Selection"
                    >
                      <option selected="" disabled="" value="">
                        Select Inquiry Type
                      </option>
                      <option value={1}>Internship Enrollment</option>
                      <option value={2}>Placement Assistance</option>
                      <option value={3}>Corporate Partnership</option>
                      <option value={4}>Other Queries</option>
                    </select>
                    <label htmlFor="subject">What are you looking for?</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 120 }}
                      required=""
                      defaultValue={""}
                    />
                    <label htmlFor="message">Your Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn-glow-primary">
                    Send Message <i className="fas fa-paper-plane ms-2" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="container" data-aos="zoom-in">
    <div className="text-center mb-4">
      <h6
        className="text-uppercase fw-bold"
        style={{ color: "var(--primary-orange)", letterSpacing: 2 }}
      >
        Find Us
      </h6>
      <h2 className="fw-bold">Our Headquarters</h2>
    </div>
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.677953705255!2d75.7606368!3d26.8822361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db444b4cbbba5%3A0xc3f835e5d3c8cfa1!2sTriveni%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</>

      </div>
    </>
  );
}
