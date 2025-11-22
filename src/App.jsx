import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Offers from "./components/Offers";
import Footer from "./components/Footer";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Rooms />
              <Offers />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* تسجيل الدخول */}
        <Route
          path="/signin"
          element={
            <>
              <Navbar />
              <SignIn />
              <Footer />
            </>
          }
        />

        {/* تسجيل جديد */}
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <SignUp />
              <Footer />
            </>
          }
        />

        {/* نسيان كلمة المرور */}
        <Route
          path="/forgot-password"
          element={
            <>
              <Navbar />
              <ForgotPassword />
              <Footer />
            </>
          }
        />

        {/* صفحة الاتصال */}
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* صفحة من نحن */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        {/* لوحة تحكم الأدمن */}
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;