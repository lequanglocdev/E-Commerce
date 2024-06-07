// import React from 'react'
import { Outlet } from "react-router-dom";
import { Header, Navigate } from "../../components";
const Public = () => {
  return (
    <div className="w-full flex flex-col items-center  max-w-6xl mx-auto">
      <Header />
      <Navigate />
      <div className="w-main">
       
        <Outlet />
      </div>
    </div>
  );
};

export default Public;
