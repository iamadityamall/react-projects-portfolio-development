import React from "react";
import ButtonAnimation from "../ButtonAnimation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSidebarButton } from "../../Features/Navbar/navSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((store) => store.navbar);

  return (
    <section className="w-[95vw] mx-auto sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw]">
      <nav className="flex justify-between p-3">
        <div className="text-4xl">logo</div>
        <ul className="hidden lg:grid lg:grid-cols-4 lg:items-center lg:justify-items-center lg:gap-x-4">
          <li>home</li>
          <li>about</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
        <button
          className="p-3 lg:hidden"
          onClick={() => dispatch(toggleSidebarButton(!showSidebar))}
        >
          <ButtonAnimation showSidebar={showSidebar} />
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
