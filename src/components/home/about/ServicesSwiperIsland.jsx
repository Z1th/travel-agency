import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    image:
      "https://images.pexels.com/photos/11143688/pexels-photo-11143688.jpeg",
    title: "Jeep Adventure",
    location: "Riviera Maya, México",
  },
  {
    image:
      "https://images.pexels.com/photos/28222344/pexels-photo-28222344.jpeg",
    title: "Xcaret Park",
    location: "Playa del Carmen, México",
  },
  {
    image: "https://images.pexels.com/photos/2868230/pexels-photo-2868230.jpeg",
    title: "Tour en Helicóptero",
    location: "Cancún, México",
  },
  {
    image: "https://images.pexels.com/photos/1316897/pexels-photo-1316897.jpeg",
    title: "Isla Mujeres Experience",
    location: "Isla Mujeres, México",
  },
  {
    image: "https://images.pexels.com/photos/3257786/pexels-photo-3257786.jpeg",
    title: "Tour Cenotes",
    location: "Yucatán, México",
  },
];

export default function ServicesSwiperIsland() {
  useEffect(() => {

    new Swiper(".services-swiper", {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="flex w-full md:w-1/2 lg:w-1/3">
      <div className="swiper services-swiper overflow-hidden">
        <div className="swiper-wrapper">
          {services.map((service, index) => (
            <div key={index} className="swiper-slide w-80">
              <div className="flex relative w-full h-full">
                <a href="#" className="w-full">
                  <img
                    src={service.image}
                    alt="Destination"
                    className="w-full h-full object-cover rounded-xl opacity-100 transition-opacity hover:opacity-80"
                  />
                </a>
                <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-full flex flex-row gap-x-1">
                  <div className="flex flex-col">
                    <p className="text-white font-semibold text-md">
                      {service.title}
                    </p>
                    <p className="text-gray-300 font-semibold text-sm">
                      {service.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}
