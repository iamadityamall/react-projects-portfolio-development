import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="bg-[url('/public/beach.jpg')] h-screen border-2 border-black lg:h-screen flex  justify-center items-center bg-cover bg-center ">
      <h1 className="text-5xl bg-black/50 text-white p-10 rounded-lg">hero</h1>
    </section>
  );
}

export default Hero