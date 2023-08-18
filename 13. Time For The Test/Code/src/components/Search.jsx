import React, { useState } from "react";

const Search = ({ handleFilter }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className='flex justify-center align-middle mt-10'>
      <input
        data-testid='search-input'
        className='w-96 h-12 border-2 border-black-300  px-5 text-3xlg focus:outline-none'
        type='text'
        placeholder='Search a restaurant you want...'
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        value={searchInput}
      ></input>
      <button
        className='h-12 bg-orange-500 text-white px-5 ml-2 hover:bg-orange-400'
        onClick={() => handleFilter(searchInput)}
      >
        Search
      </button>
    </div>
  );
};
export default Search;
