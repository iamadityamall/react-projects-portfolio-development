import React from "react";
import { socialLinks } from "../../utils/data/SocialLinks";
import heroImage from "../../assests/images/profile-new.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen grid grid-cols-1 place-items-center md:grid-cols-2"
    >
      <div className="translate-all duration-[2000ms] ease-in-out flex flex-col space-y-2 py-10 px-4 ">
        <div className="translate-all duration-[2000ms] ease-in-out flex flex-col space-y-2">
          <span className="text-2xl font-poppins font-bold">
            I Build Things That Live on the Internet.
          </span>

          <h6 className="text-sm font-bold font-poppins p-1">
            Hi, my name is {" "}
            <span className="text-lg ml-1 font-poppins text-[#413F42]">ADITYA MALL.</span>
          </h6>
        </div>
        <p className="font-poppins">
          Looking for{" "}
          <span className="border-b-2 border-[#413F42]">
            React, Javascript and other web development
          </span>{" "}
          opportunities.
        </p>
        <div className="translate-all duration-[2000ms] ease-in-out flex flex-col space-y-6 items-start">
          <button className="mt-4 px-6 py-4 bg-black text-white rounded-lg font-poppins">
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
      <figure className="hidden w-full overflow-hidden rounded-br-lg md:block 2xl:w-5/6">
        <img src={heroImage} alt="hero" className="h-full w-full" />
      </figure>
    </section>
  );
};

export default Hero;
