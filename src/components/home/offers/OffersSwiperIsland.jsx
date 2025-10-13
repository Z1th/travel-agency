import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CardOffer from "./CardOffer.jsx";

const offers = [
  {
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    category: "End of year offers",
    title: "Choose quality over quantity",
    description: "Take advantage of the sun's rays and save 15% more",
    buttonText: "Reserve Now",
  },
  {
    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
    category: "Summer Special",
    title: "Mountain Adventures Await",
    description: "Discover breathtaking landscapes with 20% discount",
    buttonText: "Book Now",
  },
  {
    image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg",
    category: "City Break",
    title: "Urban Exploration Package",
    description: "Experience vibrant city life with exclusive deals",
    buttonText: "Explore",
  },
  {
    image: "https://images.pexels.com/photos/2187456/pexels-photo-2187456.jpeg",
    category: "Weekend Getaway",
    title: "Tropical Paradise Escape",
    description: "Relax in paradise with our weekend special offers",
    buttonText: "Get Away",
  },
];

export default function OffersSwiperIsland() {
  useEffect(() => {
    new Swiper(".offers-swiper", {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 24,
      allowTouchMove: true,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);
  return (
    <div className="swiper offers-swiper">
      <div className="swiper-wrapper">
        {offers.map((offer, index) => (
          <div key={index} className="swiper-slide">
            <CardOffer
              image={offer.image}
              category={offer.category}
              title={offer.title}
              description={offer.description}
              buttonText={offer.buttonText}
            />
          </div>
        ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}
