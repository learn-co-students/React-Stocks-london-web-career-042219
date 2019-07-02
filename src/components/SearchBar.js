import React from 'react';

// 5) Add in the callback function, to set the type
const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sortradio" value="Alphabetically" checked={null} onChange={props.setOrder}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sortradio" value="Price" checked={null} onChange={props.setOrder}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.setTypeState}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
