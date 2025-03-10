import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SafariPackages from "../Components/SafariPackages";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="max-w-[1200px] m-auto scroll-smooth">
      <div className="flex justify-start items-center relative ">
        <img
          src="/t.png"
          alt="Safari"
          className="flex justify-center w-full h-auto"
        />

        <div className="absolute text-[#c9bfa4] text-4xl md:text-6xl lg:text-8xl font-bold p-6 font-poppins">
          <h2 className="shadow-sm">
            Explore <br /> the Wild life
          </h2>

          <p className="mt-4 text-[#fff] text-lg md:text-xl lg:text-2xl max-w-2xl font-sans">
            Step into the wild and experience <br /> nature's beauty like never
            before.
          </p>
        </div>
        <div className="absolute p-6 bottom-0 lg:mb-32">
          <Link to="/portfolio">
            <button className="bg-black text-white px-16 md:px-20 py-4 flex items-center gap-2 group transition-all duration-300">
              See Our Trips
              <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-start items-center max-w-[1200px] m-auto">
        <div className="flex lg:justify-center md:gap-32">
          <div className="absolute hidden md:flex item-start text-gray-200 md:text-[80px] lg:text-[200px] m-3 font-bold">
            Welcome
          </div>
          <div className="md:mt-24 lg:mt-52 p-6 ">
            <h3 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold font-poppins">
              Welcome to <br />
              Safarify
            </h3>
            <div className="text-gray-500 text-lg max-w-[800px]">
              <p className="mt-4">
                Safarify is your ultimate gateway to unforgettable safari
                adventures. Whether you're exploring the vast savannas,
                encountering majestic wildlife, or immersing yourself in the
                beauty of nature, Safarify brings you closer to the wonders of
                the wild.
              </p>
              <p className="mt-4">
                Our platform is designed to help travelers discover the best
                safari destinations, plan seamless trips, and experience the
                thrill of nature like never before. With expert guides, curated
                experiences, and a commitment to sustainable tourism, Safarify
                ensures that every journey is both enriching and responsible.
              </p>
              <p className="mt-4">
                Embark on an adventure of a lifetime with Safarify and create
                memories that will last forever.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex pt-16">
            <img src="/j.jpeg" alt="Safari" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-start items-center relative mt-12">
          <img src="/ee.jpeg" alt="Safari" className="w-full h-auto" />

          <div className="absolute  p-6">
            <h4 className="text-[#c9bfa4] text-4xl md:text-6xl lg:text-8xl font-bold ">
              Unforgettable <br /> Moments
            </h4>
            <Link to="/about">
              <button className="bg-black text-white px-16 md:px-20 py-4 mt-4 flex items-center gap-2  group transition-all duration-300">
                About Us
                <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </Link>
          </div>
        </div>
        <section className="p-6">
          < SafariPackages />
        </section>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
