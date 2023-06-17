import React from "react";
import "./Hero.css";

import Header from "../../Common/Header/Header";
import SearchBar from "./SearchBar";
import Typed from 'react-typed';

const Hero = () => {

  return (
    <section>
      <div className="video-bg">
        <img src={require(`./../../../Assets/images/other/background_video_image.png`)} className="video-bg" alt="" />
        {/* <video className="video-bg" autoPlay loop muted>
          <source src={require(`./../../../Assets/videos/horizontal_.webm`)} />
        </video> */}
      </div>

      <Header page="home" />

      <div className="hero__container">
        <div className="sentence__container">
          <h1>
            <Typed
              strings={[
                "Get the best massage therapy spa here!",
                "Select best therapies according to your need",
                "One stop solution for your relaxation & refreshment needs."
              ]}
              typeSpeed={10}
              backSpeed={5}
              backDelay={3000}
              loop
              showCursor={false}
            />
          </h1>
          {/* <p>Discover and book beauty & wellness professionals near you</p> */}
        </div>
        
       <SearchBar/>
      </div>
    </section>
  );
};

export default Hero;
