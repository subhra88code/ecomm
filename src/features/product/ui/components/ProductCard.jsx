import React from "react";
import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden
                    shadow-sm hover:shadow-lg transition-all duration-300
                    hover:-translate-y-1">

      {/* Product Image */}
      <div className="h-52 bg-gray-50 flex items-center justify-center p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain
                     transition-transform duration-300
                     hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="text-sm text-blue-600 font-medium capitalize mb-1">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">
            {product.rating}
          </span>
        </div>

        {/* Price + Stock */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-gray-900">
            ${product.price}
          </p>

          <span className="text-sm text-green-600 font-medium">
            {product.availabilityStatus}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          className="w-full mt-4 flex items-center justify-center gap-2
                     bg-blue-600 text-white font-medium
                     py-2.5 rounded-xl
                     hover:bg-blue-700
                     active:scale-95
                     transition-all duration-200"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;