const ProjectCard = ({ name, image, category, info }) => {
  const translateFull = (id) => {
    const aside = document.querySelector(`#${id}`);
    aside.style.transform = "translateY(0)";
  };
  const translateZero = (id) => {
    const aside = document.querySelector(`#${id}`);
    aside.style.transform = "translateY(75%)";
  };
  return (
    <article
      className="transition-all duration-700 ease-in-out relative w-full h-56  rounded-lg overflow-hidden cursor-pointer shadow-xl lg:hover:scale-105"
      onMouseOver={() => translateFull(name)}
      onMouseLeave={() => translateZero(name)}
    >
      <figure className="transition-all duration-700 ease-in-out absolute w-full h-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </figure>
      <aside
        id={name}
        className="transition-all duration-700 ease-in-out absolute bg-black/90 h-full w-full p-4 font-poppins flex flex-col justify-between translate-y-3/4 text-white
      "
      >
        <h1 className="font-bold ">{name}</h1>
        <p className="text-sm">{info}</p>
        <footer>icon</footer>
      </aside>
    </article>
  );
};

export default ProjectCard;
