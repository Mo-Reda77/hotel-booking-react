import React from "react";
import SearchForm from "./SearchForm";

export default function Hero() {
  return (
    <section
      className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        minHeight: "60vh",
        paddingTop: "180px",
        paddingBottom: "120px",
      }}
    >
      {/* ===== عنوان الصفحة ===== */}
      <h1 className="fw-bold display-5 mb-3">Find Your Perfect Stay</h1>
      <p
        className="lead mb-5"
        style={{ maxWidth: "650px", margin: "0 auto", lineHeight: "1.6" }}
      >
        Discover amazing hotels, resorts, and accommodations worldwide with our
        comprehensive booking platform.
      </p>

      {/* ===== صندوق البحث الأبيض ===== */}
      <div
        className="bg-white shadow-lg rounded-4 p-4 mx-auto"
        style={{
          maxWidth: "1100px",
          width: "90%",
        }}
      >
        <SearchForm />
      </div>
    </section>
  );
}