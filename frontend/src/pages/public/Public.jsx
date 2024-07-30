// import React from 'react'
import { Outlet } from "react-router-dom";
import { Header, Navigate, TopHeader, Footer } from "../../components";
const Public = () => {
  return (
    <div className="w-full flex flex-col items-center  max-w-6xl mx-auto">
      <TopHeader />
      <Header />
      <Navigate />
      <div className="w-main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Public;
