import React from "react";

const SearchBar = props => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          name="filter"
          type="radio"
          value="Alphabetically"
          checked={null}
          onChange={props.sortAlphabetically}
        />
        Alphabetically
      </label>
      <label>
        <input
          name="filter"
          type="radio"
          value="Price"
          checked={null}
          onChange={props.sortPrice}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
      <button onClick={props.resetStocks}> AllStocks </button>
    </div>
  );
};

export default SearchBar;
