import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Trips from "./Pages/Trips";
import AboutUs from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trips" element={<Trips />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
