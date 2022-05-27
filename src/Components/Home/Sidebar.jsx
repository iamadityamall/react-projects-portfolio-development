import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { showSidebar } = useSelector((store) => store.navbar);
  return (
    <aside
      className={`translate-all duration-500 ease-in-out absolute top-14 right-0 h-screen w-screen bg-white ${
        !showSidebar && "translate-x-full"
      }`}
    >
      Sidebar
    </aside>
  );
};

export default Sidebar;
