import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularDestinations from "./components/PopularDestinations";
import FeaturedHotels from "./components/FeaturedHotels";
import ExclusiveDeals from "./components/ExclusiveDeals";
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
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <PopularDestinations />
              <FeaturedHotels />
              <ExclusiveDeals />
              <About />        
              <Contact /> 
              <Footer />

             
              
             
            </>
          }
        />
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

        
        <Route
          path="/admin"
          element={
            <>
              <Navbar />
              <AdminDashboard />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;