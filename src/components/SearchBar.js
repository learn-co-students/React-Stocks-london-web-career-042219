import React from "react";
import { POINT_CONVERSION_COMPRESSED } from "constants";

const SearchBar = props => {
  return (
    <div>
      <strong>Sort by: </strong>
      <label>
        <input
          name="sort"
          type="radio"
          value="Alphabetically"
          checked={null}
          onChange={event => props.updateSortBy(event)}
        />
        Alphabetically
      </label>
      <label>
        <input
          name="sort"
          type="radio"
          value="Price"
          checked={null}
          onChange={event => props.updateSortBy(event)}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={event => props.updateFilterBy(event.target.value)}>
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
