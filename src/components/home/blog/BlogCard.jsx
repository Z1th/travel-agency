export default function BlogCard({
  image,
  title,
  description,
  authorImage,
  authorName,
  date,
  readTime
}) {
  return (
    <>
      <div className="w-full flex flex-col gap-y-4">
        <a href="#">
          <img
            src={image}
            alt="Photo Blog"
            className="w-full h-48 sm:h-52 lg:h-60 object-cover rounded-t-lg opacity-100 transition-opacity hover:opacity-80"
          />
        </a>
        <a href="#">
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold">{title}</p>
        </a>
        <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-6">
          {description}
        </p>
        <div className="flex flex-row gap-x-2 items-center">
          <img
            src={authorImage}
            alt="Profile Photo"
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
          />
          <p className="text-xs sm:text-sm text-gray-800">{authorName}</p>
          <span className="text-gray-400">•</span>
          <p className="text-xs sm:text-sm text-gray-800">{date}</p>
          <span className="text-gray-400">•</span>
          <p className="text-xs sm:text-sm text-gray-800">{readTime}</p>
        </div>
      </div>
    </>
  );
}
