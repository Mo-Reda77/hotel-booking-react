import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      {/* ======= Subscribe Section ======= */}
      <section
        style={{
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
          color: "#fff",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h3 className="fw-bold mb-3">Stay Updated</h3>
        <p className="mb-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Subscribe to our newsletter and be the first to know about exclusive
          deals, new destinations, and travel tips
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
            <h5 className="fw-bold">2M+</h5>
            <p className="small mb-0">Happy Customers</p>
          </div>
          <div>
            <h5 className="fw-bold">50K+</h5>
            <p className="small mb-0">Hotels Partner</p>
          </div>
          <div>
            <h5 className="fw-bold">200+</h5>
            <p className="small mb-0">Countries</p>
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
            <div className="col-md-3">
              <h5 className="fw-bold text-white mb-3">
                <span className="me-2">🏨</span>Bookify
              </h5>
              <p className="small">
                Your trusted partner for finding the perfect accommodation
                worldwide. Book with confidence and travel with peace of mind.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-white">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="col-md-2">
              <h6 className="fw-bold text-white mb-3">Quick Links</h6>
              <ul className="list-unstyled small">
                <li>Home</li>
                <li>Hotels</li>
                <li>Destinations</li>
                <li>Deals</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="col-md-2">
              <h6 className="fw-bold text-white mb-3">Support</h6>
              <ul className="list-unstyled small">
                <li>Help Center</li>
                <li>Customer Service</li>
                <li>Cancellation Policy</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6 className="fw-bold text-white mb-3">Contact Info</h6>
              <ul className="list-unstyled small mb-3">
                <li>📞  +01065015885</li>
                <li>✉️  mohamedredac7@gmail.com</li>
                <li>📍  123 Travel Street, NY 10001</li>
              </ul>
              <p className="fw-semibold text-white mb-2">Download Our App</p>
              <div className="d-flex gap-2">
                <button className="btn btn-dark btn-sm"> App Store</button>
                <button className="btn btn-dark btn-sm"> Play Store</button>
              </div>
            </div>
          </div>

          <hr className="my-4 text-secondary" />
          <p className="small mb-0 text-center">
            © 2024 Bookify. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}