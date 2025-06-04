import React from "react";
import icons from "../../utils/icon";

const TopHeader = () => {
  const { FaXTwitter, FaInstagram, FaFacebookF } = icons;

  return (
    <div className="bg-[#111111] text-white">
      <div className="max-w-[1290px] mx-auto h-[25px] py-4 flex items-center justify-between">
        <div className="flex justify-center items-center gap-4">
          <FaInstagram className="opacity-70 hover:opacity-100 cursor-pointer transition duration-300" />
          <FaXTwitter className="opacity-70 hover:opacity-100 cursor-pointer transition duration-300" />
          <FaFacebookF className="opacity-70 hover:opacity-100 cursor-pointer transition duration-300" />
        </div>
        <h3>Chào mừng bạn đến với shop thời trang của chúng tôi</h3>
        <div></div>
      </div>
    </div>
  );
};

export default TopHeader;
