import React from "react";
import "./Hero.css";
import { BiSearch } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";

const Hero = () => {
  return (
    <section>
      <div className="hero__container">
        <div className="sentence__container">
          <p>Discover top-rated massage spa therapies in your area.</p>
        </div>
        <div className="search__container">
          <div className="search-bar">
            <BiSearch />
            <input type="text" placeholder="Search"/>
          </div>
          <BsFilterLeft/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
