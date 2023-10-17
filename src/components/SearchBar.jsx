import React, {useState} from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
