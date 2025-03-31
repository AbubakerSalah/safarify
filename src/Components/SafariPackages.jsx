import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Star } from "lucide-react";

const packages = [
  {
    image: "/trip1.jpeg",
    title: "Savanna Adventure",
    price: "$2500",
    duration: "7 Days",
    rating: 4.8,
  },
  {
    image: "/trip2.jpeg",
    title: "Jungle Escape",
    price: "$2000",
    duration: "5 Days",
    rating: 4.7,
  },
  {
    image: "/trip3.jpeg",
    title: "Desert Exploration",
    price: "$1800",
    duration: "4 Days",
    rating: 4.6,
  },
  {
    image: "/trip4.jpeg",
    title: "Luxury Safari",
    price: "$2900",
    duration: "7 Days",
    rating: 4.9,
  },
  {
    image: "/trip5.jpeg",
    title: "Sunset Retreat",
    price: "$1500",
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

export default function SafariPackages() {
  return (
    <section className="scroll-smooth">
      <h1 className="text-4xl pt-6 md:text-6xl lg:text-7xl font-bold pb-8">
        Packages
      </h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full max-w-7xl mx-auto"
      >
        {packages.map((pkg, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 overflow-hidden shadow-xl bg-[#f8f0de] cursor-grab active:cursor-grabbing hover:scale-105 transition-transform duration-300 rounded-lg">
              <img
                src={pkg.image}
                alt={`${pkg.text} Safari Package`}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="font-bold text-xl mb-2">{pkg.title}</h2>
                <p className="text-gray-600">{pkg.duration}</p>
                <p className="text-lg font-semibold mt-2">{pkg.price}</p>
                <div className="flex justify-center mt-2 text-yellow-500">
                  {[...Array(Math.floor(pkg.rating))].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
