import React from "react";

const Categories = ({ categories, filterCategoryWise }) => {
  return (
    <div className="flex justify-center space-x-5 p-4">
      {categories.map((category, index) => {
        return (
          <button
            id={category}
            key={index}
            className="text-lg font-bold"
            onClick={() => filterCategoryWise(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
