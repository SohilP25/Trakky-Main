import React, { useCallback, useEffect, useState } from "react";
import "./Hero.css";

import Header from "../../Common/Header/Header";
import SearchBar from "./SearchBar";

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
          <source src={require(`./../../../Assets/videos/horizontal_.webm`)} />
        </video>
      </div>

      <Header page="home" />

      <div className="hero__container">
        <div className="sentence__container">
          <h1>{newName}</h1>
          <p>Discover and book beauty & wellness professionals near you</p>
        </div>
        
       <SearchBar/>
      </div>
    </section>
  );
};

export default Hero;
