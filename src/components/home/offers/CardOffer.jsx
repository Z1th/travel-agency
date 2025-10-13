export default function CardOffer({
  image,
  category,
  title,
  description,
  buttonText,
}) {
  return (
    <div className="w-full h-48 sm:h-52 lg:h-56 relative bg-gray-300 rounded-xl">
    <img
      src={image}
      alt="Travel destination"
      className="absolute inset-0 w-full h-full object-cover rounded-xl"
    />
    <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
    <div className="relative z-10 flex flex-col items-left justify-center h-full text-left text-white p-6 gap-y-1">
      <p className="text-sm">{category}</p>
      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
        {title}
      </p>
      <p className="text-sm sm:text-base lg:text-lg">{description}</p>
      <a
        href=""
        className="max-w-max mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 cursor-pointer"
      >
        {buttonText}
      </a>
    </div>
    </div>
  );
}
