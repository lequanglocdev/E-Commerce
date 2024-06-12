import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className=" w-[1440px] h-[103px] mt-4 bg-main flex items-center justify-center ">
        <div className="w-main">
          <div className="w-main flex justify-between items-center ">
            <div className="flex flex-col">
              <span className="text-sm text-white ">SIGN UP TO NEWSLETTER</span>
              <span className="text-sm text-white ">
                Subscribe now and receive weekly newsletter
              </span>
            </div>
            <div className=" flex items-center">
              <input
                type="text"
                className="w-[600px] h-[50px] bg-[#e74c3c] outline-none rounded-l-full px-6 text-gray-100"
                placeholder="Email address"
              />
              <div className="h-[50px] w-[56px] rounded-r-full flex items-center text-white  bg-[#e74c3c] text-xl">
                <IoMdMail />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[1440px] h-[403px]  bg-[#191919] flex items-center justify-center ">
        <div className="w-main">
          <div className="w-main flex justify-between items-center ">
            <div>
              <h4 className="text-white mb-3 border-l-4 border-main pl-2 font-bold uppercase">
                ABOUT US
              </h4>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-white" />
                <span className="text-white font-extralight ">
                  Address: 474 Ontario St Toronto, ON M4X 1M7 Canada
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <FaPhoneAlt className="text-white" />
                <span className="text-white  font-extralight">
                  Phone: (+1234)56789xxx
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IoMdMail className="text-white" />
                <span className="text-white font-extralight ">
                  Mail: tadathemes@gmail.com
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-3 border-l-4 border-main pl-2 font-bold uppercase">
                INFORMATION
              </h4>
              <div className="flex flex-col text-white">
                <span>Typography</span>
                <span>Gallery</span>
                <span>Store Location</span>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-3 border-l-4 border-main pl-2 font-bold uppercase">
                WHO WE ARE
              </h4>
              <div className="flex flex-col text-white">
                <span>Help</span>
                <span>Free Shipping</span>
                <span>FAQs</span>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-3 border-l-4 border-main pl-2 font-bold uppercase">
                DIGITALWORLDSTORE
              </h4>
              <div className="flex flex-col text-white">
                <span>Today is Deals</span>
                <span>Return & Exchange</span>
                <span>Testimonials</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
