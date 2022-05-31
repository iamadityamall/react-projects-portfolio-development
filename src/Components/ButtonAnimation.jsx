// import React, { useState } from "react";

const ButtonAnimation = ({ showSidebar }) => {
  return (
    <div
      className={`transition-all duration-500 ease-in-out flex flex-col space-y-2 items-center justify-center ${
        showSidebar && "space-y-0"
      }`}
    >
      <div
        className={`transition-all duration-500 ease-in-out h-1 w-9 bg-[#06113C] rounded-lg ${
          showSidebar && "bg-[#413F42] rotate-45"
        }`}
      ></div>
      <div
        className={`transition-all duration-500 ease-in-out h-1 w-9 rounded-lg bg-[#06113C] ${
          showSidebar && "bg-[#413F42] -rotate-45 -translate-y-1"
        }`}
      ></div>
    </div>
  );
};

export default ButtonAnimation;
