import { useEffect } from 'react';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CardReview from './CardReview.jsx';

const reviews = [
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, placeat debitis? Unde temporibus cum reiciendis. Quisquam incidunt saepe inventore ex.",
    name: "Jhon Wick Doe",
    location: "Oaxaca, México",
    rating: "4,5",
    image: "https://images.pexels.com/photos/34132715/pexels-photo-34132715.jpeg",
  },
  {
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.",
    name: "Maria González",
    location: "CDMX, México",
    rating: "4,8",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    name: "Carlos Ruiz",
    location: "Cancún, México",
    rating: "4,7",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
];

export default function ReviewSwiperIsland() {
  useEffect(() => {
    new Swiper(".review-swiper", {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 16,
    });
  }, []);

  return (
    <div className="swiper review-swiper w-full h-auto pb-8 p-3">
      <div className="swiper-wrapper">
        {reviews.map((review, index) => (
          <div key={index} className="swiper-slide p-3">
            <CardReview image={review.image} name={review.name} text={review.text} location={review.location} rating={review.rating} />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}