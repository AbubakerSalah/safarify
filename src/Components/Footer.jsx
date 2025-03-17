import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-8 lg:p-16  relative w-full">
      {/* Logo - Always left on md and up */}
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <h1 className="text-4xl lg:text-5xl font-poppins font-bold">
          safarify
        </h1>
      </div>

      {/* Nav and Copyright - Always Centered */}
      <div className="flex flex-col items-center w-full">
        <nav>
          <ul className="flex flex-col md:flex-row items-center gap-8 mt-4 font-poppins">
            <li>
              <Link to="/" className="relative group text-xl">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F3F3F] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/trips" className="relative group text-xl">
                Trips
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F3F3F] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="relative group text-xl">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F3F3F] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="relative group text-xl">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3F3F3F] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Safarify. All rights reserved.
        </div>
      </div>
    </div>
  );
}
