import React from "react";
import Footer from "../Components/Footer";

//const center = { lat: 59.3293, lng: 18.0686 }; // Stockholm coordinates
const center = { lat: 0.3476, lng: 32.5822 };

export default function Contact() {
  return (
    <div className="max-w-[1000px] m-auto scroll-smooth p-6">
      {/* Contact Information */}
      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold text-[#c9bfa4] mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600">
          We’d love to hear from you! Reach out to us through the details below.
        </p>
        <div className="mt-6 space-y-3">
          <p className="text-lg font-semibold">
            📍 Address: storgatan 0, 111 00 Stockholm, Sweden
          </p>
          <p className="text-lg font-semibold">
            📧 Email: contact@safarify.com
          </p>
          <p className="text-lg font-semibold">📞 Phone: +46 70 123 45 67</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="p-6 text-center mt-16">
        <h3 className="text-3xl font-bold text-[#c9bfa4] mb-4">
          Send Us a Message
        </h3>
        <form className="max-w-4xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border-b border-black bg-transparent focus:outline-none text-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border-b border-black bg-transparent focus:outline-none text-lg"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border-b border-black bg-transparent focus:outline-none text-lg"
          ></textarea>
          <button className="bg-black text-white px-8 py-3 w-full mt-4 hover:bg-gray-800 transition-all text-lg">
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
}
