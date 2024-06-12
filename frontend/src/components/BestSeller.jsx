import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Product } from "./";

const tabs = [
  { id: 1, name: "Best seller" },
  { id: 2, name: "New Arrivals" },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const BestSeller = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [bestSellers, setBestSellers] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/product");
      const data = await response.json();

      // console.log("API Response:", data);

      if (data?.success) {
        const halfLength = Math.ceil(data.productData.length / 2); 
        const halfBestSellers = data.productData.slice(0, halfLength); 
        const halfNewProducts = data.productData.slice(halfLength); 
        setBestSellers(halfBestSellers);
        setProducts(halfBestSellers); 
        // console.log("Best Sellers Set:", halfBestSellers);

        setNewProducts(halfNewProducts)
        // console.log("New Products Set:", halfNewProducts);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (activeTab === 1) {
      setProducts(bestSellers);
      console.log("Active Tab 1 - Best Sellers:", bestSellers);
    }
    if (activeTab === 2) {
      setProducts(newProducts);
      console.log("Active Tab 2 - New Products:", newProducts);
    }
  }, [activeTab, bestSellers, newProducts]);

  return (
    <div>
      <div className="flex text-[20px] gap-8 pb-4 border-b-2 border-main">
        {tabs.map((el) => (
          <span
            key={el.id}
            className={`font-semibold capitalize border-r cursor-pointer ${
              activeTab === el.id ? "text-gray-900" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(el.id)}
          >
            {el.name}
          </span>
        ))}
      </div>
      <div className="mt-4 ">
        <Slider {...settings}>
          {products?.map((el) => {
            console.log("Product Data:", el); // Log the product data here
            return (
              <Product
                key={el._id}
                productData={el}
                showOptions={true}
                showLabel = {true}
                isNew={activeTab === 1 ? false : true}
              />
            );
          })}
        </Slider>
      </div>
      <div className="w-full flex gap-4 mt-6">
        <img
          src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-home2_2000x_crop_center.png?v=1613166657"
          alt=""
          className="flex-1 object-contain"
        />
        <img
          src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-home2_2000x_crop_center.png?v=1613166657"
          alt=""
          className="flex-1 object-contain"
        />
      </div>
    </div>
  );
};

export default BestSeller;
