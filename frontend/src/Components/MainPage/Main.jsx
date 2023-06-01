import React, { useState, useEffect } from "react";

// importing other stuff
import { Link } from "react-router-dom";
import LeftArrow from "../../Assets/images/icons/Arrow left.svg";
import RightArrow from "../../Assets/images/icons/Arrow right.svg";
import GiftCard from "../../Assets/images/other/Gift Cards.png";
import Image from "../../Assets/images/other/image.jpeg";
import "./Main.css";

// importing components
import Header from "../Common/Header/Header";
import Hero from "../Hero/Hero";
import Slider from "../Common/Slider/Slider";
import Footer from "../Common/Footer/Footer";

// importing Data from Data.js
import {
  spaNearYou,
  offers,
  therapy,
  topRatedSpa,
  LuxuriousSpa,
  topDestinationsLocations,
  topDestinations,
  topDestinationsSmallDevice,
} from "../../data";

// window dimensions
function getWindowDimensions() {
  const width = window.innerWidth,
    height = window.innerHeight;
  return { width, height };
}
const Home = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [active, setActive] = useState(0);
  return (
    <div className="main__container">
      <Header />

      <Hero />
      {/* Offer Starts------------------- */}
      <div className="slider__outer-container offer__container">
        <div className="slider__header">
          <h2>Grab the best deals</h2>
          {/* <Link to={'/deals'}>more</Link> */}
        </div>
        <Slider cardList={offers} _name={"offer"} />
      </div>
      {/* Offer Ends */}

      {/* Therapy Starts------------------- */}
      <div className="therapy__container">
        <div className="slider__outer-container">
          <div className="slider__header">
            <h1>Therapies</h1>
            <div className="slider_buttons">
              <p>More</p>
              <img src={LeftArrow} alt="" />
              <img src={RightArrow} alt="" />
            </div>
            <p>Here are lots of interesting destinations to visit</p>
          </div>
          <Slider cardList={therapy} _name={"therapy"} />
        </div>
      </div>
      {/* Therapy Ends */}

      {/* Spa Near You Starts------------------- */}
      <div className="slider__outer-container">
        <div className="slider__header">
          <h1>Spa Near You</h1>
          <div className="slider_buttons">
            <p>More</p>
            <img src={LeftArrow} alt="" />
            <img src={RightArrow} alt="" />
          </div>
        </div>
        <Slider cardList={spaNearYou} _name={"spa"} />
      </div>
      {/* Spa Near You Ends */}

      {/* Top Destinations Starts-------------------------- */}
      <div className="top-destinations__container">
        <div className="top-destinations__header">
          <h1>Top Destinations</h1>
          <p>Sost Brilliant reasons Entrada should be your one-stop-shop! </p>
          <div className="top-destinations__tags">
            {/* Location tags */}
            {topDestinationsLocations.map((location, index) => {
              return (
                <li
                  onClick={() => {
                    setActive(index);
                  }}
                  style={{
                    color: active == index ? "white" : "#2D3134",
                    backgroundColor: active == index ? "#2D3134" : "",
                  }}
                  key={index}
                >
                  {location}
                </li>
              );
            })}
          </div>
        </div>
        {/* images starts------------ */}

        {/* Altering Grid layout for smaller devices */}
        {{ windowDimensions }.windowDimensions.width >= 725 ? (
          <div className="top-destinations-img__container">
            {topDestinations.map(({ img, heading, subHeading }, index) => {
              return (
                <div className={img} key={index}>
                  <img
                    src={require(`../../Assets/images/other/${img}.png`)}
                    alt="spa"
                  />
                  <div className="img-title">
                    <h3>{heading}</h3>
                    <h5>{subHeading}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="top-destinations-img__container1">
            {topDestinationsSmallDevice.map(
              ({ img, heading, subHeading }, index) => {
                return (
                  <div className={img} key={index}>
                    <img
                      src={require(`../../Assets/images/other/${img}.png`)}
                      alt="spa"
                    />
                    <div className="img-title1">
                      <h3>{heading}</h3>
                      <h5>{subHeading}</h5>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
      {/* Top Destinations Ends*/}

      {/* Top Rated Spa Starts --------------------------------------*/}
      <div className="slider__outer-container">
        <div className="slider__header">
          <h1>Top Rated Spa</h1>
          <div className="slider_buttons">
            <p>More</p>
            <img src={LeftArrow} alt="" />
            <img src={RightArrow} alt="" />
          </div>
        </div>
        <Slider cardList={topRatedSpa} _name={"spa"} />
      </div>
      {/* Top Rated Spa Ends */}

      <div className="explore">
        <p id="quotes">“Find the perfect spa therapy for your needs.”</p>
      </div>

      {/* Luxurious Spa Starts --------------------------------------*/}
      <div className="slider__outer-container">
        <div className="slider__header">
          <h1>Luxurious Spa</h1>
          <div className="slider_buttons">
            <p>More</p>
            <img src={LeftArrow} alt="" />
            <img src={RightArrow} alt="" />
          </div>
        </div>
        <Slider cardList={LuxuriousSpa} _name={"spa"} />
      </div>
      {/* Luxurious Spa Ends */}

      {/* Discover Trakky Experiences Starts --------------------------------------*/}
      <div className="trakky_experiences">
        <h2>Discover Trakky Experiences</h2>
        <div className="image__container">
          <div className="left__">
            <img src={Image} alt="" />
          </div>
          <div className="right__">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      {/* Discover Trakky Experiences Ends */}

      {/* Upper Footer Desktop  Starts --------------------------------------*/}
      <div className="upper__footer_desktop">
        <div className="left__container">
          <h1>Trakky Experience</h1>
          <Link to={"/learn-more"}>Learn more</Link>
        </div>
        <div className="right__container">
          <img src={GiftCard} alt="" />
        </div>
      </div>
      {/* Upper Footer Desktop Ends */}

      {/* Upper Footer Mobile Starts---------------------------- */}
      <div className="upper__footer_mobile">
        <h1>Trakky Experience</h1>
        <img src={GiftCard} alt="" />
        <Link to={"/learn-more"}>Learn more</Link>
      </div>
      {/* Upper Footer Mobile Ends */}
      <Footer />
    </div>
  );
};

export default Home;
