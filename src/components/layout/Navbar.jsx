"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ===== Mobile Overlay Menu ===== */}
      <div className={`mobile-overlay ${menuOpen ? "active" : ""}`}>
        <Link href="/" className="m-link" onClick={closeMenu}>Home</Link>
        <Link href="/internships" className="m-link" onClick={closeMenu}>Internships</Link>
        <Link href="/features" className="m-link" onClick={closeMenu}>Features</Link>
        <Link href="/about" className="m-link" onClick={closeMenu}>About Us</Link>
        <Link href="/contact" className="m-link" onClick={closeMenu}>Contact</Link>

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

      {/* ===== Navbar ===== */}
      <nav className="navbar navbar-expand-lg container">
        {/* Logo */}
        <Link href="/" className="navbar-brand fw-bold fs-3">
          <Image
            src="/assets/images/logo.png"
            alt="Dousoft Logo"
            width={90}
            height={40}
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="d-flex align-items-center gap-3">
          <button
            className={`menu-btn d-lg-none ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line" id="l1"></div>
            <div className="line" id="l2"></div>
            <div className="line" id="l3"></div>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
          <div className="nav-container d-flex">
            <Link className="nav-link active" href="/">Home</Link>
            <Link className="nav-link" href="/internships">Internships</Link>
            <Link className="nav-link" href="/features">Features</Link>
            <Link className="nav-link" href="/about">About Us</Link>
          </div>
        </div>

        {/* Desktop Auth */}
        <div className="d-none d-lg-flex align-items-center gap-4">
          <Link href="/login" className="text-dark text-decoration-none fw-semibold">
            Log in
          </Link>
          <button className="btn-signup shadow">Sign up</button>
        </div>
      </nav>
    </>
  );
}
