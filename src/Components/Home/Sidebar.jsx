import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/data/Navlinks";

const Sidebar = () => {
  const { showSidebar } = useSelector((store) => store.navbar);

  return (
    <aside
      className={`fixed translate-all duration-500 ease-in-out  h-screen w-screen bg-white lg:hidden flex flex-col items-center justify-center space-y-4
        ${!showSidebar && "translate-x-full"}
      }`}
    >
      {navLinks.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            className="p-2 text-4xl capitalize "
          >
            {link.name}
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Sidebar;
