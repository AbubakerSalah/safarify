import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <div className="max-w-[1200px] m-auto scroll-smooth">

      <div className="w-full h-[400px] mt-12">
        <MapContainer
          center={[0.3476, 32.5822]} // Change to your location
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[0.3476, 32.5822]}>
            <Popup>
              Safarify Location <br /> Explore the Wild!
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Contact Form Section */}
<div className="p-6 text-center mt-12">
  <h2 className="text-4xl font-bold text-[#c9bfa4] mb-6">Connect with Us</h2>
  <form className="max-w-4xl mx-auto space-y-6 sm:grid sm:grid-cols-1 md:grid-cols-2 gap-6">
    {/* Name Input */}
    <div className="sm:col-span-1 md:col-span-1">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-[#c9bfa4] text-lg"
      />
    </div>
    {/* Email Input */}
    <div className="sm:col-span-1 md:col-span-1">
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-[#c9bfa4] text-lg"
      />
    </div>
    {/* Message Textarea */}
    <div className="sm:col-span-1 md:col-span-2">
      <textarea
        placeholder="Message"
        rows="4"
        className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-[#c9bfa4] text-lg"
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
