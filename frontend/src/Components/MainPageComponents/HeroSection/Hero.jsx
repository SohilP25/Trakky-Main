import React from "react";

import { Link } from 'react-router-dom'
import "./Hero.css";

import City from '../../../assets/images/logos/city.png'
import Location from '../../../assets/images/logos/location.png'
import Search from '../../../assets/images/logos/search.png'

import { offers, specialIcons } from "../../../data";
import Slider from "../Slider/Slider.jsx";

const Hero = () => {
  return (
    <>
      <div className="main-container">
        <div className="home-page-headline">
          <p>Discover top-rated massage spa therapies in your area</p>
        </div>

        <div className="search_spa__container">
          <div className="search-spa-form">
            <form method="GET">
              <input type="text" placeholder="Search Therapy" /> 
              <button type="submit"><img src={Search} alt="icon" /></button>
            </form>
          </div>
          
          <div className="search-buttons">
            <Link><img src={City} alt="icon" /> City</Link>
            <Link><img src={Location} width={'30'} height={'30'} alt="icon" /> Nearest</Link>
          </div>
        </div>


        <div className="special_icon__container">
          <Slider _name="special_icons" cardList={specialIcons} />
        </div>


        <div className="offers__container">
          <Slider _name="offer" cardList={offers} />
        </div>
      </div>
    </>
  );
};

export default Hero;
