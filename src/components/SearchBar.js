import React from "react";

const SearchBar = props => {
  return (
    <div>
      <label>
        <strong>Sort by:</strong>
        <select onChange={props.sortFunction}>
          <option value="price">Price</option>
          <option value="ticker">Alphabetically</option>
        </select>
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={props.filterStocks}>
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
