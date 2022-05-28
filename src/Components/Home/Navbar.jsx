import React from "react";
import ButtonAnimation from "../ButtonAnimation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSidebarButton } from "../../Features/Navbar/navSlice";
import { Sidebar } from "./index";
import { navLinks } from "../../utils/data/Navlinks.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((store) => store.navbar);

  return (
    <section className="w-full fixed top-0 bg-white overflow-hidden transition-all duration-500 ease-in-out">
      <nav className=" transition-all duration-500 ease-in-out flex justify-between p-2 w-[95vw] mx-auto sm:w-[90vw] md:w-[85vw] md:p-4 lg:w-[80vw] xl:w-[75vw]">
        <div className="transition-all duration-500 ease-in-out text-4xl py-4">
          logo
        </div>
        <ul className="transition-all duration-500 ease-in-out hidden lg:grid lg:grid-cols-4 lg:items-center lg:justify-items-center lg:gap-x-4">
          {navLinks.map((link) => {
            return (
              <NavLink
                to={link.path}
                key={link.id}
                className="transition-all duration-150 ease-in-out capitalize p-2 hover:border-b-2 hover:border-black font-poppins"
              >
                {link.name}
              </NavLink>
            );
          })}
        </ul>
        <button
          className="p-3 lg:hidden"
          onClick={() => dispatch(toggleSidebarButton(!showSidebar))}
        >
          <ButtonAnimation showSidebar={showSidebar} />
        </button>
      </nav>
      <Sidebar />
    </section>
  );
};

export default Navbar;
