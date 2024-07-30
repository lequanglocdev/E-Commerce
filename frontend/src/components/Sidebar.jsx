import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { createSlug } from "../utils/helper";
import {apiCategory} from "../api/category"
const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await apiCategory() 
      // console.log("category",res)
      if(res.success) setCategories(res.createCategory)
    };
    fetchCategory();
  }, [categories]);

  return (
    <div className="flex flex-col">
     
      {categories?.map((el) => (
        <NavLink
          key={createSlug(el.title)}
          to={createSlug(el.title)}
          className={({ isActivec }) =>
            isActivec
              ? "bg-main text-white hover:text-main px-5 pt-[16px] pb-[14px] test-sm"
              : "px-5 pt-[16px] pb-[14px] test-sm hover:text-main"
          }
        >
          {el.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
