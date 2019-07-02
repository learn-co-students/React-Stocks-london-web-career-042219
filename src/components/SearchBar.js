import React from "react";

const SearchBar = props => {
  const { sort, handleChange } = props;
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          name="sort"
          value="Alphabetically"
          checked={sort === "Alphabetically"}
          onChange={handleChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="Price"
          checked={sort === "Price"}
          onChange={handleChange}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select name="filter" onChange={handleChange}>
          <option value="" />
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
