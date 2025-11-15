import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // استبدل الرابط ده بـ رابط API الفعلية الخاصة بك
      await axios.post("https://your-backend-domain.com/api/forgot-password", {
        email,
      });
      setMessage(
        " If this email exists in our system, a reset link has been sent."
      );
    } catch (err) {
      setMessage(" Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
      }}
    >
      <div className="bg-white p-5 rounded-4 shadow-sm" style={{ width: 420 }}>
        <h3 className="fw-bold text-center mb-1">Forgot Password</h3>
        <p className="text-center text-secondary mb-4">
          Enter your email to receive reset instructions.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="form-label fw-semibold">Email Address</label>
          <input
            type="email"
            required
            className="form-control mb-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="btn w-100 text-white fw-semibold mb-3"
            style={{
              backgroundColor: "#1e40af",
              height: "45px",
            }}
          >
            Send Reset Link
          </button>

          {message && (
            <p className="small text-center mt-2 text-secondary">{message}</p>
          )}

          <p className="text-center small mb-0">
            Remember your password?{" "}
            <Link to="/signin" className="text-primary fw-semibold">
              Back to Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}