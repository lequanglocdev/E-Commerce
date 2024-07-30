import { useEffect, useState } from "react";
import Slider from "react-slick";
import Product from "./Product";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const CustomSlider = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/product");
      const data = await response.json();
      if (data?.success) {
        setProducts(data.productData);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="w-full">
      <h3 className="text-[20px]  font-semibold py-[15px] border-b-2 border-main  uppercase">
        NEW ARRIVALS
      </h3>
      <div>
        <Slider {...settings}>
          {products?.map((el) => {
           // console.log("Product Data:", el); // Log the product data here
            return <Product key={el._id} productData={el} showOptions={false} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;
