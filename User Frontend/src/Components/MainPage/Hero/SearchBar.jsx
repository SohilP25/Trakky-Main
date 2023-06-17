import React, { useState, useRef } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

import Search from "./../../../Assets/images/icons/search.svg";
import Filters from "./../../../Assets/images/icons/filters.svg";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [searchResultList, setSearchResultList] = useState([{}]);

  // getting search result
  const getSearchResult = (text) => {
    fetch(`http://localhost:8080/api/v1/search?name=${text}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setSearchResultList(data.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main__search_container">
      <div className="search__container">
        <img draggable="false" src={Search} alt="" />

        <form className="search-bar">
          <label
            htmlFor="search"
            id="searchLabel"
            style={{
              fontWeight: "bold",
              display: isFocused || searchText.length !== 0 ? "none" : "block",
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
            onChange={(e) => {
              setSearchText(e.target.value);
              getSearchResult(e.target.value);
            }}
            style={{
              fontSize: isFocused || searchText.length !== 0 ? "larger" : "",
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

      <div
        className="search_result__container"
        style={{
          display: searchText === "" ? "none" : "block",
        }}
      >
        <ul>
          {searchResultList.map((spa, index) => {
            return (
              <>
                <li key={index}>
                  <Link
                    to={`/spas${spa.slug}`}
                    onClick={() => window.location.href.reload()}
                  >
                    {spa.name}
                  </Link>
                </li>
                {/* <li key={index}>
                  <Link to={`city/${spa.City}`}>{spa.City}</Link>
                </li>
                <li key={index}>
                  <Link to={`area/${spa.Area}`}>{spa.Area}</Link>
                </li> */}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
