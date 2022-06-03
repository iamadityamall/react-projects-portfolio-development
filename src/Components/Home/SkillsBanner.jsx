import React from "react";
import "../../index.css";
import { FaHtml5, FaReact } from "react-icons/fa";
import {SiCsswizardry, SiTailwindcss, SiJavascript} from "react-icons/si"


const ClientLogo = () => {
  return (
    <section className="transition-all duration-200 ease-in-out grid grid-cols-1 py-14 lg:pt-0 lg:pb-14 justify-items-center gap-y-4 items-center md:grid-cols-3 md:gap-y-0">
      <div>
        <h1 className="transition-all duration-200 ease-in-out text-4xl font-bold font-poppins border-b-4 border-black md:text-5xl lg:text-7xl">
          Skills
        </h1>
      </div>
      <div className="w-full h-28 overflow-hidden relative rounded-xl lg:h-36 transition-all duration-150 ease-linear md:col-span-2">
        <div className="w-[screen] flex absolute animate-flow">
          <div className="flex">
            <div className="transition-all duration-200 ease-in-out w-48 h-28  flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaHtml5 />
              <p className="text-lg">Html</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 b flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <SiCsswizardry />
              <p className="text-lg">Css</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 bg flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <SiJavascript />
              <p className="text-lg">Javascript</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaReact />
              <p className="text-lg">React</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <SiTailwindcss />
              <p className="text-lg">Tailwind Css</p>
            </div>
          </div>
          <div className="flex">
            <div className="transition-all duration-200 ease-in-out w-48 h-28  flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaHtml5 />
              <p className="text-lg">Html</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 b flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <SiCsswizardry />
              <p className="text-lg">Css</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28  flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <SiJavascript />
              <p className="text-lg">Javascript</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaReact />
              <p className="text-lg">React</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <SiTailwindcss />
              <p className="text-lg">Tailwind Css</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogo;
