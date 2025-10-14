import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DestinationCard from "./DestinationCard.jsx";

const destinations = [
  {
    image: "https://images.pexels.com/photos/1569012/pexels-photo-1569012.jpeg",
    title: "Chicago",
    location: "Chicago, Estados Unidos",
  },
  {
    image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg",
    title: "New York",
    location: "New York, Estados Unidos",
  },
  {
    image: "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg",
    title: "Paris",
    location: "Paris, Francia",
  },
  {
    image: "https://images.pexels.com/photos/2187456/pexels-photo-2187456.jpeg",
    title: "Tokyo",
    location: "Tokyo, Japón",
  },
  {
    image: "https://images.pexels.com/photos/604661/pexels-photo-604661.jpeg",
    title: "CDMX",
    location: "CDMX, México",
  },
];

export default function DestinationSwiperIsland() {

  useEffect(() => {
    new Swiper(".destination-swiper", {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: 24,
      centeredSlides: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }, []);

  return (
    <div className="swiper destination-swiper overflow-hidden">
      <div className="swiper-wrapper">
        {destinations.map((destination, index) => (
          <div key={index} className="swiper-slide w-80">
            <DestinationCard
              image={destination.image}
              title={destination.title}
              location={destination.location}
            />
          </div>
        ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}
