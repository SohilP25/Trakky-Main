import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

import trakkyWhite from "./../../../Assets/images/logos/Trakky logo purple.png";
import trakkyPurple from "./../../../Assets/images/logos/Trakky logo purple.png";
import Search from "../../../Assets/images/icons/search.svg";
import Filters from "../../../Assets/images/icons/filters.svg";
import { Link } from "react-router-dom";

// default prop of page = "other": which represents navbar of all other pages except home page.

// Rendering Home page Navbar prop of page = "some random text" needs to be passed.

const Header = ({ page = "other" }) => {
  // show determines whether navbar on scroll is visible or not.
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY < lastScrollY && lastScrollY >= 330) {
          setShow(true);
        } else {
          setShow(false);
        }

        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  // navState determines whether it is navbar of home page or of other pages
  // If navState is true => navbar of home page is rendered.
  const navState = page !== "other";

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
    <div>
      <div
        className={`navbar__container ${show && "hidden"}`}
        style={{
          background: !navState && show ? "#FAF8ED" : "",
          position: show ? "fixed" : !navState ? "relative" : "absolute",
        }}
      >
        <div className="logo__container">
          {
            <Link to="/">
              <img
                src={navState ? trakkyWhite : trakkyPurple}
                draggable="false"
                alt=""
              />
            </Link>
          }
        </div>
        {/* <div
        className="nav-links__container"
        style={{ display: navState ? "" : "none" }}
      >
        <li>Trakky Sentence</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </div> */}

        <div
          className={`search__container navbar_search-top ${
            navState ? "" : "none-other"
          }`}
        >
          <img draggable="false" src={Search} alt="" />
          <form className="search-bar">
            <label
              htmlFor="search"
              id="searchLabel"
              style={{
                fontWeight: "bold",
                display:
                  isFocused || searchText.length !== 0 ? "none" : "block",
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

        {/* <div className="register-spa">
        <button
          style={{
            color: navState ? "" : "black",
            borderColor: navState ? "" : "black",
          }}
        >
          Register Spa
        </button>
      </div> */}
      </div>

      <div
        className="search_result__container"
        style={{
          display: searchText === "" ? "none" : "block",
          width: "40%",
          margin: "0 23% 0 37%",
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

export default Header;
