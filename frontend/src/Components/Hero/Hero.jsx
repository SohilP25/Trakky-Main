import React, { useCallback, useEffect, useState } from "react";
import "./Hero.css";
import Search from './../../Assets/images/icons/search.svg'
import Filters from './../../Assets/images/icons/filters.svg'

const Hero = () => {

  const [newName, setNewName] = useState("");

  const shuffle = useCallback(() => {
    const headlines = [
      "Discover top-rated massage spa therapies in your area.",
      "Everything happening around me is very random",
      "I believe life is an intelligent thing: that things aren't random.",
      "Together we can change the world, just one random act of kindness at a time."
    ]
    const index = Math.floor(Math.random() * headlines.length);
    setNewName(headlines[index])
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID)
  }, [shuffle])

  return (
    <section>
      <div className="hero__container">
        <div className="sentence__container">
          <p>{newName}</p>
        </div>

        <div className="search__container">
          <div className="search-bar">
            <img draggable="false" src={Search} alt="" />
            <input type="text" placeholder="Search" />
          </div>

          <img draggable="false" src={Filters} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
