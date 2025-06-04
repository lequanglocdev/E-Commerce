import React, { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import image from "../../assets/pd1.webp";

const CartDrawer = ({ open, onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Statement Geometric Print Scarf",
      image: image,
      color: "Black",
      size: "Small",
      price: "1.00",
      quantity: 1,
    },
    {
      id: 2,
      name: "Classic Striped Button-Up Shirt",
      image: image,
      color: "Red",
      material: "Cotton",
      price: "1.00",
      quantity: 1,
    },
    {
      id: 3,
      name: "Classic Striped Button-Up Shirt",
      image: image,
      color: "Red",
      material: "Cotton",
      price: "1.00",
      quantity: 1,
    },
  ]);
  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const subtotal = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className="w-[400px] bg-white shadow-lg p-4 flex flex-col h-screen overflow-y-auto">
        <p className="text-sm text-green-600 mb-3">✓ Item added to your cart</p>
        {cartItems.length === 0 ? (
          <p className="w-full h-screen font-bold flex justify-around items-center text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[120px] h-[161px] object-center rounded"
                />
                <div className="ml-4 flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <div className="text-sm text-gray-600 mt-1">
                    {item.color && <span>Color: {item.color}</span>}
                    {item.size && <span>, Size: {item.size}</span>}
                    {item.material && <span>, Material: {item.material}</span>}
                  </div>
                  <p className="text-sm mt-1">${item.price}</p>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="p-1  rounded-full text-sm">
                      <IoMdRemove />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="p-1  rounded-full text-sm">
                      <IoMdAdd />
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="ml-3 text-sm text-gray-500 underline">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-between items-center">
              <p className="font-semibold text-xl">Subtotal</p>
              <p className="text-md">${subtotal.toFixed(2)} USD</p>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-3">
              <button className="flex-1 border border-black rounded-full py-2 font-medium">
                View Cart
              </button>
              <button className="flex-1 bg-black text-white rounded-full py-2 font-medium">
                Check Out
              </button>
            </div>
          </div>
        )}

        {/* <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaRegNoteSticky />
            <span>Note</span>
          </div>
          <div className="flex items-center gap-2">
            <FaShippingFast />
            <span>Shipping</span>
          </div>
        </div> */}

        {/* Subtotal */}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
