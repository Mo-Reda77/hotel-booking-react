import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHotel, FaBed, FaCalendarAlt, FaUserFriends, FaStar, FaSignOutAlt } from "react-icons/fa";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "admin") {
      navigate("/signin"); // لو مش أدمن يرجعه للصفحة الخاصة بالدخول
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin"); // ← هنا يخرج فقط لما يعمل Logout
  };

  // بيانات الفندق الواحد
  const hotel = {
    name: "Grand Hotel",
    location: "Cairo, Egypt",
    totalRooms: 120,
    bookedRooms: 75,
    customers: 320,
    rating: 4.7,
  };

  return (
    <div
      className="min-vh-100 bg-light"
      style={{ padding: "40px", paddingTop: "60px" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-primary d-flex align-items-center gap-2">
          <FaHotel /> Admin Dashboard
        </h3>
        <button onClick={handleLogout} className="btn btn-danger">
          <FaSignOutAlt className="me-1" /> Logout
        </button>
      </div>

      <div className="card p-4 shadow-sm mb-4">
        <h4 className="fw-bold text-primary">{hotel.name}</h4>
        <p className="text-secondary">{hotel.location}</p>

        <div className="row g-4 mt-3 text-center">
          <div className="col-md-3 col-6">
            <div className="bg-primary text-white p-3 rounded">
              <FaBed className="fs-3 mb-2" />
              <h5>{hotel.totalRooms}</h5>
              <small>Total Rooms</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="bg-success text-white p-3 rounded">
              <FaCalendarAlt className="fs-3 mb-2" />
              <h5>{hotel.bookedRooms}</h5>
              <small>Booked Rooms</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="bg-info text-white p-3 rounded">
              <FaUserFriends className="fs-3 mb-2" />
              <h5>{hotel.customers}</h5>
              <small>Customers</small>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="bg-warning text-white p-3 rounded">
              <FaStar className="fs-3 mb-2" />
              <h5>{hotel.rating}</h5>
              <small>Rating</small>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-4">
        <h5 className="text-primary fw-bold mb-3">Hotel Management</h5>
        <p className="text-muted">Manage bookings, rooms, and offers below:</p>
        <div className="d-flex gap-3 flex-wrap">
          <button className="btn btn-primary">View Hotel Details</button>
          <button className="btn btn-outline-secondary">Edit Info</button>
          <button className="btn btn-outline-success">Add Booking</button>
        </div>
      </div>
    </div>
  );
}