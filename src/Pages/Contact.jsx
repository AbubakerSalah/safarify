import React from "react";

import Footer from "../Components/Footer";

const center = { lat: 0.3476, lng: 32.5822 };

export default function Contact() {
  return (
    <div className="max-w-[1000px] m-auto scroll-smooth">
      <div>
        
      </div>

      {/* Contact Form Section */}
      <div className="p-6 text-center mt-12">
        <h2 className="text-4xl font-bold text-[#c9bfa4] mb-6">
          Connect with Us
        </h2>
        <form className="max-w-4xl mx-auto space-y-6 gap-6">
          {/* Name Input */}
          <div className="sm:col-span-1 md:col-span-1">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border-b border-black bg-transparent focus:outline-none text-lg"
            />
          </div>
          {/* Email Input */}
          <div className="sm:col-span-1 md:col-span-1">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border-b border-black bg-transparent focus:outline-none text-lg"
            />
          </div>
          {/* Message Textarea */}
          <div className="sm:col-span-1 md:col-span-2">
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border-b border-black bg-transparent focus:outline-none text-lg"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="sm:col-span-1 md:col-span-2">
            <button className="bg-black text-white px-8 py-3 w-full mt-4 hover:bg-gray-800 transition-all text-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
