import React, { useEffect, useState } from "react";
import { getPopularDestinations } from "../api/api";

export default function PopularDestinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getPopularDestinations()
      .then((res) => setDestinations(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section  id="destinations" className="py-5 text-center">
      <h3 className="fw-bold mb-2">Popular Destinations</h3>
      <p className="text-secondary mb-5">
        Explore the world's most sought‑after travel destinations with exclusive
        deals and premium accommodations.
      </p>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {destinations.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
              <div
                className="rounded-4 overflow-hidden shadow-sm position-relative"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-100"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div
                  className="position-absolute bottom-0 start-0 end-0 text-start text-white p-3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  }}
                >
                  <h6 className="fw-bold mb-1">{item.name}</h6>
                  <small>
                    {item.hotelsCount} hotels available <br />
                    <span className="text-warning">
                      From ${item.pricePerNight}/night
                    </span>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}