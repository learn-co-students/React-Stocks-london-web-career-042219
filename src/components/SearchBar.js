import React from "react";

const SearchBar = props => {
  return (
    <div>
      <label>
        <strong>Sort by:</strong>
        <select onChange={props.handleSort}>
          <option value="Type">Type</option>
          <option value="Price">Price</option>
          <option value="Name">Name</option>
        </select>
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleFilter}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
