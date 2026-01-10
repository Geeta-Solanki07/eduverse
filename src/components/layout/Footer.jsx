"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PremiumFooter() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <footer className="premium-footer" id="contact">
      <div className="container">
        <div className="footer-top row g-5">

          {/* BRAND COLUMN */}
          <div className="col-lg-4" data-aos="fade-right">
            <div className="footer-brand mb-4">
              <img
                src="/assets/images/logo.png"
                alt="Dousoft Logo"
                className="footer-logo"
              />
            </div>

            <p className="footer-about">
              Dousoft EduVerse is a systematic internship ecosystem designed to
              bridge the gap between academic learning and professional
              excellence through live mentorship and manual task auditing.
            </p>

            <div className="social-links d-flex gap-3 mt-4">
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* PLATFORM LINKS */}
          <div
            className="col-lg-2 col-md-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h6 className="footer-heading">Platform</h6>
            <ul className="footer-links">
              <li>
                <a href="#internships">Internship Tracks</a>
              </li>
              <li>
                <a href="#features">About Us</a>
              </li>
              <li>
                <a href="#journeyPin">Career</a>
              </li>
              <li>
                <a href="#faqs">Support Center</a>
              </li>
            </ul>
          </div>

          {/* COMPLIANCE */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h6 className="footer-heading">Compliance</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">ISO Verification Details</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h6 className="footer-heading">Contact Us</h6>

            <div className="contact-info">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>dousofteduverse@gmail.com</span>
              </div>

              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="contact-icon">
                  <i className="fas fa-mobile"></i>
                </div>
                <span>+91 88776 39698</span>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>
                  A-266, Triveni Nagar, Gopalpura Bypass, Jaipur, Rajasthan
                  302018
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom mt-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="copyright mb-0">
                © 2026 Dousoft EduVerse. Developed for Professional Excellence.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                height="20"
                className="me-3 opacity-50"
                alt="PayPal"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                height="15"
                className="opacity-100"
                alt="Visa"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
