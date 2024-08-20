// import React from 'react'
import { Outlet } from "react-router-dom";
import { Header,TopHeader } from "../../components/ui/header/index";
import {Navigate} from "../../components/ui/navbar/index"
import {Footer} from "../../components/ui/footer/index"
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
