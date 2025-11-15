import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaDollarSign,
  FaChartLine,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    bookings: 0,
    revenue: 0,
    users: 0,
    rating: 0,
  });
  const [chartData, setChartData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    // بيانات مؤقتة لحين وجود API فعلي
    axios
      .get("https://your-backend-domain.com/api/admin/stats")
      .then((res) => setStats(res.data))
      .catch(() =>
        setStats({
          bookings: 12847,
          revenue: 2.4,
          users: 89234,
          rating: 4.8,
        })
      );

    axios
      .get("https://your-backend-domain.com/api/admin/charts")
      .then((res) => {
        setChartData(res.data.bookingsTrends);
        setRevenueData(res.data.revenueByCategory);
      })
      .catch(() => {
        // Mock data
        setChartData([
          { month: "Jan", value: 1000 },
          { month: "Feb", value: 1200 },
          { month: "Mar", value: 1600 },
          { month: "Apr", value: 1800 },
          { month: "May", value: 2000 },
          { month: "Jun", value: 2200 },
          { month: "Jul", value: 2100 },
          { month: "Aug", value: 1900 },
          { month: "Sep", value: 1700 },
          { month: "Oct", value: 1500 },
          { month: "Nov", value: 1300 },
          { month: "Dec", value: 1100 },
        ]);

        setRevenueData([
          { name: "Luxury Hotels", percent: 45.2, color: "#4f46e5" },
          { name: "Business Hotels", percent: 28.6, color: "#10b981" },
          { name: "Budget Hotels", percent: 15.3, color: "#f59e0b" },
          { name: "Resorts", percent: 10.9, color: "#ef4444" },
        ]);
      });
  }, []);

  return (
    <div className="container py-5">
      <h3 className="fw-bold text-center mb-2">
        Admin Analytics Dashboard
      </h3>
      <p className="text-secondary text-center mb-5">
        Real‑time insights and performance metrics
      </p>

      {/* ======== الإحصاءات العلوية ======== */}
      <div className="row g-4 mb-5 text-white">
        <div className="col-md-3">
          <div className="p-4 rounded-4 h-100" style={{ background: "#1e40af" }}>
            <h6 className="fw-bold">
              <FaCalendarAlt className="me-2" />
              Total Bookings
            </h6>
            <h3 className="fw-bold mt-3">
              {stats.bookings.toLocaleString()}
            </h3>
            <small>+ 11.5% from last month</small>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-4 rounded-4 h-100" style={{ background: "#16a34a" }}>
            <h6 className="fw-bold">
              <FaDollarSign className="me-2" /> Revenue
            </h6>
            <h3 className="fw-bold mt-3">${stats.revenue}M</h3>
            <small>+ 12.3% from last month</small>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-4 rounded-4 h-100" style={{ background: "#7c3aed" }}>
            <h6 className="fw-bold">
              <FaUser className="me-2" /> Active Users
            </h6>
            <h3 className="fw-bold mt-3">{stats.users.toLocaleString()}</h3>
            <small>+ 8.7% from last month</small>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-4 rounded-4 h-100" style={{ background: "#f59e0b" }}>
            <h6 className="fw-bold">
              <FaStar className="me-2" /> Avg. Rating
            </h6>
            <h3 className="fw-bold mt-3">{stats.rating}</h3>
            <small>+ 0.2 from last month</small>
          </div>
        </div>
      </div>

      {/* ======== الرسوم البيانية (تجريبية بسيطة) ======== */}
      <div className="row g-4">
        {/* Chart 1 */}
        <div className="col-md-6">
          <div className="p-4 bg-white rounded-4 shadow-sm">
            <h6 className="fw-bold mb-3">Booking Trends</h6>
            <svg width="100%" height="250">
              {chartData.map((point, i) => {
                const x = (i / (chartData.length - 1)) * 500;
                const y = 250 - (point.value / 2500) * 220;
                const next =
                  i < chartData.length - 1
                    ? {
                        x:
                          ((i + 1) / (chartData.length - 1)) * 500,
                        y:
                          250 -
                          (chartData[i + 1].value / 2500) * 220,
                      }
                    : null;
                return (
                  <g key={i}>
                    <circle cx={x + 25} cy={y} r="3" fill="#4f46e5" />
                    {next && (
                      <line
                        x1={x + 25}
                        y1={y}
                                                x2={next.x + 25}
                        y2={next.y}
                        stroke="#4f46e5"
                        strokeWidth="2"
                      />
                    )}
                  </g>
                );
              })}
              {/* محاور بسيطة */}
              <line x1="25" y1="250" x2="525" y2="250" stroke="#ddd" />
              <line x1="25" y1="30" x2="25" y2="250" stroke="#ddd" />
            </svg>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="col-md-6">
          <div className="p-4 bg-white rounded-4 shadow-sm">
            <h6 className="fw-bold mb-3">Revenue by Category</h6>
            <svg width="100%" height="250" viewBox="0 0 300 300">
              <circle cx="150" cy="150" r="100" fill="#eee" />
              {(() => {
                let startAngle = 0;
                return revenueData.map((r, i) => {
                  const angle = (r.percent / 100) * 360;
                  const largeArc = angle > 180 ? 1 : 0;
                  const x1 = 150 + 100 * Math.cos((Math.PI * startAngle) / 180);
                  const y1 = 150 + 100 * Math.sin((Math.PI * startAngle) / 180);
                  const endAngle = startAngle + angle;
                  const x2 = 150 + 100 * Math.cos((Math.PI * endAngle) / 180);
                  const y2 = 150 + 100 * Math.sin((Math.PI * endAngle) / 180);
                  const path = `
                    M150 150
                    L${x1} ${y1}
                    A100 100 0 ${largeArc} 1 ${x2} ${y2}
                    Z
                  `;
                  startAngle += angle;
                  return <path key={i} d={path} fill={r.color} />;
                });
              })()}
            </svg>
            <div className="mt-3 text-start small">
              {revenueData.map((item, i) => (
                <div key={i} className="d-flex align-items-center mb-1">
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: item.color,
                      marginRight: "8px",
                    }}
                  ></div>
                  {item.name} – {item.percent}%
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}