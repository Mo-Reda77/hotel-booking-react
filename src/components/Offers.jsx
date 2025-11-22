import React, { useEffect, useState } from "react";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);

  useEffect(() => {
    const hotelOffers = [
      {
        id: 1,
        title: "Weekend Getaway",
        description:
          "Stay two nights and get 20% off your second night. Perfect for a relaxing weekend at Grand Hotel.",
        details:
          "Offer includes complimentary breakfast for two and late checkout upon availability.",
        badge: "Limited Time",
        color: "#2563eb",
      },
      {
        id: 2,
        title: "Romantic Stay Package",
        description:
          "Enjoy a romantic experience with free room decoration, dinner for two, and breakfast included.",
        details:
          "Guests receive rose petals bedding decoration and a private candle‑light dinner on the terrace.",
        badge: "Couples Offer",
        color: "#dc2626",
      },
      {
        id: 3,
        title: "Family Suite Discount",
        description:
          "Book a family suite and get an additional free bed for kids under 10 plus free access to the pool.",
        details:
          "Perfect for families looking for comfort, entertainment, and safety. Breakfast included for all.",
        badge: "Family Pack",
        color: "#16a34a",
      },
      {
        id: 4,
        title: "Business Traveler",
        description:
          "Stay 3 nights and enjoy free Wi‑Fi, meeting room access, and complimentary breakfast every morning.",
        details:
          "Includes high‑speed internet, daily breakfast buffet, and free use of conference rooms (2 hours/day).",
        badge: "Corporate Offer",
        color: "#f59e0b",
      },
    ];
    setOffers(hotelOffers);
  }, []);

  return (
    <section id="Offer" className="py-5 text-center bg-light">
      <h3 className="fw-bold mb-2">Exclusive Offers</h3>
      <p className="text-secondary mb-5">
        Enjoy our special packages and seasonal deals designed exclusively for our Grand Hotel guests.
      </p>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {offers.map((offer) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={offer.id}>
              <div
                className="p-4 rounded-4 h-100 text-start text-white shadow-sm"
                style={{
                  background: offer.color,
                  minHeight: "180px",
                  position: "relative",
                }}
              >
                {offer.badge && (
                  <span
                    className="badge bg-light text-dark position-absolute"
                    style={{
                      top: "10px",
                      left: "10px",
                      fontSize: "11px",
                      fontWeight: "700",
                    }}
                  >
                    {offer.badge}
                  </span>
                )}

                <h6 className="fw-bold mt-4">{offer.title}</h6>
                <p className="small mb-4">{offer.description}</p>

                <button
                  className="btn btn-light btn-sm fw-semibold"
                  style={{ color: "#000" }}
                  onClick={() => setSelectedOffer(offer)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ المودال لعروض الفندق */}
      {selectedOffer && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">{selectedOffer.title}</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedOffer(null)}
                ></button>
              </div>
              <div className="modal-body text-start">
                <p>{selectedOffer.description}</p>
                <hr />
                <p>{selectedOffer.details}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedOffer(null)}
                >
                  Close
                </button>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}