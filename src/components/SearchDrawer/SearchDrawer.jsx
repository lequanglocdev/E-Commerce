import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IoSearchOutline } from "react-icons/io5";

// Dữ liệu mock
const mockProducts = [
  {
    id: 1,
    name: "Trendy Toddler Denim Jacket",
    price: "1.00",
    image: "https://via.placeholder.com/50x60?text=Img1",
  },
  {
    id: 2,
    name: "Trendy Denim Jacket with Patches",
    price: "1.00",
    image: "https://via.placeholder.com/50x60?text=Img2",
  },
  {
    id: 3,
    name: "Elegant Lace Cocktail Dress",
    price: "1.00",
    image: "https://via.placeholder.com/50x60?text=Img3",
  },
  {
    id: 4,
    name: "Cozy Knit Oversized Sweater",
    price: "1.00",
    image: "https://via.placeholder.com/50x60?text=Img4",
  },
];

const SearchDrawer = ({ open, onClose }) => {
  const [query, setQuery] = useState("");

  const filtered = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Drawer anchor="top" open={open} onClose={onClose}>
      <div className="p-6 w-full max-w-[800px] mx-auto">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
          <input
            type="text"
            className="flex-1 outline-none"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <IoSearchOutline size={20} />
        </div>

        {query && (
          <div className="mt-4">
            <p className="text-xs font-bold text-gray-500 mb-2">PRODUCTS</p>
            <div>
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center py-3 hover:bg-gray-100 cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[50px] h-[60px] object-cover rounded mr-3"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">${item.price} USD</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default SearchDrawer;
