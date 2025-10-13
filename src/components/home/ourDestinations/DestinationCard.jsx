export default function DestinationCard({ image, title, location }) {
  return (
    <div className="flex relative w-full h-96">
      <a href="#">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md opacity-100 transition-opacity hover:opacity-80"
        />
      </a>
      <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-full flex flex-row gap-x-1">
        <div className="flex flex-col">
          <p className="text-white font-semibold text-md">{title}</p>
          <p className="text-gray-300 font-semibold text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
}