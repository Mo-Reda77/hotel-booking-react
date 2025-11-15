import React, { useEffect, useState } from "react";
import { getExclusiveDeals } from "../api/api";

export default function ExclusiveDeals() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    getExclusiveDeals()
      .then((res) => setDeals(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="deals" className="py-5 text-center bg-light">
      <h3 className="fw-bold mb-2">Exclusive Deals & Offers</h3>
      <p className="text-secondary mb-5">
        Save big on your next adventure with our limited‑time promotions and
        special packages.
      </p>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {deals.map((deal) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={deal.id}>
              <div
                className="p-4 rounded-4 h-100 text-start text-white shadow-sm"
                style={{
                  background: deal.color || "#0ea5e9", // لون الخلفية من الـ API أو لون افتراضي
                  minHeight: "180px",
                  position: "relative",
                }}
              >
                {/* شارة (التصنيف) مثل LIMITED TIME أو VIP Members */}
                {deal.badge && (
                  <span
                    className="badge bg-light text-dark position-absolute top-3 start-3"
                    style={{
                      top: "10px",
                      left: "10px",
                      fontSize: "11px",
                      fontWeight: "700",
                    }}
                  >
                    {deal.badge}
                  </span>
                )}

                {/* عنوان العرض */}
                <h6 className="fw-bold mt-4">{deal.title}</h6>
                <p className="small mb-4">{deal.description}</p>

                {/* زر الإجراء */}
                <button
                  className="btn btn-light btn-sm fw-semibold"
                  style={{ color: "#000" }}
                >
                  {deal.buttonText || "Learn More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}