import React from "react";
import { Outlet } from "react-router";
import { Navbar, Footer } from "../Components/Home/";
import { Sidebar } from "../Components/Home/index";

const SharedLayout = () => {
  return (
    <main className="">
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
