import { Icon } from "@iconify/react";

function truncateText(text, maxLength = 120) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

export default function CardReview({ image, name, text, location, rating }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-start gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-gray-600 text-sm mb-3">{truncateText(text)}</p>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
            <div className="flex items-center gap-1">
              
              <Icon icon="material-symbols:kid-star" className="text-yellow-400" width="24" height="24" />
              <span className="font-semibold">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
