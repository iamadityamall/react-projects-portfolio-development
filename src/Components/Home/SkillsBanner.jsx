import React from "react";
import "../../index.css";
import { FaHtml5, FaReact } from "react-icons/fa";
import {SiCsswizardry, SiTailwindcss, SiJavascript} from "react-icons/si"


const ClientLogo = () => {
  return (
    <div className="w-full h-28 overflow-hidden relative rounded-xl lg:h-36 transition-all duration-150 ease-linear">
      <div className="w-[screen] flex absolute animate-flow">
        <div className="flex">
          <div className="w-48 h-28 bg-blue-400 flex justify-center items-center text-6xl font-bold lg:h-36">
            <FaHtml5 />
          </div>
          <div className="w-48 h-28 bg-green-400 flex justify-center items-center text-6xl font-bold lg:h-36">
            <SiCsswizardry />
          </div>
          <div className="w-48 h-28 bg-yellow-400 flex justify-center items-center text-6xl font-bold lg:h-36">
            <SiJavascript />
          </div>
          <div className="w-48 h-28 bg-red-400 flex justify-center items-center text-6xl font-bold lg:h-36">
            <FaReact />
          </div>
          <div className="w-48 h-28 bg-red-400 flex justify-center items-center text-6xl font-bold lg:h-36">
            <SiTailwindcss />
          </div>
        </div>
        <div className="flex">
          <div className="w-48 h-28 bg-blue-400 flex justify-center items-center text-6xl font-bold lg:h-36">
            <FaHtml5 />
          </div>
          <div className="w-48 h-28 bg-green-400 flex justify-center items-center text-6xl font-bold lg:h-36">
            <SiCsswizardry />
          </div>
          <div className="w-48 h-28 bg-yellow-400 flex justify-center items-center text-6xl font-bold lg:h-36">
            <SiJavascript />
          </div>
          <div className="w-48 h-28 bg-red-400 flex justify-center items-center text-6xl font-bold lg:h-36">
            <FaReact />
          </div>
          <div className="w-48 h-28 bg-red-400 flex justify-center items-center text-6xl font-bold lg:h-36">
            <SiTailwindcss />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
