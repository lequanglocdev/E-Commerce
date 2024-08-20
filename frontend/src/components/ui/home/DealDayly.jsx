import { FaStar } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Countdown from "../../templates/Countdown";
import { useEffect, useState } from "react";
import { apiProduct } from "../../../api/product";
import { fixMoney, secondsTime } from "../../../utils/helper";
import moment from "moment";
let idInterval;
const DealDayly = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [expireTime, setExpireTime] = useState(false);
  const [deadayly, setDeadayly] = useState(null);
  const fetchApiDealDayly = async () => {
    const res = await apiProduct({ limit: 1, offset: 5 });
    if (res?.success) {
      setDeadayly(res.productData[0]);
      const today = `${moment().format("MM/DD/YYYY")} 5:00:00`;
      const seconds =
        new Date(today).getTime() - new Date().getTime() + 24 * 3600 * 1000;
      console.log(seconds);
      const number = secondsTime(seconds);

      setHour(number.h);
      setMinute(number.m);
      setSecond(number.s);
    } else {
      setHour(0);
      setMinute(59);
      setSecond(59);
    }
    console.log("deadayly", res);
  };
  useEffect(() => {
    idInterval && clearInterval(idInterval);
    fetchApiDealDayly();
  }, [expireTime]);
  useEffect(() => {
    idInterval = setInterval(() => {
      if (second > 0) setSecond((prev) => prev - 1);
      else {
        if (minute > 0) {
          setMinute((prev) => prev - 1);
          setSecond(59);
        } else {
          if (hour > 0) {
            setHour((prev) => prev - 1);
            setMinute(59);
            setSecond(59);
          } else {
            setExpireTime(!expireTime);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(idInterval);
    };
  }, [second, minute, hour, expireTime]);
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
          src={
            deadayly && deadayly.images && deadayly.images.length > 0
              ? deadayly.images[0]
              : "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
          }
          alt=""
          className="w-[243px] h-[243px] object-contain"
        />
        <span className="line-clamp-1 text-center hover:text-main cursor-pointer">
          {deadayly?.title}
        </span>
        <span className=" line-clamp-1 text-center">{`${fixMoney(
          deadayly?.price
        )} VNĐ`}</span>
      </div>
      <div className="px-4 mt-8">
        <div className="flex justify-center gap-2 items-center mb-4">
          <Countdown unit={"Hours"} number={hour} />
          <Countdown unit={"Minute"} number={minute} />
          <Countdown unit={"Second"} number={second} />
        </div>
        <button
          type="button"
          className="flex gap-3 items-center justify-center w-full bg-main hover:bg-gray-800 text-white font-medium py-2"
        >
          <IoMenu />
          <span className="uppercase">Option</span>
        </button>
      </div>
    </div>
  );
};

export default DealDayly;
