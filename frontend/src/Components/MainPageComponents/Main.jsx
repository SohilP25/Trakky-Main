import React from "react";

import "../../index.css";
import "./Main.css";
import { Link } from "react-router-dom";
import { spaNearYou, LuxuriousSpa, topRatedSpa, therapy } from "./../../data";

import Navbar from "../common/Header/Navbar.jsx";
import Hero from "../MainPageComponents/HeroSection/Hero.jsx";
import Slider from "../MainPageComponents/Slider/Slider.jsx";
import Tags from "../MainPageComponents/Tags/Tags.jsx";
import Footer from "../common/Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <div className="background__container">
        
        <Navbar />
        
        <div className="top-right-circle"></div>
        <div className="left-ellipse"></div>
        <div className="bottom-left-ellipse"></div>
        <div className="bottom-right-ellipse"></div>
        
        <Hero />

        <div className="slider__outer-container">
          <div className="slider__header">
            <h2>Spa Near You</h2>
            <Link to={'/spa-near-you'}>more</Link>
          </div>
          <Slider cardList={spaNearYou} _name={"spa"} />
        </div>
        
        <div className="therapy__container">
          <div className="slider__header">
            <h2>Select Your Therapy</h2>
          </div>
          <Slider _name="therapy_catagory" cardList={therapy} />
        </div>

        <div className="explore">
          <p id="quotes">“Find the perfect spa therapy for your needs.”</p>
        </div>

        <div className="slider__outer-container">
          <div className="slider__header">
            <h2>Luxurious Spa</h2>
            <Link to={'/luxurious-spa'}>more</Link>
          </div>

          <Slider cardList={LuxuriousSpa} _name={"spa"} />

          <div className="explore">
            <p id="quotes">
              “Unleash serenity and explore top-rated massage therapy spas on
              Trakky, the ultimate spa finder platform.”
            </p>
          </div>

          <div className="slider__header">
            <h2>Top Rated Spa</h2>
            <Link to={'/top-rated-spa'}>more</Link>
          </div>
          <Slider cardList={topRatedSpa} _name={"spa"} />
        </div>

        {/* ------------------Admin Panel Components starts-------------- */}
        {/* <Login />
        <Register />
        <Therapies />
        <Services />
        <Spa /> */}
        {/* ------------------Admin Panel Components ends-------------- */}

        <Tags />
        <Footer />
      </div>
    </>
  );
};

export default Home;
