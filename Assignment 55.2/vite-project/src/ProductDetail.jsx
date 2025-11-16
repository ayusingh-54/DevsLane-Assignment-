import React, { useState } from "react";

export default function ProductDetail({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <button
            onClick={onClose}
            className="float-right text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
          <div className="clear-both"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <img
                src={product.img}
                alt={product.title}
                className="max-w-full max-h-96 object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h1>

              <div className="text-4xl font-bold text-gray-900 mb-4">
                {product.price}
                {product.oldPrice && (
                  <span className="text-xl text-gray-500 line-through ml-3">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description ||
                  "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame."}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md text-center"
                  min="1"
                />
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200">
                ADD TO CART
              </button>

              {/* Product Category */}
              <div className="mt-6 text-sm text-gray-500">
                Category:{" "}
                <span className="text-gray-700">{product.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
