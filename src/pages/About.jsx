import React from "react";

export default function About() {
  return (
    <div id="about" className="container py-5">
      <h3 className="fw-bold text-center mb-2">About Bookify</h3>
      <p className="text-center text-secondary mb-5">
        Your trusted partner in creating unforgettable travel experiences.
      </p>

      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h5 className="fw-bold mb-3">Our Story</h5>
          <p className="text-secondary">
            Founded in 2015, Bookify has grown from a small startup to one of the
            world's leading hotel booking platforms. We connect millions of travelers
            with their perfect accommodations every year.
          </p>
          <p className="text-secondary">
            Our mission is to make travel accessible, affordable, and enjoyable for
            everyone. We believe great experiences begin with great
            accommodations.
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            alt="Team"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="text-center">
        <h5 className="fw-bold mb-3">Meet Our Team</h5>
        <div className="row justify-content-center g-4">
          <div className="col-md-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John"
              className="rounded-circle mb-2"
              width="120"
              height="120"
            />
            <h6 className="fw-bold">Mohamed Reda</h6>
            <p className="text-secondary small mb-0">
              Full Stack Developer
            </p>
          </div>
          <div className="col-md-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Sarah"
              className="rounded-circle mb-2"
              width="120"
              height="120"
            />
            <h6 className="fw-bold">Mohamed Reda</h6>
            <p className="text-secondary small mb-0">
              Full Stack Developer
            </p>
          </div>
          <div className="col-md-3">
            <img
              src="https://randomuser.me/api/portraits/men/64.jpg"
              alt="Michael"
              className="rounded-circle mb-2"
              width="120"
              height="120"
            />
            <h6 className="fw-bold">Mohamed Reda</h6>
            <p className="text-secondary small mb-0">
              Full Stack Developer
            </p>
          </div>
          <div className="col-md-3">
            <img
              src="https://randomuser.me/api/portraits/men/64.jpg"
              alt="Michael"
              className="rounded-circle mb-2"
              width="120"
              height="120"
            />
            <h6 className="fw-bold">Mohamed Reda</h6>
            <p className="text-secondary small mb-0">
              Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}