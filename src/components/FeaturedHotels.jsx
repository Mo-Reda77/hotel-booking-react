import React, { useEffect, useState } from "react";
import { getFeaturedHotels } from "../api/api";
import { FaWifi, FaSwimmingPool, FaUtensils } from "react-icons/fa";

export default function FeaturedHotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getFeaturedHotels()
      .then((res) => setHotels(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section  id="featured" className="py-5 text-center">
      <h3 className="fw-bold mb-2">Featured Hotels</h3>
      <p className="text-secondary mb-5">
        Handpicked luxury accommodations for an unforgettable stay.
      </p>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {hotels.map((h) => (
            <div className="col-lg-4 col-md-6" key={h.id}>
              <div className="card rounded-4 overflow-hidden shadow-sm border-0">
                <img
                  src={h.imageUrl}
                  alt={h.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body text-start">
                  <h6 className="fw-bold">{h.name}</h6>
                  <p className="small text-secondary mb-2">{h.location}</p>
                  <div className="d-flex gap-2 text-secondary small mb-2">
                    <FaWifi /> <FaSwimmingPool /> <FaUtensils />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">${h.price}</span>
                    <button className="btn btn-outline-primary btn-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}