import React from 'react'
import aboutImage from "../../assests/images/profile-new.png"

const About = () => {
  return (
    <section
      id="about"
      className="mt-11 grid grid-cols-1 gap-y-5 justify-items-center  md:grid-cols-2"
    >
      {/* image container */}
      <figure className="mr-8 overflow-hidden rounded-full w-[200px] h-[200px] md:w-full md:h-full md:rounded-none md:mr-0">
        <img src={aboutImage} alt="about" className="w-full h-full object-contain object-right-bottom" />
      </figure>
      {/* info container */}
      <div className="flex flex-col items-center space-y-5 text-justify p-4">
        <div className="flex justify-start">
          <h1 className="font-bold font-poppins text-4xl py-1 border-b-4 border-black">
            About Me
          </h1>
          {/* <p>Aditya Mall</p> */}
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vitae amet magnam earum, et impedit voluptates repudiandae!
            Molestiae libero qui minus consequuntur ipsum. Nesciunt atque nihil
            similique dolore ipsum adipisci! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia facere illum earum eaque
            alias maxime saepe reprehenderit unde nam praesentium?
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure harum vitae, veniam quis in animi pariatur delectus rerum eveniet iusto, reiciendis, non atque adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia ex sit voluptatum fugiat iure consequatur magni tempora porro architecto!</p>
        </div>
        <button className="p-4 bg-black text-white font-poppins font-bold  rounded-lg w-full">
          resume
        </button>
      </div>
    </section>
  );
}

export default About