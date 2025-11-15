import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserAlt,
  FaSearch,
  FaSlidersH,
} from "react-icons/fa";

export default function SearchForm() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 Adult");

  const fieldHeight = "48px";

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* ===== صف الحقول ===== */}
      <div
        className="d-flex align-items-end justify-content-between flex-wrap"
        style={{ gap: "10px" }}
      >
        {/* Destination */}
        <div style={{ flex: "1 1 30%" }}>
          <label className="form-label fw-semibold text-secondary mb-1">
            Destination
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaMapMarkerAlt className="text-secondary" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={{ height: fieldHeight }}
            />
          </div>
        </div>

        {/* Check-in */}
        <div style={{ flex: "1 1 17%" }}>
          <label className="form-label fw-semibold text-secondary mb-1">
            Check-in
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaCalendarAlt className="text-secondary" />
            </span>
            <input
              type="date"
              className="form-control border-start-0"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              style={{ height: fieldHeight }}
            />
          </div>
        </div>

        {/* Check-out */}
        <div style={{ flex: "1 1 17%" }}>
          <label className="form-label fw-semibold text-secondary mb-1">
            Check-out
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaCalendarAlt className="text-secondary" />
            </span>
            <input
              type="date"
              className="form-control border-start-0"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              style={{ height: fieldHeight }}
            />
          </div>
        </div>

        {/* Guests */}
        <div style={{ flex: "1 1 17%" }}>
          <label className="form-label fw-semibold text-secondary mb-1">
            Guests
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaUserAlt className="text-secondary" />
            </span>
            <select
              className="form-select border-start-0"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              style={{ height: fieldHeight }}
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>Family</option>
            </select>
          </div>
        </div>

        {/* زر البحث */}
        <div style={{ flex: "1 1 15%" }}>
          <button
            className="btn fw-bold text-white w-100"
            style={{
              backgroundColor: "#f59e0b",
              height: 47,
             
            }}
          >
            <FaSearch className="me-2" />
            Search Hotels
          </button>
        </div>
      </div>

      {/* ===== الفلاتر ===== */}
      <hr className="my-4" />
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <div className="d-flex flex-wrap gap-4 text-secondary small">
          <label>
            <input type="checkbox" className="form-check-input me-1" /> Pet‑friendly
          </label>
          <label>
            <input type="checkbox" className="form-check-input me-1" /> Free WiFi
          </label>
          <label>
            <input type="checkbox" className="form-check-input me-1" /> Pool
          </label>
          <label>
            <input type="checkbox" className="form-check-input me-1" /> Spa
          </label>
        </div>
        <div
          className="text-primary fw-semibold d-flex align-items-center"
          style={{ cursor: "pointer", fontSize: "14px" }}
        >
          <FaSlidersH className="me-2" /> More Filters
        </div>
      </div>
    </form>
  );
}