/* eslint-disable react/prop-types */
// import label from "../assets/label.png"
import { fixMoney } from "../utils/helper";
import { SelectOption } from "../components";
import { FaEye } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
const Product = ({ productData }) => {
  const [isShowOption, setIsShowOption] = useState(false);
  return (
    <div className="w-full text-base px-[10px]">
      <div
        className="w-full border p-[14px] flex flex-col items-center"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setIsShowOption(true);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          setIsShowOption(false);
        }}
      >
        <div className="w-full relative ">
          {isShowOption && (
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 animate-slide-top">
              <SelectOption icon={<FaEye />} />
              <SelectOption icon={<IoMdMenu />} />
              <SelectOption icon={<FaRegHeart />} />
            </div>
          )}
          <img
            src={
              productData && productData.images && productData.images.length > 0
                ? productData.images[0]
                : "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
            }
            alt=""
            className="w-[230px] h-[180px] object-cover "
          />
          {/* <img src={label} alt="" className="absolute top-[-42px] right-[43px] h-[116px] object-cover:" /> */}
        </div>
        <div className="flex flex-col mt-[15px] items-start gap-1 w-full">
          <span className="line-clamp-1">{productData?.title}</span>
          <span>{`${fixMoney(productData?.price)} VNĐ`}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
