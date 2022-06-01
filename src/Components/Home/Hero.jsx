import React from "react";
import { socialLinks } from "../../utils/data/SocialLinks";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex justify-between items-center"
    >
      <div className="translate-all duration-[2000ms] ease-in-out flex flex-col space-y-4 py-10 px-4 ">
        <h6 className="text-sm font-bold font-poppins">Hi, my name is </h6>
        <div className="translate-all duration-[2000ms] ease-in-out flex flex-col space-y-1">
          <span className="text-4xl font-bold font-poppins">ADITYA MALL.</span>
          <span className="text-2xl font-poppins text-[#413F42]">
            I Build Things That Live on the Internet.
          </span>
        </div>
        <p className="font-poppins">
          Aiming for{" "}
          <span className="border-b-2 border-[#413F42]">
            React, Javascript and other web development
          </span>{" "}
          opportunities.
        </p>
        <div className="translate-all duration-[2000ms] ease-in-out flex flex-col space-y-6 items-start">
          <button className="mt-2 px-6 py-4 bg-black text-white rounded-lg font-poppins">
            Hire me
          </button>
          <div className="translate-all duration-[2000ms] ease-in-out flex space-x-5  items-center justify-start">
            {socialLinks.map((link) => {
              const { id, path, icon } = link;
              return (
                <a
                  href={path}
                  key={id}
                  rel="noreferrer"
                  target="_blank"
                  className="text-3xl"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
