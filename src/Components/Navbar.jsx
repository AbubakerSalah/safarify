import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  {
  }

  return (
    <div className="flex justify-between  lg:justify-start lg:gap-16 items-center p-8 lg:p-16  text-black  relative">
      <h1 className="text-4xl lg:text-5xl font-poppins font-bold">safarify</h1>

      {/* Desktop */}
      <nav className="hidden lg:flex space-x-16">
        <ul className="flex space-x-10 mt-4">
          <li>
            <Link to="/" className="relative group text-xl">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="relative group text-xl">
              Portfolio
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="relative group text-xl">
              About us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="relative group text-xl">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-5xl">
          {menuOpen ? "X" : "☰"}
        </button>

        {/* Mobile*/}
        {menuOpen && (
          <div className="absolute top-18 right-0 bg-white text-bbg-black w-52 h-80 p-4 z-10 transition-transform duration-300">
            <ul>
              <li className="mb-4 text-xl">
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="mb-4 text-xl">
                <Link to="/portfolio" onClick={closeMenu}>
                  Portfolio
                </Link>
              </li>
              <li className="mb-4 text-xl">
                <Link to="/about" onClick={closeMenu}>
                  About Us
                </Link>
              </li>
              <li className="text-xl">
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
