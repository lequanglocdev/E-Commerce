/* eslint-disable react/jsx-key */
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, Button, ProductInfomation, SelectQuantity } from "../../components";
import { fixMoney } from "../../utils/helper";
import Slider from "react-slick";
import { IoShieldOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { GoGift } from "react-icons/go";
import { IoReturnDownBack } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const DetailProduct = () => {
  const { pid, title } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`/api/product/${pid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        if (data.success) {
          console.log("data", data);
          setProduct(data.productData);
          if (data.productData?.images?.length > 0) {
            setCurrentImage(data.productData.images[0]);
          }
        } else {
          console.error("Cannot get product");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchDetail();
  }, [pid]);
  const handleQuantity = useCallback(
    (number) => {
      if (!Number(number) || Number(number) < 1) {
        return;
      } else {
        setQuantity(number);
      }
    },
    [quantity]
  );

  const handleChangeQuantity = useCallback(
    (flag) => {
      if (flag === "remove" && quantity === 1) return;
      if (flag === "remove") setQuantity((prev) => +prev - 1);
      if (flag === "add") setQuantity((prev) => +prev + 1);
    },
    [quantity]
  );
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <Breadcrumb title={title} />
      <div className="w-main mt-4 flex m-auto gap-10">
        <div className="w-[480px] h-[633px] flex  flex-col">
          <img src={currentImage} alt="" className="w-[448px] h-[448px] mt-3" />
          <Slider {...settings}>
            {product?.images?.map((el) => (
              <img
                src={el}
                alt=""
                className="w-[143px] h-[143px] cursor-pointer"
                onClick={() => setCurrentImage(el)}
              />
            ))}
          </Slider>
        </div>
        <div className=" flex-4">
          <h4 className="text-3xl font-semibold">{`${fixMoney(
            product?.price
          )} VNĐ`}</h4>

          <ul className="">
            {product?.description?.map((el, index) => (
              <li key={index} className=" leading-8">
                &#8226; {el}
              </li>
            ))}
          </ul>
          <div>
            <SelectQuantity
              quantity={quantity}
              handleQuantity={handleQuantity}
              handleChangeQuantity={handleChangeQuantity}
            />

            <Button name="Add to cart" />
          </div>

          <div className=" flex  ">
            <h4 className="text-lg font-bold">Internal</h4>
            <div className="flex ml-10 items-center gap-10 cursor-pointer">
              <span>32GB</span>
              <span>32GB</span>
              <span>32GB</span>
            </div>
          </div>
          <div className=" flex justify-center">
            <h4 className="text-lg font-bold">Color</h4>
            <div className="flex ml-10 items-center gap-10 cursor-pointer">
              <span>BLACK</span>
              <span>WHITE</span>
              <span>GOLD</span>
              <span>CERAMIC</span>
            </div>
          </div>
          <div className=" flex ">
            <h4 className="text-lg font-bold">Ram</h4>
            <div className="flex ml-10 items-center gap-10 cursor-pointer">
              <span>2GB</span>
              <span>3GB</span>
            </div>
          </div>
          <Link to={`/`}>
            <div className="flex items-center gap-2 mt-6 cursor-pointer hover:text-main ">
              <HiOutlineArrowNarrowLeft   />
              <h4 className="">BACK TO SMARTPHONE</h4>
            </div>
          </Link>
        </div>

        <div>
          <div className="flex items-center gap-2 ">
            <IoShieldOutline className="rounded-full bg-slate-600 text-3xl p-1 text-white" />
            <div>
              <p className="font-normal text-base">Guarantee</p>
              <p className="font-light text-xs">Quality Checked</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <FiTruck className="rounded-full bg-slate-600 text-3xl p-1 text-white" />
            <div>
              <p className="font-normal text-base">Free Shipping</p>
              <p className="font-light text-xs">Free On All Products</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <GoGift className="rounded-full bg-slate-600 text-3xl p-1 text-white" />
            <div>
              <p className="font-normal text-base">Special Gift Cards</p>
              <p className="font-light text-xs">Special Gift Cards</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <IoReturnDownBack className="rounded-full bg-slate-600 text-3xl p-1 text-white" />
            <div>
              <p className="font-normal text-base">Free Return</p>
              <p className="font-light text-xs">Within 7 Days</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <CiHeadphones className="rounded-full bg-slate-600 text-3xl p-1 text-white" />
            <div>
              <p className="font-normal text-base">Consultancy</p>
              <p className="font-light text-xs">Lifetime 24/7/356</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductInfomation/>
      </div>
      <div className="w-main m-auto mt-8">
            <h3 className="text-[">OTHER CUSTOMER</h3>
      </div>
    </div>
  );
};

export default DetailProduct;
