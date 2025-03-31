import React from "react";

//const center = { lat: 59.3293, lng: 18.0686 }; // Stockholm coordinates
const center = { lat: 0.3476, lng: 32.5822 };

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center  scroll-smooth p-6">
      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold  mb-6">Contact us</h2>
        <p className="text-lg">
          We'd love to hear from you! Reach out to us through the details below.
        </p>
        <div className="mt-6 space-y-3">
          <p className="text-lg font-semibold">
            Address: storgatan 0, 111 00 Stockholm, Sweden
          </p>
          <p className="text-lg font-semibold">Email: contact@safarify.com</p>
          <p className="text-lg font-semibold"> Phone: +46 70 123 45 67</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-6 mt-16 max-w-96">
        <h3 className="text-2xl font-bold mb-4">Send us a Message</h3>
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
    </div>
  );
}
