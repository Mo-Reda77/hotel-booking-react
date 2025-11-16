import React, { useState, useEffect } from "react";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [lang, setLang] = useState("English (US)");
  const [currency, setCurrency] = useState("USD");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تأثير بسيط عند التمرير لإضافة ظل أقوى
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white border-bottom w-100 ${scrolled ? "shadow-lg" : "shadow-sm"}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
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
            
            {/* phone and email only visible on large screens */}
            <span className="d-none d-md-flex align-items-center">
              <FaPhoneAlt className="me-2 text-primary" /> +01065015885
            </span>
            <span className="d-none d-md-flex align-items-center">
              <FaEnvelope className="me-2 text-primary" /> mohamedredac7@gmail.com
            </span>
          </div>

          {/* Right side */}
          <div className="d-flex align-items-center flex-wrap gap-3">
            {/* Language Dropdown */}
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
                  <button className="dropdown-item" onClick={() => setLang("English (US)")}>
                    🇬🇧 English (US)
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => setLang("Français")}>
                    🇫🇷 Français
                  </button>
                </li>
                 <li>
                  <button className="dropdown-item" onClick={() => setLang("العربية")}>
                    🇪🇬 العربية
                  </button>
                </li>
                  </ul>
            </div>

            {/* Currency Dropdown */}
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
                  <button className="dropdown-item" onClick={() => setCurrency("USD")}>
                    USD – $
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => setCurrency("EGP")}>
                    EGP – £
                  </button>
                </li>
              </ul>
            </div>

            {/* Signin / Register */}
            <Link to="/signin" className="btn btn-sm btn-outline-primary px-3">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="btn btn-sm text-white px-3"
              style={{
                background: "linear-gradient(90deg,#6d28d9 0%,#9333ea 50%,#a855f7 100%)",
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* ======= Main Navbar ======= */}
      <nav className="py-3">
        <div className="container d-flex justify-content-between align-items-center">
          {/* ===== Burger button for mobile ===== */}
          <button
            className="btn d-md-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          {/* ===== Menu items ===== */}
          <ul
              className={`nav flex-column flex-md-row align-items-md-center mb-0 ${
                menuOpen ? "d-flex" : "d-none d-md-flex"
              }`}
              style={{
                gap: "10px",
                backgroundColor: menuOpen ? "#fff" : "transparent",
                position: menuOpen ? "absolute" : "static",
                top: menuOpen ? "70px" : "0",
                left: 0,
                right: 0,
                padding: menuOpen ? "15px 25px" : "0",
                borderBottom: menuOpen ? "1px solid #eee" : "none",
                zIndex: 999,
              }}
            >
              <li className="nav-item mx-1">
                <Link
                  to="/"
                  className="nav-link fw-semibold text-dark"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaHome className="me-1" /> Home
                </Link>
              </li>

              <li className="nav-item mx-1">
                <ScrollLink
                  to="featured"
                  smooth
                  duration={800}
                  offset={-70}
                  className="nav-link fw-semibold text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => setMenuOpen(false)}
                >
                  <FaBuilding className="me-1" /> Hotels
                </ScrollLink>
              </li>

              <li className="nav-item mx-1">
                <ScrollLink
                  to="destinations"
                  smooth
                  duration={800}
                  offset={-70}
                  className="nav-link fw-semibold text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => setMenuOpen(false)}
                >
                  <FaMapMarkerAlt className="me-1" /> Destinations
                </ScrollLink>
              </li>

              <li className="nav-item mx-1">
                <ScrollLink
                  to="deals"
                  smooth
                  duration={800}
                  offset={-70}
                  className="nav-link fw-semibold text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => setMenuOpen(false)}
                >
                  <FaTags className="me-1" /> Deals
                </ScrollLink>
              </li>

              <li className="nav-item mx-1">
                <ScrollLink
                  to="about"
                  smooth
                  duration={800}
                  offset={-70}
                  className="nav-link fw-semibold text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => setMenuOpen(false)}
                >
                  <FaInfoCircle className="me-1" /> About
                </ScrollLink>
              </li>

              <li className="nav-item mx-1">
                <ScrollLink
                  to="contact"
                  smooth
                  duration={800}
                  offset={-70}
                  className="nav-link fw-semibold text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => setMenuOpen(false)}
                >
                  <FaHeadset className="me-1" /> Contact
                </ScrollLink>
              </li>
            </ul>

                     {/* ===== Search & Favorite ===== */}
<div
  className={`align-items-center gap-3 ${
    menuOpen ? "d-flex flex-column w-100 mt-3" : "d-none d-md-flex ms-3"
  }`}
  style={{
    justifyContent: menuOpen ? "center" : "flex-end",
  }}
>
  {/* ===== Search Box ===== */}
  <form
    className="d-flex align-items-center border rounded-pill bg-light px-3"
    style={{
      flex: "0 0 100%",
      maxWidth: menuOpen ? "100%" : "320px",
      minWidth: "200px",
    }}
  >
    <FaSearch className="text-secondary me-2" />
    <input
      type="text"
      placeholder="Search hotels, destinations..."
      className="form-control border-0 bg-light"
      style={{
        boxShadow: "none",
        fontSize: "14px",
      }}
    />
  </form>

  {/* ===== Favorite Icon ===== */}
  <div
    className="position-relative rounded-circle bg-light d-flex justify-content-center align-items-center"
    style={{
      width: "35px",
      height: "35px",
      cursor: "pointer",
    }}
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