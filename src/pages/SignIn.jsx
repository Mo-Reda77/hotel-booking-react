import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div
    className="d-flex justify-content-center align-items-center"
    style={{
      minHeight: "100vh",
      backgroundColor: "#f9fafb",
      overflowX: "hidden",
    }}
  >
    <div
      className="bg-white p-5 rounded-4 shadow-sm"
      style={{
        width: "500px",
        margin: "0 auto",             
        display: "block",
      }}
      >
        <h3 className="fw-bold text-center mb-1">Welcome Back</h3>
        <p className="text-center text-secondary mb-4">
          Sign in to your Bookify account
        </p>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>

        <div className="d-flex justify-content-between mb-3">
          <div>
            <input type="checkbox" className="form-check-input me-1" />{" "}
            Remember me
          </div>
          <Link to="/forgot-password" className="text-primary small">
            Forgot password?
          </Link>
        </div>

        <button
          className="btn w-100 text-white fw-semibold mb-3"
          style={{ backgroundColor: "#1e40af" }}
        >
          Sign In
        </button>

        <p className="text-center mb-0">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary fw-semibold">
            Sign up
          </Link>
        </p>

        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />{" "}
          <span className="text-muted small px-2">Or continue with</span>{" "}
          <hr className="flex-grow-1" />
        </div>

        <div className="d-flex gap-3">
          <button className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center">
            <FaGoogle className="text-danger me-2" /> Google
          </button>
          <button className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center">
            <FaFacebook className="text-primary me-2" /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
}