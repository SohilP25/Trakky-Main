import React from "react";
import "./Header.css";
import trakky from "./../../../Assets/images/logos/Trakky logo purple.png";
const Header = () => {
  return (
    
    <>
      <div  className="navbar__container">
        <div className="logo__container">
          <img src={trakky} draggable="false" alt="" />
        </div>
        <div className="nav-links__container">
          <li>Trakky Sentence</li>
          <li>Experiences</li>
          <li>Online Experiences</li>
        </div>
        <div className="register-spa">
          <button>Register Spa</button>
        </div>
      </div>
    </>
  );
};

export default Header;
