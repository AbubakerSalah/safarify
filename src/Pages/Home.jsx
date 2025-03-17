import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SafariPackages from "../Components/SafariPackages";

export default function Home() {
  return (
    <div className="max-w-[1200px] m-auto scroll-smooth">
      <div className="flex justify-start items-center relative">
        <img src="/t.png" alt="Safari" className="w-full h-auto" />
        <div className="absolute text-4xl md:text-6xl lg:text-8xl p-6 font-poppins text-[#3A2C1A]">
          <h2 className="relative text-[#ffffffd1] text-3xl md:text-7xl lg:text-8xl mt-8 font-semibold drop-shadow-2xl">
            Explore the Wild Life Like Never Before
          </h2>
        </div>

        <div className="absolute p-6 bottom-0 lg:mb-32">
          <Link to="/trips">
            <button className="bg-black text-gray-200  px-12 md:px-20 py-4 flex items-center gap-2 group transition-all duration-300">
              See Our Trips
              <ArrowRight className="w-4 h-5 transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-start items-center max-w-[1200px] m-auto">
        <div className="flex lg:justify-center md:gap-32">
          <div className="absolute hidden md:flex item-start text-[#ffffff8b] md:text-[80px] lg:text-[200px] m-3 font-bold">
            Welcome
          </div>
          <div className="md:mt-24 lg:mt-52 p-6 ">
            <h3 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-poppins">
              Welcome to <br />
              Safarify
            </h3>
            <div className="text-[#3F3F3F] text-lg max-w-[800px]">
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
            <img src="/j.jpeg" alt="Safari" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-start items-center relative mt-12">
          <img
            src="/frendly-g.jpeg"
            alt="Safari"
            className="w-full max-h-[600px] object-cover"
          />
          <div className="absolute p-6 text-start">
            <h4 className="text-[#ffffffd1] text-4xl md:text-6xl lg:text-7xl font-bold">
              Unforgettable <br /> Moments
            </h4>
            <Link to="/about">
              <button className="bg-black text-gray-200   px-16 md:px-20 py-4 mt-4 flex items-center gap-2 group transition-all duration-300">
                About Us
                <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </Link>
          </div>
        </div>
        <section className="p-6">
          <SafariPackages />
        </section>
      </div>
    </div>
  );
}
