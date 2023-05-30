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
import img1 from "./../../Assets/images/other/img1.png";
import img2 from "./../../Assets/images/other/img2.png";
import img3 from "./../../Assets/images/other/img3.png";
import img4 from "./../../Assets/images/other/img4.png";
import img5 from "./../../Assets/images/other/img5.png";
import img6 from "./../../Assets/images/other/img6.png";
import i1 from "./../../Assets/images/other/i1.png";
import i2 from "./../../Assets/images/other/i2.png";
import i3 from "./../../Assets/images/other/i3.png";
import i4 from "./../../Assets/images/other/i4.png";
// importing Data from Data.js
import {
  spaNearYou,
  offers,
  therapy,
  topRatedSpa,
  LuxuriousSpa,
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

  return (
    <div className="main__container">
      <Header />

      <Hero />

      <div className="slider__outer-container offer__container">
        <div className="slider__header">
          <h2>Grab the best deals</h2>
          {/* <Link to={'/deals'}>more</Link> */}
        </div>
        <Slider cardList={offers} _name={"offer"} />
      </div>

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

      <div className="top-destionations__container">
        <div className="top-destinations__header">
          <h1>Top Destinations</h1>
          <p>Sost Brilliant reasons Entrada should be your one-stop-shop! </p>
          <div className="top-destionations__tags">
            <li>London</li>
            <li>Bangkok</li>
            <li>England</li>
            <li>Singapore</li>
            <li>Italy</li>
          </div>
        </div>
        {{ windowDimensions }.windowDimensions.width >= 725 ? (
          <div className="top-destinations-img__container">
            <div className="img1">
              <img src={img1} alt="spa" />
              <div className="img-title">
                <h3>Vietnam</h3>
                <h5>Worefall</h5>
              </div>
            </div>
            <div className="img2">
              <img src={img2} alt="spa" />
              <div className="img-title">
                <h3>Vietnam</h3>
                <h5>Worefall</h5>
              </div>
            </div>
            <div className="img3">
              <img src={img3} alt="spa" />
              <div className="img-title">
                <h3>Vietnam</h3>
                <h5>Worefall</h5>
              </div>
            </div>
            <div className="img4">
              <img src={img4} alt="spa" />
              <div className="img-title">
                <h3>Vietnam</h3>
                <h5>Worefall</h5>
              </div>
            </div>
            <div className="img5">
              <img src={img5} alt="spa" />
              <div className="img-title">
                <h3>Vietnam</h3>
                <h5>Worefall</h5>
              </div>
            </div>
            <div className="img6">
              <img src={img6} alt="spa" />
              <div className="img-title">
                <h3>Vietnam</h3>
                <h5>Worefall</h5>
              </div>
            </div>
          </div>
        ) : (
          <div className="top-destinations-img__container1">
            <div className="i1">
              <img src={i1} alt="spa" />
              <div className="img-title1">
                <h3>Vietnam</h3>
                <h5>Worefall</h5>
              </div>
            </div>
            <div className="i4">
              <img src={i4} alt="spa" />
              <div className="img-title1">
                <h3>Vietnam</h3>
                <h5>Worefall</h5>
              </div>
            </div>
            <div className="i2">
              <img src={i2} alt="spa" />
              <div className="img-title1">
                <h3>Vietnam</h3>
                <h5>Worefall</h5>
              </div>
            </div>
            <div className="i3">
              <img src={i3} alt="spa" />
              <div className="img-title1">
                <h3>Vietnam</h3>
                <h5>Worefall</h5>
              </div>
            </div>
          </div>
        )}
      </div>

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

      <div className="explore">
        <p id="quotes">“Find the perfect spa therapy for your needs.”</p>
      </div>

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

      <div className="upper__footer_desktop">
        <div className="left__container">
          <h1>Trakky Experience</h1>
          <Link to={"/learn-more"}>Learn more</Link>
        </div>
        <div className="right__container">
          <img src={GiftCard} alt="" />
        </div>
      </div>

      <div className="upper__footer_mobile">
        <h1>Trakky Experience</h1>
        <img src={GiftCard} alt="" />
        <Link to={"/learn-more"}>Learn more</Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
