// import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="w-main h-[110px] py-[36px] flex justify-between items-center h-[110px] py-[35px]">
      <Link>
        <img src={logo} alt="" className="w-[204px] object-contain" />
      </Link>
      <div className="flex items-center text-[14px] gap-10">
        <div>
          <span className="flex gap-2 items-center">
            <FaPhone className="text-red-600" />
            <span>(+1800)000 9900</span>
          </span>
          <span>Mon-Sat 9:00AM - 8:00PM</span>
        </div>
        <div>
          <span className="flex gap-2 items-center">
            <IoMdMail className="text-red-600" />
            <span>ShopEcommerce@.com</span>
          </span>
          <span>Online Support 24/7</span>
        </div>
        <div className="flex justify-center items-center gap-3 p-2  cursor-pointer">
          <IoBag className="text-red-600 text-3xl" />
          <span> 0 Item</span>
        </div>
        <Link to={`/Login`}>
          <div className="flex justify-center items-center p-2 cursor-pointer">
            <FaRegUserCircle className="text-red-600 text-3xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
