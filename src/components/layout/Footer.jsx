"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

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
              <a href="https://www.linkedin.com/company/dousoft-edu-verse" target="blank" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/dousofteduverse" target="blank" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@DousoftEduVerse" target="blank" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.facebook.com/DousoftEduverse" target="blank" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
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
                <a  onClick={()=>toast.info("Coming Soon")}>Internship Tracks</a>
              </li>
              <li>
                <a  onClick={()=>toast.info("Coming Soon")}>About Us</a>
              </li>
              <li>
                <a  onClick={()=>toast.info("Coming Soon")}>Career</a>
              </li>
              <li>
                <a  onClick={()=>toast.info("Coming Soon")}>Support Center</a>
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
                <a  onClick={()=>toast.info("Coming Soon")}>Privacy Policy</a>
              </li>
              <li>
                <a  onClick={()=>toast.info("Coming Soon")}>Terms of Service</a>
              </li>
              <li>
                <a  onClick={()=>toast.info("Coming Soon")}>ISO Verification Details</a>
              </li>
              <li>
                <a  onClick={()=>toast.info("Coming Soon")}>Refund Policy</a>
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
      </div>
    </footer>
  );
}
