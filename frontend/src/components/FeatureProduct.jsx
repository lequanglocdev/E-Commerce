import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const FeatureProduct = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/product");
      const data = await response.json();
      if (data?.success) {
        const limitedProducts = data.productData.slice(0, 9);
        setProducts(limitedProducts);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full ">
      <h3 className="text-[20px]  font-semibold py-[15px] border-b-2 border-main  uppercase">
        Featurn Product
      </h3>

      <div className="flex flex-wrap mt-[20px] mx-[-10px]">
        {products?.map((el) => {
          return <ProductCard key={el._id} productData={el} />;
        })}
      </div>
      <div className="flex justify-between">
        <img
          src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-bottom-home2_b96bc752-67d4-45a5-ac32-49dc691b1958_600x.jpg?v=1613166661"
          alt=""
          className="w-[49%] object-contain"
        />
        <div className="flex flex-col justify-between gap-4 w-[24%]">
          <img
            src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-bottom-home2_400x.jpg?v=1613166661"
            alt=""
          />
          <img
            src="https://digital-world-2.myshopify.com/cdn/shop/files/banner3-bottom-home2_400x.jpg?v=1613166661"
            alt=""
          />
        </div>
        <img
          src="https://digital-world-2.myshopify.com/cdn/shop/files/banner4-bottom-home2_92e12df0-500c-4897-882a-7d061bb417fd_400x.jpg?v=1613166661"
          alt=""
           className="w-[24%] object-contain"
        />
      </div>
    </div>
  );
};

export default FeatureProduct;
