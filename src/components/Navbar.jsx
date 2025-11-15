import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import {
  FaHotel,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaBuilding,
  FaTags,
  FaHeadset,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaGlobe,
  FaDollarSign,
  FaSearch,
  FaHeart,
} from "react-icons/fa";

export default function Navbar() {
  const [lang, setLang] = useState("English (US)");
  const [currency, setCurrency] = useState("USD");

  return (
    <header 
     className="border-bottom bg-white shadow-sm"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999
        }}
      >
      
      {/* ======= Topbar ======= */}
      <div
        className="py-2 border-bottom small"
        style={{ color: "#555", fontSize: "14px" }}
      >
        <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
          {/* Left side */}
          <div className="d-flex align-items-center flex-wrap gap-4">
            <span className="fw-bold text-primary d-flex align-items-center">
              <FaHotel className="me-2 fs-4" /> Bookify
            </span>
            <span className="d-flex align-items-center">
              <FaPhoneAlt className="me-2 text-primary" /> +01065015885
            </span>
            <span className="d-flex align-items-center">
              <FaEnvelope className="me-2 text-primary" /> mohamedredac7@gmail.com
            </span>
          </div>

          {/* Right side */}
          <div className="d-flex align-items-center flex-wrap gap-3">
            {/* ===== Language Dropdown ===== */}
            <div className="dropdown">
              <button
                className="btn btn-sm dropdown-toggle text-secondary"
                type="button"
                data-bs-toggle="dropdown"
              >
                <FaGlobe className="me-1 text-primary" /> {lang}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setLang("English (US)")}
                  >
                    🇬🇧 English (US)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setLang("Français")}
                  >
                    🇫🇷 Français
                  </button>
                </li>
              </ul>
            </div>

            {/* ===== Currency Dropdown ===== */}
            <div className="dropdown">
              <button
                className="btn btn-sm dropdown-toggle text-secondary"
                type="button"
                data-bs-toggle="dropdown"
              >
                <FaDollarSign className="me-1 text-primary" /> {currency}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setCurrency("USD")}
                  >
                    USD – $
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setCurrency("EGP")}
                  >
                    EGP – £
                  </button>
                </li>
              </ul>
            </div>

            {/* Buttons */}
            {/* Buttons with navigation */}
    <Link
        to="/signin"
        className="btn btn-sm btn-outline-primary px-3 me-2"
        style={{ textDecoration: "none" }}
    >
      Sign In
    </Link>

    <Link
        to="/signup"
        className="btn btn-sm text-white px-3"
        style={{
        background:
          "linear-gradient(90deg,#6d28d9 0%,#9333ea 50%,#a855f7 100%)",
        textDecoration: "none",
      }}
      >
      Register
      </Link>
          </div>
        </div>
      </div>

      {/* ======= Main Navbar ======= */}
      <nav className="py-3">
        <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
          {/* Menu items */}
          <ul className="nav me-auto flex-wrap">
          <li className="nav-item mx-1">
            <Link to="/" className="nav-link fw-semibold text-dark">
              <FaHome className="me-1" /> Home
            </Link>
          </li>

          <li className="nav-item mx-1">
            <ScrollLink
              to="featured"
              smooth={true}
              duration={800}
              offset={-70}
              className="nav-link fw-semibold text-dark"
              style={{ cursor: "pointer" }}
            >
              <FaBuilding className="me-1" /> Hotels
            </ScrollLink>
          </li>

          <li className="nav-item mx-1">
            <ScrollLink
              to="destinations"
              smooth={true}
              duration={800}
              offset={-70}
              className="nav-link fw-semibold text-dark"
              style={{ cursor: "pointer" }}
            >
              <FaMapMarkerAlt className="me-1" /> Destinations
            </ScrollLink>
          </li>

          <li className="nav-item mx-1">
            <ScrollLink
              to="deals"
              smooth={true}
              duration={800}
              offset={-70}
              className="nav-link fw-semibold text-dark"
              style={{ cursor: "pointer" }}
            >
              <FaTags className="me-1" /> Deals
            </ScrollLink>
          </li>

          {/* About & Contact */}
          <li className="nav-item mx-1">
            <ScrollLink
              to="about"
              smooth={true}
              duration={800}
              offset={-70}
              className="nav-link fw-semibold text-dark"
              style={{ cursor: "pointer" }}
            >
              <FaInfoCircle className="me-1" /> About
            </ScrollLink>
          </li>

          <li className="nav-item mx-1">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              offset={-70}
              className="nav-link fw-semibold text-dark"
              style={{ cursor: "pointer" }}
            >
              <FaHeadset className="me-1" /> Contact
            </ScrollLink>
          </li>
        </ul>

          {/* Search box */}
          <form
            className="d-flex align-items-center border rounded-pill bg-light px-3"
            style={{ flex: "0 0 320px", maxWidth: "320px", minWidth: "220px" }}
          >
            <FaSearch className="text-secondary me-2" />
            <input
              type="text"
              placeholder="Search hotels, destinations..."
              className="form-control border-0 bg-light"
              style={{ boxShadow: "none" }}
            />
          </form>

          {/* Favorite icon */}
          <div className="d-flex align-items-center gap-3 ms-3">
            <div
              className="position-relative rounded-circle bg-light d-flex justify-content-center align-items-center"
              style={{ width: "35px", height: "35px", cursor: "pointer" }}
            >
              <FaHeart className="text-secondary" />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "10px" }}
              >
                4
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}