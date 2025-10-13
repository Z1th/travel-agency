import { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BlogCard from "./BlogCard.jsx";

const blogs = [
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*bvAIEmkCxNMIoUxeqDj1SA.jpeg",
    title: "How to make the most of Dev Day 2025",
    description:
      "A guide to help plan your day, where to find sessions, and what to do if you have questions",
    authorImage:
      "https://miro.medium.com/v2/resize:fill:88:88/1*qoOGwTopO6k1cdgVpXBRjQ.jpeg",
    authorName: "John Doe",
    date: "Sep 16",
    readTime: "5 min Read",
  },
  {
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    title: "Best Travel Destinations for 2025",
    description:
      "Discover amazing places around the world that should be on your travel bucket list this year",
    authorImage:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    authorName: "Maria Garcia",
    date: "Oct 2",
    readTime: "8 min Read",
  },
  {
    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
    title: "Mountain Adventures: A Complete Guide",
    description:
      "Everything you need to know about planning your next mountain expedition and staying safe",
    authorImage:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    authorName: "Carlos Rodriguez",
    date: "Nov 12",
    readTime: "6 min Read",
  },
  {
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    title: "Beach Paradise: Hidden Gems",
    description:
      "Explore secluded beaches and tropical paradises that most travelers never discover",
    authorImage:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    authorName: "Ana Martinez",
    date: "Dec 5",
    readTime: "4 min Read",
  },
];

export default function BlogSwiperIsland() {
  useEffect(() => {
    new Swiper(".blog-swiper", {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 24,
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
        1280: {
          slidesPerView: 3,
        },
        1536: {
          slidesPerView: 4,
        },
      },
    });
  }, []);

  return (
    <div class="swiper blog-swiper overflow-hidden">
      <div class="swiper-wrapper">
        {blogs.map((blog, index) => (
          <div key={index} class="swiper-slide">
            <BlogCard
              image={blog.image}
              title={blog.title}
              description={blog.description}
              authorImage={blog.authorImage}
              authorName={blog.authorName}
              date={blog.date}
              readTime={blog.readTime}
            />
          </div>
        ))}
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  );
}
