import React from "react";

function CategoryFilter({categories, handleOnClick, isSelected}) {
  
  
  const categoryButtons = categories.map(category => {
    const buttonSelected = isSelected === category ? "selected" : "";

    return (
      <button
        onClick={() => handleOnClick(category)}
        key={category}
        className={buttonSelected}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
