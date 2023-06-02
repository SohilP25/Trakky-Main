import React, { useState, useEffect } from "react";
import "./Hero.css";
import Header from "../../Common/Header/Header";
import SearchBar from "../../MainPage/Hero/SearchBar";

function getWindowDimensions() {
  const width = window.innerWidth,
    height = window.innerHeight;
  return { width, height };
}
const Hero = () => {
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
    <>
      <Header />
      {{ windowDimensions }.windowDimensions.width <= 820 ? (
        <div className="search-hero__container">
          <SearchBar />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Hero;
