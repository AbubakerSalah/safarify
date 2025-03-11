import { Star } from "lucide-react";

const trips = [
  {
    image: "/trip1.jpeg",
    title: "Savanna Adventure",
    price: "$2200",
    duration: "7 Days",
    rating: 4.8,
  },
  {
    image: "/trip2.jpeg",
    title: "Jungle Escape",
    price: "$1800",
    duration: "5 Days",
    rating: 4.7,
  },
  {
    image: "/trip3.jpeg",
    title: "Desert Exploration",
    price: "$1500",
    duration: "4 Days",
    rating: 4.6,
  },
  {
    image: "/trip4.jpeg",
    title: "Luxury Safari",
    price: "$2500",
    duration: "7 Days",
    rating: 4.9,
  },
  {
    image: "/trip5.jpeg",
    title: "Sunset Retreat",
    price: "$1200",
    duration: "3 Days",
    rating: 4.5,
  },
  {
    image: "/trip6.jpeg",
    title: "Mountain Expedition",
    price: "$2700",
    duration: "8 Days",
    rating: 5.0,
  },
];

export default function Trips() {
  return (
    <section className="scroll-smooth text-center max-w-6xl mx-auto p-6">
      <h1 className="text-4xl md:text-6xl text-[#c9bfa4] font-bold pb-8">Our Trips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="shadow-lg bg-white hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden"
          >
            <img
              src={trip.image}
              alt={`${trip.title} Trip`}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="font-bold text-xl mb-2">{trip.title}</h2>
              <p className="text-gray-600">{trip.duration}</p>
              <p className="text-lg font-semibold mt-2">{trip.price}</p>
              <div className="flex justify-center mt-2 text-yellow-500">
                {[...Array(Math.floor(trip.rating))].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
