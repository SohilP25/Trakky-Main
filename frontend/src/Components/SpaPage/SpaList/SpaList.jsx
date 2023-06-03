import React, { useState, useEffect } from "react";
import './SpaList.css'

import Hero from "../Hero/Hero";
import Footer from "../../Common/Footer/Footer";
import Slider from "../../Common/Slider/Slider";

import { offers } from "../../../data";
import SpaCard from "../SpaCard/SpaCard";
import { SpaCardMini } from "../SpaCard/SpaCard";

const SpaNearMeList = (props) => {

  function getWindowDimensions() {
    const width = window.innerWidth,
      height = window.innerHeight;
    return { width, height };
  }
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

  return (
    <div>
      <Hero />
      <div className="spa_list__header">
        <h1>Spa Near Me</h1>
      </div>
      {{ windowDimensions }.windowDimensions.width >= 765 ? (
        <>
          <SpaCard />
          <SpaCard />

          {/* Offer Starts------------------- */}
          <div
            className="slider__outer-container offer__container"
            style={{ width: "90%" }}
          >
            <div className="slider__header">
              <h2>Grab the best deals</h2>
            </div>
            <Slider cardList={offers} _name={"offer"} />
          </div>
          {/* Offer Ends */}
          <SpaCard />
          <SpaCard />
          <SpaCard />
          <SpaCard />

        </>
      ) : (
        <>
          <SpaCardMini />
          <SpaCardMini />

          {/* Offer Starts------------------- */}
          <div
            className="slider__outer-container offer__container"
            style={{ width: "90%" }}
          >
            <div className="slider__header">
              <h2>Grab the best deals</h2>
            </div>
            <Slider cardList={offers} _name={"offer"} />
          </div>
          {/* Offer Ends */}
          <SpaCardMini />
          <SpaCardMini />
          <SpaCardMini />
          <SpaCardMini />
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