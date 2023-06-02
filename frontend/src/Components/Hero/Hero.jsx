import React, { useCallback, useEffect, useState } from "react";
import "./Hero.css";

import Search from "./../../Assets/images/icons/search.svg";
import Filters from "./../../Assets/images/icons/filters.svg";
import Header from "../Common/Header/Header";

const Hero = () => {
  const [newName, setNewName] = useState(
    "Discover top-rated massage spa therapies in your area."
  );

  const shuffle = useCallback(() => {
    const headlines = [
      "Discover top-rated massage spa therapies in your area.",
      "Everything happening around me is very random",
      "I believe life is an intelligent thing: that things aren't random.",
      "United, we alter the world with random acts of kindness.",
    ];
    const index = Math.floor(Math.random() * headlines.length);
    setNewName(headlines[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);


  return (
    <section>
      <div className="video-bg">
        <video className="video-bg" autoPlay loop muted>
          <source src={require(`./../../Assets/videos/horizontal_.webm`)} />
        </video>
      </div>

      <Header />

      <div className="hero__container">
        <div className="sentence__container">
          <h1>{newName}</h1>
          <p>Discover and book beauty & wellness professionals near you</p>
        </div>


        <div className="search__container">

          <img draggable="false" src={Search} alt="" />

          <form className="search-bar">
            <label htmlFor="search" id="searchLabel" style={{ fontWeight: "bold" }}>What to?</label>
            <input type="text" placeholder="Spa name • Area • City • Therapy" name="search" autoComplete="off" />
          </form>

          <img draggable="false" src={Filters} alt="" style={{ height: '2.5rem' }} />

        </div>
      </div>
    </section>
  );
};

export default Hero;
