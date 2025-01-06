// src/components/ProductListing.js
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const products = [
  {
    id: 1,
    name: "Fern",
    price: 10,
    category: "Indoor",
    thumbnail: "/fern.jpg",
  },
  {
    id: 2,
    name: "Succulent",
    price: 8,
    category: "Cactus",
    thumbnail: "/succulent.jpg",
  },
  {
    id: 3,
    name: "Fiddle-leaf Fig",
    price: 15,
    category: "Cactus",
    thumbnail: "/fiddle.webp",
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: 20,
    category: "Cactus",
    thumbnail: "/rubbertree.jpg",
  },
  {
    id: 5,
    name: "Pothos",
    price: 10,
    category: "Cactus",
    thumbnail: "/pothos.webp",
  },
  {
    id: 6,
    name: "Philodendron",
    price: 12,
    category: "Cactus",
    thumbnail: "/philo.webp",
  },
];

const ProductListing = () => {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-md p-4 flex flex-col items-center"
        >
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-32 h-32 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">${product.price}</p>
          <button
            onClick={() => dispatch(addItem(product))}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
