import React from "react";
import { useSelector } from "react-redux";
import { navLinks } from "../../utils/data/Navlinks";
import { Link } from "react-scroll/modules";

const Sidebar = () => {
  const { showSidebar } = useSelector((store) => store.navbar);

  return (
    <aside
      className={`fixed translate-all duration-500 ease-in-out  h-screen w-screen bg-white lg:hidden flex flex-col items-end justify-center space-y-4
        ${!showSidebar && "translate-x-full"}
      }`}
    >
      {navLinks.map((link) => {
        return (
          <Link
            key={link.id}
            to={link.path}
            spy={true}
            smooth={true}
            duration={500}
            delay={200}
            isDynamic={true}
            className="p-2 text-4xl capitalize mr-10 cursor-pointer hover:border-b-2 border-black font-montserrat hover:font-bold md:mr-20"
          >
            {link.name}
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
