import React from 'react';

const SearchBar = (props) => {
  return (
      <div>

		  <strong>Sort by:</strong>
		  <label>
			  <input type="radio" value="Alphabetically" name="alphabetically" checked={props.filter == "alphabetically"} onChange={props.setSortBy}/>
			  Alphabetically
		  </label>
		  <label>
			  <input type="radio" value="Price" name="price" checked={props.filter == "price"} onChange={props.setSortBy}/>
			  Price
		  </label>
		  <br/>

		  <label>
			  <strong>Filter:</strong>
			  <select onChange={props.setFilterBy}>
				  <option value="Tech">Tech</option>
				  <option value="Sportswear">Sportswear</option>
				  <option value="Finance">Finance</option>
			  </select>
		  </label>


      </div>
  );
}


export default SearchBar;
