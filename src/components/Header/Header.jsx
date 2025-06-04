import React, { useState } from "react";
import logo from "@assets/foesta.webp";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import icons from "../../utils/icon";

import SearchDrawer from "../SearchDrawer/SearchDrawer";
import CartDrawer from "../CartDrawer/CartDrawer";
import { Link } from "react-router-dom";
const Header = () => {
  const { BsCart3, IoSearchOutline, FiUser, FaRegHeart } = icons;
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [openDrawer, setOpenDrawer] = useState({
    top: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setOpenDrawer({ ...openDrawer, [anchor]: open });
  };

  return (
    <div className="bg-white h-[70px] shadow-sm">
      <div className="max-w-[1290px] mx-auto h-full flex items-center justify-between px-4">
        <Link to="/">
          <img src={logo} alt="Foesta Logo" className="h-6" />
        </Link>
        <div className="flex justify-center items-center gap-8">
          <nav className="flex gap-6 text-sm font-medium">
            <div className="relative group">
              <button className="hover:text-black">Shop ▾</button>
            </div>
            <button>About us</button>
            <button>Pages ▾</button>
            <button>Blog ▾</button>
            <button>Contact</button>
          </nav>

          <div className="flex items-center gap-4 text-black text-[18px] relative">
            <div
              className="cursor-pointer p-2"
              onClick={() => setIsSearchOpen(true)}>
              <IoSearchOutline size={22} />
            </div>

            <SearchDrawer
              open={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
            />

            <div className="cursor-pointer p-2">
              <Badge
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    width: "6px",
                    height: "20px",
                    backgroundColor: "black",
                    color: "white",
                  },
                }}>
                <FaRegHeart size={22} />
              </Badge>
            </div>

            <div
              className="cursor-pointer p-2"
              onClick={() => setIsCartOpen(true)}>
              <Badge
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    width: "6px",
                    height: "20px",
                    backgroundColor: "black",
                    color: "white",
                  },
                }}>
                <BsCart3 size={22} />
              </Badge>
            </div>

            <CartDrawer
              open={isCartOpen}
              onClose={() => setIsCartOpen(false)}
            />

            <Link to="/account" className="cursor-pointer p-2">
              <FiUser size={22} />
            </Link>
          </div>
        </div>
      </div>

      <Drawer
        anchor="top"
        open={openDrawer.top}
        onClose={toggleDrawer("top", false)}>
        <div className="p-6 w-full max-w-[1290px] mx-auto">
          <h2 className="text-lg font-semibold mb-2">Search Something...</h2>
        </div>
      </Drawer>

      <Drawer
        anchor="right"
        open={openDrawer.right}
        onClose={toggleDrawer("right", false)}>
        <div className="p-6 w-[350px]">
          <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
