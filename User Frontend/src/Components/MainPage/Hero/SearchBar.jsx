import React from "react";
import "./Hero.css"

import Search from "./../../../Assets/images/icons/search.svg";
import Filters from "./../../../Assets/images/icons/filters.svg";
const SearchBar = () => {
  return (
    <div className="search__container">
      <img draggable="false" src={Search} alt="" />

      <form className="search-bar">
        <label htmlFor="search" id="searchLabel" style={{ fontWeight: "bold" }}>
          What to?
        </label>
        <input
          type="text"
          placeholder="Spa name • Area • City • Therapy"
          name="search"
          autoComplete="off"
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
