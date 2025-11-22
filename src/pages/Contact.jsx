import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully ✅");
  };

  return (
    <div id="contact" className="container py-5">
      <h3 className="fw-bold text-center mb-2">Get in Touch</h3>
      <p className="text-center text-secondary mb-4">
        Have questions? We're here to help you plan the perfect trip
      </p>

      {/* ===== FORM IN CENTER ===== */}
      <div className="d-flex justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="p-4 bg-white rounded-4 shadow-sm text-center">
            <h6 className="fw-bold mb-3">Send us a Message</h6>

            <form onSubmit={handleSubmit}>
              <div className="row g-2">
                
                  <input
                    name="Username"
                    value={form.firstName}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                
                
              </div>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="form-control mt-3"
                placeholder="Email"
              />

             

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-control mt-3"
                rows="4"
                placeholder="Message"
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary mt-3 w-100 fw-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ===== FOLLOW US SECTION ===== */}
          <div className="p-4 bg-white rounded-4 shadow-sm text-center mt-4">
           <h6 className="fw-bold mb-3">Follow Us</h6>

          <div className="d-flex justify-content-center gap-4 fs-2">

              <a href="https://www.facebook.com/login.php" className="text-primary">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="https://x.com/i/flow/login?lang=en-GB/" className="text-info">
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a href="https://www.instagram.com/" className="text-danger">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="https://www.linkedin.com/in/mohamed-reda-shehata-6a04002a3/" className="text-primary">
                <i className="fa-brands fa-linkedin"></i>
              </a>

            </div>

        </div>

        </div>
      </div>
    </div>
  );
}
