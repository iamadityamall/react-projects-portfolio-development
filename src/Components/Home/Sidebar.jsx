import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navLinks } from "../../utils/data/Navlinks";
import { Link } from "react-scroll/modules";
import { toggleSidebarButton } from "../../Features/Navbar/navSlice";

const Sidebar = () => {
  const { showSidebar } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();

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
            className={`translate-all duration-[2000ms] ease-in-out p-2 text-4xl capitalize mr-10 cursor-pointer hover:border-b-2 border-black font-montserrat hover:font-bold md:mr-20 translate-x-[400px] ${
              showSidebar && "translate-x-0"
            }`}
            onClick={() => dispatch(toggleSidebarButton(false))}
          >
            {link.name}
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
