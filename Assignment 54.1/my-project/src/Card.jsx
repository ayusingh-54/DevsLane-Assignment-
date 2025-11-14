import React from "react";

function Card({ category, name, price, originalPrice, image, rating, sale }) {
  // Star rating render करने के लिए function
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "text-orange-400" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative group">
      {/* Sale Badge */}
      {sale && (
        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg">
          Sale!
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Category */}
        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
          {category}
        </p>

        {/* Product Title */}
        <h2 className="text-gray-800 font-medium text-base mb-2 h-12 line-clamp-2">
          {name}
        </h2>

        {/* Star Rating */}
        <div className="flex gap-0.5 mb-3 text-lg">{renderStars(rating)}</div>

        {/* Price */}
        <div className="flex items-center gap-2">
          {originalPrice && (
            <p className="text-gray-400 line-through text-sm">
              {originalPrice}
            </p>
          )}
          <p className="text-gray-900 font-bold text-lg">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
