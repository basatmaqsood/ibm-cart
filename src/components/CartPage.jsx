import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseItem,
  decreaseItem,
  removeItem,
  clearCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const redirect = useNavigate();

  function handleCheckout() {
    alert("Checkout Successful");
    dispatch(clearCart());
    redirect("/");
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(increaseItem(item.id))}
                className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
              >
                +
              </button>
              <span className="text-lg font-semibold">{item.quantity}</span>{" "}
              {/* Display product quantity */}
              <button
                onClick={() => dispatch(decreaseItem(item.id))}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded"
              >
                -
              </button>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-2xl font-bold">Total Price: ${totalPrice}</h2>
        <div className="flex gap-4">
          <button
            onClick={handleCheckout}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Checkout
          </button>
          <a
            href="/products"
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;