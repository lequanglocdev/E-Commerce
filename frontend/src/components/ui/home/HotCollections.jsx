import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
const HotCollections = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch("/api/category");
      const data = await res.json();
      setCategories(data.createCategory);
      // console.log("Cate", data.createCategory);
    };
    fetchCategory();
  }, []);
  return (
    <div className="w-full">
      <h3 className="text-[20px]  font-semibold py-[15px] border-b-2 border-main  uppercase">
        HOT COLLECTIONS
      </h3>
      <div className="flex flex-wrap gap-4">
        {categories?.map((el) => (
          <div key={el._id} className="w-[396px]">
            <div className="border flex p-4 gap-4 min-h-[190px]">
              <img
                src={el?.image}
                alt="image"
                className="w-[144px] flex-1 h-[129px] object-contain"
              />
              <div className="flex-1 text-gray-700">
                <h4 className="font-semibold uppercase">{el?.title}</h4>
                <ul className="text-sm">
                  {el?.brand?.map((item) => (
                    <span key={item} className="flex gap-2 items-center text-gray-500 cursor-pointer">
                      <IoIosArrowForward/>
                      <li className="hover:text-main">{item}</li>
                    </span>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotCollections;
