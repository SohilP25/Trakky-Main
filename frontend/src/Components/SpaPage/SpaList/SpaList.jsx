import React from "react";

import Hero from "../Hero/Hero";
import Footer from "../../Common/Footer/Footer";
import Slider from "../../Common/Slider/Slider";

import { offers } from "../../../data";

const SpaNearMeList = (props) => {



  return (
    <div>
      <Hero />

       

      {/* Offer Starts------------------- */}
      <div
        className="slider__outer-container offer__container"
        style={{ marginTop: "5rem", width: "90%" }}
      >
        <div className="slider__header">
          <h2>Grab the best deals</h2>
        </div>
        <Slider cardList={offers} _name={"offer"} />
      </div>
      {/* Offer Ends */}

      <Footer />
    </div>
  );
};

export default SpaNearMeList;
