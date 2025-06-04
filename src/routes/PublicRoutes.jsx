import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/public/Home/Home";
import Product from "../pages/public/Product/Product";
import NotFound from "../pages/public/NotFound/NotFound";
import Login from "../pages/public/Auth/Login/Login";
import Wishlist from "../pages/public/Wishlist/Wishlist";
import PublicLayout from "../components/Layouts/PublicLayout/PublicLayout";
import Account from "../pages/public/Account/Account";
export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" element={<Product />} />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
