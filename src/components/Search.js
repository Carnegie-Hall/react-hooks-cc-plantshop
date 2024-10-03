import React, { useState } from "react";

function Search({handleSearch}) {
  const [searchWord, setSearchWord] = useState('')

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value);
          handleSearch(e.target.value);
        }
      }
      />
    </div>
  );
}

export default Search;
