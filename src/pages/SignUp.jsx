import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    alert("Your account has been created successfully!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "40px 10px",
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
          Join our family and start your journey at Grand Hotel
        </p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mt-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="MohamedReda22"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mt-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Mohamed@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mt-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Terms */}
          <div className="form-check mt-3">
            <input type="checkbox" className="form-check-input" id="tos" required />
            <label htmlFor="tos" className="form-check-label small text-secondary">
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          <div className="form-check mt-2 mb-4">
            <input type="checkbox" className="form-check-input" id="newsletter" />
            <label htmlFor="newsletter" className="form-check-label small text-secondary">
              I want to receive special offers and updates from Grand Hotel
            </label>
          </div>

          <button
            type="submit"
            className="btn w-100 text-white fw-semibold mb-3"
            style={{ backgroundColor: "#7c3aed", height: "48px" }}
          >
            Create Account
          </button>
        </form>

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