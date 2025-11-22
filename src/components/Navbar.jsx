import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  FaHotel,
  FaHome,
  FaBuilding,
  FaTags,
  FaHeadset,
  FaInfoCircle,
  FaGlobe,
  FaDollarSign,
  FaSearch,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Navbar() {
  const [lang, setLang] = useState("English (US)");
  const [currency, setCurrency] = useState("USD");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleUserChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      setUser(updatedUser);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("user-login", handleUserChange);

    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("user-login", handleUserChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("user-login")); // يحدّث أي مكونات أخرى
    window.location.href = "/signin";
  };

  return (
    <header
      className={`bg-white border-bottom w-100 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        overflowX: "hidden",
      }}
    >
      {/* ======= Top Bar ======= */}
      <div
        className="py-2 border-bottom small"
        style={{ color: "#555", fontSize: "14px" }}
      >
        <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2 flex-column flex-md-row">
          {/* Hotel Logo */}
          <div className="d-flex align-items-center flex-wrap gap-4">
            <span className="fw-bold text-primary d-flex align-items-center">
              <FaHotel className="me-2 fs-4" /> Grand Hotel
            </span>
          </div>

          {/* Right side */}
          <div className="d-none d-md-flex align-items-center flex-wrap gap-3">
            {/* Language */}
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
                    onClick={() => setLang("العربية")}
                  >
                    🇪🇬 العربية
                  </button>
                </li>
              </ul>
            </div>

            {/* Currency */}
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
              </ul>
            </div>

            {/* ✅ If User Logged In – Show Email + Logout */}
            {user && user.role === "user" ? (
              <div className="d-flex align-items-center gap-2">
                <span className="fw-semibold text-secondary small">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-danger d-flex align-items-center"
                >
                  <FaSignOutAlt className="me-1" /> Logout
                </button>
              </div>
            ) : (
              !user && (
                <>
                  <Link
                    to="/signin"
                    className="btn btn-sm btn-outline-primary px-3"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="btn btn-sm text-white px-3"
                    style={{
                      background:
                        "linear-gradient(90deg,#6d28d9 0%,#9333ea 50%,#a855f7 100%)",
                    }}
                  >
                    Register
                  </Link>
                </>
              )
            )}
          </div>
        </div>
      </div>

      {/* ======= Main Navbar ======= */}
      <nav className="py-3">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Mobile */}
          <div className="d-flex align-items-center gap-2 d-md-none">
            <button
              className="btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>

          {/* Menu Items */}
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
                onClick={() => setMenuOpen(false)}
                style={{ cursor: "pointer" }}
              >
                <FaBuilding className="me-1" /> Rooms
              </ScrollLink>
            </li>

            <li className="nav-item mx-1">
              <ScrollLink
                to="offers"
                smooth
                duration={800}
                offset={-70}
                className="nav-link fw-semibold text-dark"
                onClick={() => setMenuOpen(false)}
                style={{ cursor: "pointer" }}
              >
                <FaTags className="me-1" /> Offers
              </ScrollLink>
            </li>

            <li className="nav-item mx-1">
              <ScrollLink
                to="about"
                smooth
                duration={800}
                offset={-70}
                className="nav-link fw-semibold text-dark"
                onClick={() => setMenuOpen(false)}
                style={{ cursor: "pointer" }}
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
                onClick={() => setMenuOpen(false)}
                style={{ cursor: "pointer" }}
              >
                <FaHeadset className="me-1" /> Contact
              </ScrollLink>
            </li>
          </ul>

          {/* Search */}
          <div
            className={`align-items-center gap-3 ${
              menuOpen
                ? "d-flex flex-column w-100 mt-3"
                : "d-none d-md-flex ms-3"
            }`}
            style={{ justifyContent: menuOpen ? "center" : "flex-end" }}
          >
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
                placeholder="Search rooms or offers..."
                className="form-control border-0 bg-light"
                style={{ boxShadow: "none", fontSize: "14px" }}
              />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}