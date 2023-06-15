import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

import trakkyWhite from "./../../../Assets/images/logos/Trakky logo white.png";
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

  const [searchText, setSearchText] = useState("")

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

  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef(null)

  return (
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
      <div
        className="nav-links__container"
        style={{ display: navState ? "" : "none" }}
      >
        <li>Trakky Sentence</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </div>

      <div
        className={`search__container navbar_search-top ${navState ? "" : "none-other"
          }`}
      >
        <img draggable="false" src={Search} alt="" />
        <form className="search-bar">
          <label
            htmlhtmlFor="search"
            id="searchLabel"
            style={{ fontWeight: "bold",
            display: (isFocused || searchText.length !== 0) ? "none" : "block"  }}
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

      <div className="register-spa">
        <button
          style={{
            color: navState ? "" : "black",
            borderColor: navState ? "" : "black",
          }}
        >
          Register Spa
        </button>
      </div>
    </div>
  );
};

export default Header;
