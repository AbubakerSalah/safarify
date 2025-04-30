import React, { useState } from "react";
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
    <div className="flex justify-between  lg:justify-between lg:gap-16 items-center p-8 lg:p-16 relative">
      <Link to="/" className="relative group">
        <h1 className="text-4xl lg:text-5xl font-poppins font-bold">
          safarify
        </h1>
      </Link>

      {/* Desktop */}
      <nav className="hidden lg:flex space-x-16">
        <ul className="flex space-x-10 mt-4 font-poppins">
          <li>
            <Link to="/" className="relative group ">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F3F3F] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/trips" className="relative group ">
              Trips
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F3F3F] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="relative group ">
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F3F3F] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="relative group ">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F3F3F] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {menuOpen ? "X" : "☰"}
        </button>

        {/* Mobile*/}
        {menuOpen && (
          <div className="absolute top-24 right-0 bg-[#e9dcc9] shadow-md w-full  p-4 z-10 transition-transform duration-300">
            <ul className="pt-6 flex flex-col items-center gap-4 font-poppins">
              <Link to="" onClick={closeMenu}>
                <li className="mb-4  hover:text-[#6d645a]">Home</li>
              </Link>
              <Link to="trips" onClick={closeMenu}>
                <li className="mb-4  hover:text-[#6d645a]">Trips</li>
              </Link>
              <Link to="about" onClick={closeMenu}>
                <li className="mb-4  hover:text-[#6d645a]">About</li>
              </Link>
              <Link to="contact" onClick={closeMenu}>
                <li className=" hover:text-[#6d645a]">Contact</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
