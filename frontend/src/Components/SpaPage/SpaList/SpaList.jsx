import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SpaList.css";

import Hero from "../Hero/Hero";
import Footer from "../../Common/Footer/Footer";
import Slider from "../../Common/Slider/Slider";
import { popularLocations } from "../../../data";
import SpaCard from "../SpaCard/SpaCard";
import { SpaCardMini } from "../SpaCard/SpaCard";
import { offers, spaNearYou } from "../../../data";


const SpaNearMeList = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const width = window.innerWidth,
      height = window.innerHeight;
    return { width, height };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Hero />

      <div className="spa_list__header">
        <h1>Spa Near Me</h1>
      </div>
      <div className="spa_list_main__container">
        <div className="spa_list__container">

          {/* Displays list of cards according to window size */}
          {{ windowDimensions }.windowDimensions.width >= 765 ? (
            <div className="spa_list">
              {spaNearYou.map((data, index) => {
                return (
                  <>
                    {index === 2 ? (
                      <OfferContainer />
                    ) : (
                      <></>
                    )}
                    <>
                      <SpaCard
                        key={index}
                        name={data.name}
                        img={data.img}
                        location={data.location}
                        offers={data.offers}
                        basePrice={data.basePrice}
                        ratings={data.ratings}
                        reviewsCount={data.reviewsCount}
                      />
                    </>
                  </>
                );
              })}
            </div>
          ) : (
            <>
              {spaNearYou.map((data, index) => {
                return (
                  <>
                    {index === 2 ? (
                      <OfferContainer />
                    ) : (
                      null
                    )}
                    <SpaCardMini
                      key={index}
                      name={data.name}
                      img={data.img}
                      location={data.location}
                      offers={data.offers}
                      basePrice={data.basePrice}
                      ratings={data.ratings}
                      reviewsCount={data.reviewsCount}
                    />
                  </>
                );
              })}
            </>
          )}

          <div className="view_more__button">
            <button>View More</button>
          </div>
        </div>

        <PopularLocations />

      </div>
      <Footer />
    </div >
  );
};

const OfferContainer = () => {
  return (
    <div
      className="slider__outer-container offer__container"
      style={{ width: "90%" }}
    >
      <div className="slider__header">
        <h2>Grab the best deals</h2>
      </div>
      <Slider cardList={offers} _name={"offer"} />
    </div>
  )
};

const PopularLocations = () => {
  return (
    <div className="popular_location__container">
      <div className="popular_location__header">
        <h2>Searched Popular Localities</h2>
      </div>

      <div className="popular_location_list">
        <ul>
          {
            popularLocations.map((city, index) => {
              return (
                <li key={index}><Link to={'/city'}>{city}</Link></li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
};
export default SpaNearMeList;
