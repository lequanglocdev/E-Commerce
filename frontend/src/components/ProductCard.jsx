/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { fixMoney } from "../utils/helper";
const ProductCard = ({ productData }) => {
  return (
    <div className="w-1/3 flex-auto px-[-10px]">
      <div className=" border flex w-full p-5">
        <img
          src={
            productData && productData.images && productData.images.length > 0
              ? productData.images[0]
              : "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
          }
          alt="productCard"
          className="w-[90px] object-contain p-4"
        />
        <div className="flex flex-col mt-[15px] items-start gap-1 w-full text-xs">
          <span className="line-clamp-1 text-sm lowercase ">{productData?.title}</span>
          <span>{`${fixMoney(productData?.price)} VNĐ`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
