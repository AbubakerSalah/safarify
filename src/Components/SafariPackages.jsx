import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const packages = [
  { image: "/fam-e.jpeg", text: "Luxury Safari" },
  { image: "/l-2.jpeg", text: "Wildlife Adventure" },
  { image: "/jj.jpeg", text: "African Experience" },
  { image: "/frendly-g.jpeg", text: "Desert Safari" },
  { image: "/hotel.jpeg", text: "Desert Safari" },
  { image: "/mix.jpeg", text: "Desert Safari" },
  { image: "/l.png", text: "Desert Safari" },
  { image: "/hppy.e.jpeg", text: "Desert Safari" },
  { image: "/l-2.jpeg", text: "Desert Safari" },
];

export default function SafariPackages() {
  return (
    <section className="scroll-smooth">
      <h1 className="text-6xl pt-6 md:text-7xl lg:text-8xl font-bold pb-8">
        Packages
      </h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={1} // Display 1 card at a time on smaller screens
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2, // Display 2 cards at a time on small screens
          },
          1024: {
            slidesPerView: 3, // Display 3 cards at a time on larger screens
          },
        }}
        className="w-full max-w-7xl mx-auto"
      >
        {packages.map((pkg, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 overflow-hidden shadow-lg bg-white cursor-grab active:cursor-grabbing hover:scale-105 transition-transform duration-300">
              <img
                src={pkg.image}
                alt={`${pkg.text} Safari Package`}
                className="w-full h-[550px] object-cover"
              />
              <p className="p-4 text-center font-semibold text-lg">
                {pkg.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
