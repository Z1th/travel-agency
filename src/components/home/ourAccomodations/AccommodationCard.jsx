export default function AccommodationCard({ image, title, countActivities }) {
  return (
    <div className="bg-white rounded-xl">
      <div className="relative h-36 sm:h-64 lg:h-46">
        <a href="#">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-md opacity-100 transition-opacity hover:opacity-80"
          />
        </a>
      </div>
      <div className="p-4">
        <a href="#">
          <h3 className="text-md md:text-xl font-semibold">{title}</h3>
        </a>
        <p className="text-gray-600 text-sm">{countActivities} Accomodations</p>
      </div>
    </div>
  );
}
