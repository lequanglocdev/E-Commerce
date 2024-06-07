import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { createSlug } from "../utils/helper";
const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch("/api/category");
      const data = await res.json();
      setCategories(data.createCategory);
    };
    fetchCategory();
  }, []);

  return (
    <div className="flex flex-col">
     
      {categories?.map((el) => (
        <NavLink
          key={createSlug(el.title)}
          to={createSlug(el.title)}
          className={({ isActive }) =>
            isActive
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
