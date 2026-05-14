import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Booking from "./components/Booking";
import About from "./components/About";
import Atelier from "./components/Atelier";
import Journal from "./components/Journal";
import Cinema from "./components/Cinema";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/atelier" element={<Atelier />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/cinema" element={<Cinema />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
