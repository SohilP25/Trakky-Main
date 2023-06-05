import React, { useState, useEffect } from "react";
import "./SpaList.css";

import Hero from "../Hero/Hero";
import Footer from "../../Common/Footer/Footer";
import Slider from "../../Common/Slider/Slider";

import SpaCard from "../SpaCard/SpaCard";
import { SpaCardMini } from "../SpaCard/SpaCard";
import { offers, spaNearYou, LuxuriousSpa, topRatedSpa } from "../../../data";
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

      {/* Displays list of cards according to window size */}
      {{ windowDimensions }.windowDimensions.width >= 765 ? (
        <div className="spa_list__container">
          {spaNearYou.map((data, index) => {
            return (
              <>
                {index === 2 ? (
                  // Offers Starts
                  <div
                    className="slider__outer-container offer__container"
                    style={{ width: "130%",padding:"0 7%" }}
                  >
                    <div className="slider__header">
                      <h2>Grab the best deals</h2>
                    </div>
                    <Slider cardList={offers} _name={"offer"} />
                  </div>
                ) : (
                  // Offers Ends
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
                  <div
                    className="slider__outer-container offer__container"
                    style={{ width: "90%" }}
                  >
                    <div className="slider__header">
                      <h2>Grab the best deals</h2>
                    </div>
                    <Slider cardList={offers} _name={"offer"} />
                  </div>
                ) : (
                  <></>
                )}
                <>
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
              </>
            );
          })}
        </>
      )}

      <div className="view_more__button">
        <button>View More</button>
      </div>

      <Footer />
    </div>
  );
};
export default SpaNearMeList;
