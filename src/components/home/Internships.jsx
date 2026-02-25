"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import {getBatchServ} from "../../app/services/batch.services"
const FILTERS = [
  { key: "", label: "All" },
  { key: "45 Days", label: "45 Days" },
  { key: "3 Months", label: "3 Months" },
  { key: "6 Months", label: "6 Months" },
];


export default function InternshipsSection() {
  const [activeFilter, setActiveFilter] = useState("");
  const sliderRef = useRef(null);
  const btnRefs = useRef([]);

  useEffect(() => {
    const index = FILTERS.findIndex(f => f.key === activeFilter);
    const btn = btnRefs.current[index];
    const slider = sliderRef.current;

    if (btn && slider) {
      slider.style.width = `${btn.offsetWidth}px`;
      slider.style.left = `${btn.offsetLeft}px`;
    }
  }, [activeFilter]);

  
  const [payload, setPayload]=useState({
    duration:"",
  })

  const [batchList, setBatchList]=useState([]);
  const getBatchList = async()=>{
    try {
      let response = await getBatchServ(payload);
      if(response?.data?.statusCode=="200"){
        setBatchList(response?.data?.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getBatchList()
  }, [payload])

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
              className={`f-btn ${payload?.duration === filter.key ? "active" : ""}`}
              onClick={() => {setPayload({
                duration:filter.key
              }); setActiveFilter(filter.key)}}
            >
              {filter.label}
            </button>
          ))}
          <div className="f-slider" ref={sliderRef}></div>
        </div>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {batchList?.map((item, i) => (
          <div
            key={item._id}
            className="col-lg-4 col-md-6 internship-card"
          >
            <div className="edu-card-v4">
              <div className="card-img-box">
                <div className="card-tag">{item.tag}</div>
                <img src={item.image} alt={item.name} />
              </div>

              <div className="card-content-v4">
                <h5 className="card-title-v4">{item.name}</h5>
                <p className="card-text-v4">{item.description}</p>

                <div className="meta-row-v4">
                  <span className="meta-tag-v4">
                    <i className="far fa-clock"></i> {item.duration}
                  </span>
                  {item?.isCertified && <span className="meta-tag-v4">
                    <i className="far fa-check-circle"></i> Certified
                  </span>}
                  
                </div>

                <div className="card-footer-v4">
                  <span className="price-v4"><s className="text-muted">{item.price}</s> {item?.discountedPrice}&#8377;</span>
                  <button className="enroll-btn-v4" onClick={() => window.open("https://eduverse-student.vercel.app")}>
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
