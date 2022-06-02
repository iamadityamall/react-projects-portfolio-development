import React from "react";
import ProjectCard from "../ProjectCard";
import { projects } from "../../utils/data/projects";
import { useState } from "react";
import Categories from "../Categories";

const categories = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];
console.log(categories);

const Projects = () => {
  const [list, setList] = useState(projects);

  const filterCategoryWise = (category) => {
    if (category === "all") {
      return setList(projects);
    } else {
      const newList = projects.filter((item) => item.category === category);
      highlightSelectedButton(category);
      console.log(newList);
      return setList(newList);
    }
  };

  const highlightSelectedButton = (buttonName) => {
    const btn = document.querySelector(`#${buttonName}`);
    btn.style.borderBottom = "2px solid black";
  };

  return (
    <section
      id="projects"
      className="transition-all duration-200 ease-in-out md:h-screen flex flex-col space-y-5 "
    >
      <div className="transition-all duration-200 ease-in-out flex flex-col items-center space-y-2 font-poppins">
        <h1 className="transition-all duration-200 ease-in-out text-5xl border-b-4 border-black">
          projects
        </h1>
        <p className="text-sm">things i have build.</p>
      </div>
      <div>
        <Categories
          categories={categories}
          filterCategoryWise={filterCategoryWise}
        />
      </div>
      <div className="py-5 transition-all duration-200 ease-in-out grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 xl:grid-cols-4 ">
        {list.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
