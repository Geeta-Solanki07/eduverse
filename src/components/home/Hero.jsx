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
      {/* ===== MOBILE OVERLAY MENU ===== */}
      <div className={`mobile-overlay ${menuOpen ? "active" : ""}`} id="mobileMenu">
        <a href="#" className="m-link" onClick={closeMenu}>Home</a>
        <a href="#" className="m-link" onClick={closeMenu}>Internships</a>
        <a href="#" className="m-link" onClick={closeMenu}>Features</a>
        <a href="#" className="m-link" onClick={closeMenu}>About Us</a>
        <a href="#" className="m-link" onClick={closeMenu}>Contact</a>

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

      {/* ===== MAIN WRAPPER ===== */}
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
        {/* ===== NAVBAR ===== */}
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
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">Internships</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">About us</a>
            </div>
          </div>

          {/* ===== DESKTOP AUTH ===== */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            <a href="#" className="text-dark text-decoration-none fw-semibold">
              Log in
            </a>
            <button className="btn-signup shadow">Sign up</button>
          </div>
        </nav>

        {/* ===== HERO SECTION ===== */}
        <section className="hero-container container">
          <div className="row align-items-center w-100 mx-0">
            <div className="col-lg-5">
              <h1
                className="hero-title reveal-up"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Best in <span>Internship Based Courses</span> India
              </h1>

              <p
                className="hero-desc reveal-up"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Job Ready, Top Affordable & Pan India Support
              </p>

              <div
                className="d-flex flex-column flex-sm-row align-items-center gap-3 reveal-up justify-content-lg-start justify-content-center mb-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <button
                  className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-white border-0 shadow"
                  style={{ background: "var(--primary-orange)" }}
                >
                  Join the Class
                </button>
                <button className="btn btn-outline-secondary rounded-pill px-5 py-3 fw-bold">
                  Learn more
                </button>
              </div>

              {/* ===== STATS ===== */}
              <div
                className="stats-wrapper reveal-up"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="stat-box">
                  <h3 className="counter-box">
                    <span className="counter">15.2</span>K
                  </h3>
                  <p>Active Students</p>
                </div>

                <div className="stat-box border-start ps-4">
                  <h3 className="counter-box">
                    <span className="counter">4.5</span>K
                  </h3>
                  <p>Expert Tutors</p>
                </div>

                <div className="stat-box border-start ps-4">
                  <h3 className="counter-box">
                    <span className="counter">100</span>%
                  </h3>
                  <p>Completion Rate</p>
                </div>
              </div>
            </div>

            {/* ===== IMAGE GRID ===== */}
            <div className="col-lg-7 mt-4 mt-lg-0">
              <div className="grid-wrapper">
                <div
                  className="grid-item item-1 reveal-pop"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500"
                    alt="Student"
                  />
                </div>

                <div
                  className="grid-item item-2 reveal-pop"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <img
                    src="https://aimst.edu.my/wp-content/uploads/2020/05/online-class-video-conference.jpg"
                    alt="Tutor"
                  />
                </div>

                <div
                  className="grid-item item-3 reveal-pop"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
                    alt="Group Learning"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
