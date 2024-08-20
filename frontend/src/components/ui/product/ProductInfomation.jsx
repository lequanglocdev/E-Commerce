import { useState } from "react";
import { productInfomation } from "../../../utils/constant";
const ProductInfomation = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <div className="flex items-center gap-2">
        {productInfomation.map((el) => (
          <>
            <span
              className={`py-2 px-4 cursor-pointer ${
                activeTab === +el.id
                  ? "bg-red-300 border border-b-0"
                  : "bg-gray-300"
              }`}
              key={el.id}
              onClick={() => setActiveTab(el.id)}
            >
              {el?.name}
            </span>
          </>
        ))}
      </div>
      <div className="w-full border bg-white-400 mt-2">
        {productInfomation.some((el) => el.id === activeTab) &&
          productInfomation.find((el) => el.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default ProductInfomation;
