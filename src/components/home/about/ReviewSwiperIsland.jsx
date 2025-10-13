import { useEffect } from 'react';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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

function truncateText(text, maxLength = 120) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

export default function ReviewSwiperIsland() {
  useEffect(() => {
    new Swiper(".review-swiper", {
      modules: [Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: { delay: 4000 },
      pagination: { el: ".swiper-pagination", clickable: true },
    });
  }, []);

  return (
    <div className="swiper review-swiper w-full h-auto pb-8">
      <div className="swiper-wrapper">
        {reviews.map((review, index) => (
          <div key={index} className="swiper-slide px-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-3">
                    {truncateText(review.text)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-semibold">{review.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}