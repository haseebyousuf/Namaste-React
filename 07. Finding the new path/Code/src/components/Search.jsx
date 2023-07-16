import React, { useState } from "react";

const Search = ({ handleFilter }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Search a restaurant you want...'
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        value={searchInput}
      ></input>
      <button className='search-btn' onClick={() => handleFilter(searchInput)}>
        Search
      </button>
    </div>
  );
};
export default Search;
