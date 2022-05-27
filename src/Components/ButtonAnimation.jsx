// import React, { useState } from "react";

const ButtonAnimation = ({ showSidebar }) => {
  return (
    <div className="transition-all duration-500 ease-in-out flex flex-col space-y-1 items-center justify-center">
      <div
        className={`transition-all duration-500 ease-in-out h-0.5 w-8 bg-black ${
          showSidebar && "rotate-45 translate-y-2"
        }`}
      ></div>
      <div
        className={`transition-all duration-500 ease-in-out h-0.5 w-8 bg-black ${
          showSidebar && "-rotate-45 translate-y-0.5 bg-red-600"
        }`}
      ></div>
    </div>
  );
};

export default ButtonAnimation;
