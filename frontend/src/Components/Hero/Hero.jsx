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
      <div className="overlay"></div>
      <video
        src={require(`./../../Assets/videos/background_player.mp4`)}
        className="video-bg"
        autoPlay
        loop
        muted
      ></video>
      <Header />
      <div className="hero__container">
        <div className="sentence__container">
          <p>{newName}</p>
        </div>
        <div className="search__container">
          <div className="search-bar">
            <img draggable="false" src={Search} alt="" />
            <input type="text" placeholder="Search" name="search" />
          </div>
          <img draggable="false" src={Filters} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
