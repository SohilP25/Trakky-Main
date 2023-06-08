import React from "react";
import "./Hero.css";

import Header from "../../Common/Header/Header";
import SearchBar from "./SearchBar";
import Typed from 'react-typed';

const Hero = () => {

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
          <h1>
            <Typed
              strings={[
                "Discover top-rated massage spa therapies in your area.",
                "Everything happening around me is very random",
                "I believe life is an intelligent thing: that things aren't random.",
                "United, we alter the world with random acts of kindness.",
              ]}
              typeSpeed={10}
              backSpeed={5}
              backDelay={3000}
              loop
              showCursor={false}
            />
          </h1>
          <p>Discover and book beauty & wellness professionals near you</p>
        </div>
        
       <SearchBar/>
      </div>
    </section>
  );
};

export default Hero;
