import React from "react";
import slider from "@assets/slider_1.webp";
const Home = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="bg-[#d0e7ff] w-full h-full"></div>
        <img src={slider} alt="slider" />
      </div>
    </div>
  );
};

export default Home;
