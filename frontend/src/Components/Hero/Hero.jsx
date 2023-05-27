import React from "react";
import "./Hero.css";
import  Search from './../../Assets/images/icons/search.svg' 
import  Filters from './../../Assets/images/icons/filters.svg' 

const Hero = () => {
  return (
    <section>
      <div className="hero__container">
        <div className="sentence__container">
          <p>Discover top-rated massage spa therapies in your area.</p>
        </div>
        <div className="search__container">
          <div className="search-bar">
            <img draggable="false" src={Search} alt="" />
            <input  type="text" placeholder="Search"/>
          </div>
            <img draggable="false" src={Filters} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
