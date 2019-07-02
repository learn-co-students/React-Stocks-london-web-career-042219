import React from "react";

const SearchBar = props => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          defaultChecked
          name="sort-selector"
          type="radio"
          value="Alphabetically"
          onChange={props.changeSortType}
        />
        Alphabetically
      </label>
      <label>
        <input
          name="sort-selector"
          type="radio"
          value="Price"
          checked={null}
          onChange={props.changeSortType}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={props.setFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
