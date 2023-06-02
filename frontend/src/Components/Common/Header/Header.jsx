import React, { useState, useEffect } from "react";
import "./Header.css";

import trakkyWhite from "./../../../Assets/images/logos/Trakky logo white.png";
import trakkyPurple from "./../../../Assets/images/logos/Trakky logo purple.png";
import Search from "../../../Assets/images/icons/search.svg";
import Filters from "../../../Assets/images/icons/filters.svg";

const Header = ({ page = "other" }) => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  // navState determines whether it is navbar of home page or of other pages
  const navState = page !== "other";

  return (
    <div
      className={`navbar__container ${show && "hidden"}`}
      style={{ background: !navState && show ? "#FAF8ED" : "" }}
    >
      <div className="logo__container">
        {
          <img
            src={navState ? trakkyWhite : trakkyPurple}
            draggable="false"
            alt=""
          />
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
        className={`search__container navbar_search-top ${navState ? "":"none-other"}`} 
      >
        <img draggable="false" src={Search} alt="" />
        <form className="search-bar">
          <label
            htmlFor="search"
            id="searchLabel"
            style={{ fontWeight: "bold" }}
          >
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
