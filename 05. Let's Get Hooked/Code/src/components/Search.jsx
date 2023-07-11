import React, { useState } from "react";
import data from "../utils/mockData";

const Search = () => {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className='search-container'>
      <input type='text' placeholder='Search a restaurant you want...'></input>
    </div>
  );
};
export default Search;
