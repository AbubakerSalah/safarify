import React from "react";
import Footer from "../Components/Footer";

export default function AboutUs() {
  return (
    <div className="max-w-[1200px] m-auto p-6 scroll-smooth">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">About Us</h1>
        <p className="text-[#3F3F3F] text-lg md:text-xl lg:text-2xl mt-4 max-w-2xl mx-auto">
          Discover the story behind Safarify and our mission to bring you the
          most unforgettable safari adventures.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 mt-12">
        <img
          src="/jj.jpeg"
          alt="Safari Experience"
          className="w-full lg:w-1/2 h-[400px] object-cover rounded-lg shadow-lg"
        />
        <div className="text-[#3F3F3F] text-lg max-w-2xl">
          <p className="mt-4">
            At Safarify, we believe in the magic of exploration. Our mission is
            to connect travelers with nature, offering breathtaking safaris in
            the heart of Africa. With expert guides and curated experiences,
            every journey with us is one to remember.
          </p>
          <p className="mt-4">
            Whether you're seeking thrilling wildlife encounters, serene desert
            landscapes, or luxurious safari lodges, Safarify ensures that every
            trip is safe, exciting, and unforgettable.
          </p>
          <p className="mt-4">
            Join us as we explore the wonders of the wild, one adventure at a
            time.
          </p>
        </div>
      </div>

      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
}
