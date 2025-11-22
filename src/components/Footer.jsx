import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      {/* ======= Stay Connected Section ======= */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
          color: "#fff",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h3 className="fw-bold mb-3">Stay Connected with Grand Hotel</h3>
        <p className="mb-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Subscribe to receive our latest offers, upcoming events, and special updates
          directly from Grand Hotel.
        </p>

        <div
          className="d-flex justify-content-center mb-4"
          style={{ gap: "10px" }}
        >
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            style={{
              maxWidth: "320px",
              height: "45px",
            }}
          />
          <button
            className="btn fw-semibold text-white"
            style={{
              backgroundColor: "#f59e0b",
              padding: "0 25px",
              height: "45px",
            }}
          >
            Subscribe
          </button>
        </div>

        <div className="d-flex justify-content-center text-center gap-4 mt-4 flex-wrap">
          <div>
            <h5 className="fw-bold">25+</h5>
            <p className="small mb-0">Years of Excellence</p>
          </div>
          <div>
            <h5 className="fw-bold">50K+</h5>
            <p className="small mb-0">Happy Guests</p>
          </div>
          <div>
            <h5 className="fw-bold">5⭐</h5>
            <p className="small mb-0">Rated Hospitality</p>
          </div>
        </div>
      </section>

      {/* ======= Main Footer ======= */}
      <section
        style={{
          backgroundColor: "#0f172a",
          color: "#cbd5e1",
          padding: "50px 20px",
        }}
      >
        <div className="container">
          <div className="row gy-4">
            {/* Hotel Info */}
            <div className="col-md-4">
              <h5 className="fw-bold text-white mb-3">
                <span className="me-2">🏨</span>Grand Hotel
              </h5>
              <p className="small">
                Experience luxury, comfort, and elegance in the heart of Cairo.  
                Whether you’re here for business or leisure, we make every stay unforgettable.
              </p>

              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-white" title="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white" title="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white" title="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-3">
              <h6 className="fw-bold text-white mb-3">Quick Links</h6>
              <ul className="list-unstyled small">
                <li><a href="/" className="text-reset text-decoration-none">Home</a></li>
                <li><a href="#featured" className="text-reset text-decoration-none">Rooms & Suites</a></li>
                <li><a href="#offers" className="text-reset text-decoration-none">Offers</a></li>
                <li><a href="#about" className="text-reset text-decoration-none">About Us</a></li>
                <li><a href="#contact" className="text-reset text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-5">
              <h6 className="fw-bold text-white mb-3">Contact Information</h6>
              <ul className="list-unstyled small mb-3">
                <li>📞  +20 106 501 5885</li>
                <li>✉️  info@grandhotel.com</li>
                <li>📍  Downtown Cairo, Egypt</li>
              </ul>
              <p className="small text-secondary mb-1">
                Open 24 hours a day, 7 days a week
              </p>
            </div>
          </div>

          <hr className="my-4 text-secondary" />
          <p className="small mb-0 text-center">
            © 2024 Grand Hotel. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}