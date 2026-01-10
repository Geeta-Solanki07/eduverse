"use client";

import React from "react";

export default function Features() {
  return (
    <section
      className="premium-mvp-section"
      id="features"
      style={{ backgroundColor: "#f8f8f8" }}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-4" data-aos="fade-up">
          <span className="system-tag">Dousoft Ecosystem</span>
          <h2 className="fw-bold mt-2" style={{ fontSize: "2rem" }}>
            Platform <span className="text-orange">Excellence</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="row g-3 justify-content-center">
          {/* Card 1 */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="material-card-compact">
              <div className="icon-sphere portal">
                <i className="fas fa-video"></i>
              </div>
              <div className="card-content">
                <h5>Live Portal</h5>
                <p>Daily live sessions with real-time mentor communication.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="150">
            <div className="material-card-compact">
              <div className="icon-sphere review">
                <i className="fas fa-check-double"></i>
              </div>
              <div className="card-content">
                <h5>Task Audit</h5>
                <p>Manual review of every assignment for quality assurance.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="material-card-compact">
              <div className="icon-sphere attendance">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="card-content">
                <h5>Attendance</h5>
                <p>Automated monthly tracking to ensure consistent progress.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="250">
            <div className="material-card-compact">
              <div className="icon-sphere certificate">
                <i className="fas fa-award"></i>
              </div>
              <div className="card-content">
                <h5>Certification</h5>
                <p>ISO verified certificates issued upon course completion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
