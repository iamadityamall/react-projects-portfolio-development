import React from "react";
import aboutImage from "../../assests/images/baby.jpg";
import { useSelector } from "react-redux";

const About = () => {
  const {isDarkmode} = useSelector(store => store.navbar)
  return (
    <section
      id="about"
      className="transition-all duration-200 ease-in-out grid grid-cols-1 gap-y-5 justify-items-center  md:grid-cols-2 md:gap-y-0 md:gap-x-2 md:h-screen md:place-items-center"
    >
      {/* image container */}
      <figure className="transition-all duration-200 ease-in-out overflow-hidden rounded-full w-[200px] h-[200px] md:w-full md:h-auto  md:mr-0 md:rounded-xl xl:h-[70vh] xl:w-fit">
        <img
          src={aboutImage}
          alt="about"
          className="transition-all duration-200 ease-in-out  w-full h-full object-contain grayscale z-0"
        />
      </figure>
      {/* info container */}
      <div className="transition-all duration-700 ease-in-out flex flex-col items-center space-y-10  p-4 md:space-y-4 md:p-2 md:items-start ">
        <div className="transition-all duration-700 ease-in-out flex justify-start">
          <h1 className="transition-all duration-700 ease-in-out font-bold font-poppins text-4xl py-1 border-b-4 border-black xl:text-6xl">
            About Me
          </h1>
          {/* <p>Aditya Mall</p> */}
        </div>
        <div className="transition-all duration-500 ease-in-out flex flex-col space-y-2 font-poppins text-sm md:text-justify md:p-2 xl:p-0 xl:text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vitae amet magnam earum, et impedit voluptates repudiandae!
            Molestiae libero qui minus consequuntur ipsum. Nesciunt atque nihil
            similique dolore ipsum adipisci! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia facere illum earum eaque
            alias maxime saepe reprehenderit unde nam praesentium?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure harum
            vitae, veniam quis in animi pariatur delectus rerum eveniet iusto,
            reiciendis, non atque adipisci? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti quia ex sit voluptatum fugiat
            iure consequatur magni tempora porro architecto!
          </p>
        </div>
        <button
          className={`transition-all duration-500 ease-in-out p-4 bg-black text-white font-poppins rounded-lg w-full md:w-auto ${
            isDarkmode && "bg-white text-black"
          }`}
        >
          <a
            href="https://resume-adityamall.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </button>
      </div>
    </section>
  );
};

export default About;
