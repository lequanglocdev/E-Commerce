import { FaStar } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Countdown from "./Countdown";
import { useState } from "react";
const DealDayly = () => {
  const[hour,setHour] = useState(0)
  const[minute,setMinute] = useState(0)
  const[second,setSecond] = useState(0)
  return (
    <div>
      <div className="flex justify-center gap-10 items-center">
        <span className="">
          <FaStar color="#e74c3c" />
        </span>
        <span className="font-bold">DAILY DEALS</span>
      </div>
      <div>
        <img
          src="https://digital-world-2.myshopify.com/cdn/shop/products/Untitled-189_400x.jpg?v=1491404918"
          alt=""
          className="w-[243px] h-[243px] object-contain"
        />
        <span className="line-clamp-1 text-center hover:text-main cursor-pointer">
          Motorola Moto 360 (2nd gen)
        </span>
        <span className=" line-clamp-1 text-center">8.893.242,47 VND</span>
      </div>
      <div className="px-4 mt-8">
          <div className="flex justify-center gap-2 items-center mb-4">
            <Countdown unit={"Hours"} number={hour}/>
            <Countdown unit={"Minute"} number={minute}/>
            <Countdown unit={"Second"} second={second}/>
          </div>
          <button
            type="button"
            className="flex gap-3 items-center justify-center w-full bg-main hover:bg-gray-800 text-white font-medium py-2"
          >
            <IoMenu/>
            <span className="uppercase">Option</span>
          </button>
      </div>
    </div>
  );
};

export default DealDayly;
