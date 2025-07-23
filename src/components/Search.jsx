import React from "react";
import search_img from "../assets/search.svg";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src={search_img} alt="search_icon" />
        <input
          type="text"
          placeholder="Search here for your favorite movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
