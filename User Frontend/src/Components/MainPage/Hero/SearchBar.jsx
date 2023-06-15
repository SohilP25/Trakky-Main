import React, { useState, useRef } from "react";
import "./Hero.css"

import Search from "./../../../Assets/images/icons/search.svg";
import Filters from "./../../../Assets/images/icons/filters.svg";


const SearchBar = () => {

  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef(null)

  const [searchText, setSearchText] = useState("")

  return (
    <div className="search__container">
      <img draggable="false" src={Search} alt="" />

      <form className="search-bar">
        <label 
          htmlhtmlFor="search" 
          id="searchLabel" 
          style={{ 
            fontWeight: "bold", 
            display: (isFocused || searchText.length !== 0) ? "none" : "block" 
          }}
        >
          What to?
        </label>
        <input
          ref={ref}
          type="text"
          placeholder="Spa name • Area • City • Therapy"
          name="search"
          autoComplete="off"
          id="search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            fontSize: (isFocused || searchText.length !== 0) ? "larger" : ""
          }}
        />
      </form>

      <img
        draggable="false"
        src={Filters}
        alt=""
        style={{ height: "2.5rem" }}
      />
    </div>
  );
};

export default SearchBar;
