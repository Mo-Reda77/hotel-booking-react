import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaUserAlt,
  FaSearch,
  FaSlidersH,
  FaHotel,
} from "react-icons/fa";

export default function SearchForm() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 Adult");

  // فلاتر الغرف الخاصة بالفندق الواحد
  const [filters, setFilters] = useState({
    breakfastIncluded: false,
    seaView: false,
    airConditioned: false,
    roomService: false,
    kingBed: false,
  });

  const fieldHeight = "48px";

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hotel = "Grand Hotel - Cairo";

    console.log({
      hotel,
      checkIn,
      checkOut,
      guests,
      filters,
    });

    alert("Searching available rooms with selected preferences!");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ===== صف الحقول ===== */}
      <div className="row g-3 align-items-end justify-content-center">
        {/* اسم الفندق الثابت */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <label className="form-label fw-semibold text-secondary mb-1">
            Hotel
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaHotel className="text-secondary" />
            </span>
            <input
              type="text"
              className="form-control border-start-0 bg-light"
              value="Grand  Hotel – Cairo"
              disabled
              style={{ height: fieldHeight }}
            />
          </div>
        </div>

        {/* تاريخ الوصول */}
        <div className="col-lg-3 col-md-4 col-sm-6">
          <label className="form-label fw-semibold text-secondary mb-1">
            Check‑in
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
              required
            />
          </div>
        </div>

        {/* تاريخ المغادرة */}
        <div className="col-lg-3 col-md-4 col-sm-6">
          <label className="form-label fw-semibold text-secondary mb-1">
            Check‑out
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
              required
            />
          </div>
        </div>

        {/* عدد النزلاء */}
        <div className="col-lg-2 col-md-4 col-sm-6">
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
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>Family</option>
            </select>
          </div>
        </div>

        {/* زر البحث */}
        <div className="col-lg-1 col-md-6 col-sm-12 d-grid">
          <button
            type="submit"
            className="btn fw-bold text-white"
            style={{
              backgroundColor: "#f59e0b",
              height: fieldHeight,
              fontSize: "15px",
            }}
          >
            <FaSearch className="me-2" />
            Search
          </button>
        </div>
      </div>

      {/* ===== قسم الفلاتر ===== */}
      <hr className="my-4" />
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <div className="d-flex flex-wrap gap-4 text-secondary small">
          {/* كل اختيار هنا يمثل ميزة خاصة بغرفة الفندق */}
          <label>
            <input
              type="checkbox"
              className="form-check-input me-1"
              name="breakfastIncluded"
              checked={filters.breakfastIncluded}
              onChange={handleFilterChange}
            />{" "}
            Breakfast Included
          </label>

          <label>
            <input
              type="checkbox"
              className="form-check-input me-1"
              name="seaView"
              checked={filters.seaView}
              onChange={handleFilterChange}
            />{" "}
            Sea View
          </label>

          <label>
            <input
              type="checkbox"
              className="form-check-input me-1"
              name="airConditioned"
              checked={filters.airConditioned}
              onChange={handleFilterChange}
            />{" "}
            Air‑Conditioned
          </label>

          <label>
            <input
              type="checkbox"
              className="form-check-input me-1"
              name="roomService"
              checked={filters.roomService}
              onChange={handleFilterChange}
            />{" "}
            Room Service
          </label>

          <label>
            <input
              type="checkbox"
              className="form-check-input me-1"
              name="kingBed"
              checked={filters.kingBed}
              onChange={handleFilterChange}
            />{" "}
            King‑Size Bed
          </label>
        </div>

        <div
          className="text-primary fw-semibold d-flex align-items-center"
          style={{ cursor: "pointer", fontSize: "14px" }}
        >
          <FaSlidersH className="me-2" />
          More Filters
        </div>
      </div>
    </form>
  );
}