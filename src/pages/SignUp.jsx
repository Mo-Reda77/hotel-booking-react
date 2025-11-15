import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div
      style={{
        minHeight: "100vh",           // ارتفاع الشاشة بالكامل
        backgroundColor: "#f9fafb",
        display: "flex",             
        justifyContent: "center",     // توسيط أفقي
        alignItems: "center",         // توسيط رأسي
        overflowY: "auto",            // 🔹 يسمح بالتمرير لو المحتوى طويل
        overflowX: "hidden",          // يمنع ميل يمين
        padding: "40px 10px",         // شوية padding علشان الshadow واضح
      }}
    >
      <div
        className="bg-white p-4 p-md-5 rounded-4 shadow-sm"
        style={{
          width: "500px",
          maxWidth: "100%",
        }}
      >
        <h3 className="fw-bold text-center mb-1">Create Your Account</h3>
        <p className="text-center text-secondary mb-4">
          Join thousands of travelers who trust Bookify
        </p>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">First Name</label>
            <input type="text" className="form-control" placeholder="Mohamed" />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">Last Name</label>
            <input type="text" className="form-control" placeholder="Reda" />
          </div>
        </div>

        <div className="mt-3">
          <label className="form-label fw-semibold">Email Address</label>
          <input type="email" className="form-control" placeholder="Mohamed@example.com" />
        </div>

        <div className="mt-3">
          <label className="form-label fw-semibold">Phone Number</label>
          <input type="tel" className="form-control" placeholder="+01065015885" />
        </div>

        <div className="mt-3">
          <label className="form-label fw-semibold">Password</label>
          <input type="password" className="form-control" placeholder="Create a strong password" />
        </div>

        <div className="mt-3">
          <label className="form-label fw-semibold">Confirm Password</label>
          <input type="password" className="form-control" placeholder="Confirm your password" />
        </div>

        <div className="mt-3">
          <label className="form-label fw-semibold">Country</label>
          <select className="form-select">
            <option>Select your country</option>
            <option>Egypt</option>
            <option>Saudi Arabia</option>
            <option>USA</option>
            <option>France</option>
          </select>
        </div>

        <div className="form-check mt-3">
          <input type="checkbox" className="form-check-input" id="tos" />
          <label htmlFor="tos" className="form-check-label small text-secondary">
            I agree to the <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>
          </label>
        </div>

        <div className="form-check mt-2 mb-4">
          <input type="checkbox" className="form-check-input" id="newsletter" />
          <label htmlFor="newsletter" className="form-check-label small text-secondary">
            I want to receive promotional emails and special offers from Bookify
          </label>
        </div>

        <button
          className="btn w-100 text-white fw-semibold mb-3"
          style={{ backgroundColor: "#7c3aed", height: "48px" }}
        >
          Create Account
        </button>

        <p className="text-center small mb-0">
          Already have an account?{" "}
          <Link to="/signin" className="text-primary fw-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}