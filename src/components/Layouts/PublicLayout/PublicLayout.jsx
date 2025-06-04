import React from "react";
import TopHeader from "@components/TopHeader/TopHeader.jsx";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <TopHeader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
