import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-[url('/public/profile.png')] h-screen  lg:h-screen flex  justify-center items-center bg-cover "
    >
      <h1 className="text-5xl bg-black/50 text-white p-10 rounded-lg">hero</h1>
    </section>
  );
};

export default Hero;
