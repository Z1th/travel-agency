import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AccommodationCard from "./AccommodationCard.jsx";

const activities = [
  {
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    title: "Cancún",
    countActivities: "245",
  },
  {
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    title: "Ciudad de México",
    countActivities: "189",
  },
  {
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",
    title: "Oaxaca",
    countActivities: "87",
  },
  {
    image: "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg",
    title: "Riviera Maya",
    countActivities: "156",
  },
  {
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
    title: "Puerto Vallarta",
    countActivities: "134",
  },
  {
    image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg",
    title: "Guadalajara",
    countActivities: "98",
  },
  {
    image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg",
    title: "Playa del Carmen",
    countActivities: "112",
  },
];

export default function AccommodationSwiperIsland() {
  useEffect(() => {
    new Swiper(".activities-swiper", {
      modules: [Navigation],
      slidesPerView: 2,
      spaceBetween: 24,
      allowTouchMove: true,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      },
    });
  }, []);

  return (
    <div className="w-full lg:w-4/6">
      <div className="swiper activities-swiper">
        <div className="swiper-wrapper">
          {activities.map((activity, index) => (
            <div key={index} className="swiper-slide">
              <AccommodationCard
                image={activity.image}
                title={activity.title}
                countActivities={activity.countActivities}
              />
            </div>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}
