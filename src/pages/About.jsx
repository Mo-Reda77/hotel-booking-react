import React from "react";

export default function About() {
  return (
    <div id="about" className="container py-5">
      <h3 className="fw-bold text-center mb-2">About Grand Hotel</h3>
      <p className="text-center text-secondary mb-5">
        Experience comfort, elegance, and warm hospitality in the heart of Cairo.
      </p>

      {/* قسم القصة */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h5 className="fw-bold mb-3">Our Story</h5>
          <p className="text-secondary">
            Established in 1995, Grand Hotel has been a symbol of luxury and comfort in Cairo for over two decades.  
            We’ve welcomed travelers from around the world, blending modern hospitality with classic elegance.
          </p>
          <p className="text-secondary">
            Our mission is to offer every guest a memorable stay — from spacious rooms and exquisite dining to personalized service that makes you feel at home.
          </p>
        </div>

        <div className="col-lg-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
            alt="Grand Hotel Lobby"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* قسم المميزات */}
      <div className="row text-center mb-5">
        <h5 className="fw-bold mb-4">Why Choose Grand Hotel?</h5>
        <div className="col-md-4 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
            alt="Luxury Rooms"
            width="60"
            className="mb-3"
          />
          <h6 className="fw-bold">Elegant Rooms & Suites</h6>
          <p className="text-secondary small">
            Spacious rooms with modern designs and stunning city or river views.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Fine Dining"
            width="60"
            className="mb-3"
          />
          <h6 className="fw-bold">Fine Dining Experience</h6>
          <p className="text-secondary small">
            Indulge in a variety of international dishes crafted by our renowned chefs.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
            alt="Wellness & Relaxation"
            width="60"
            className="mb-3"
          />
          <h6 className="fw-bold">Wellness & Relaxation</h6>
          <p className="text-secondary small">
            Enjoy our spa, gym, and rooftop pool for a truly rejuvenating experience.
          </p>
        </div>
      </div>

      {/* قسم الخدمة أو الفريق */}
      <div className="text-center">
        <h5 className="fw-bold mb-3">Our Commitment to Service</h5>
        <p className="text-secondary" style={{ maxWidth: "750px", margin: "0 auto" }}>
          Our dedicated team is at your service 24 hours a day to ensure that every moment of your stay is comfortable and memorable.  
          At Grand Hotel, guests arrive as visitors and leave as family.
        </p>
      </div>
    </div>
  );
}