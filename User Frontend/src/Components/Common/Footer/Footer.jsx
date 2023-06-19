import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import TrakkyLogo from "../../../Assets/images/logos/Trakky logo purple.png";
import GoogleIcon from "../../../Assets/images/icons/google.svg";
import FacebookIcon from "../../../Assets/images/icons/facebook.svg";
import InstagramIcon from "../../../Assets/images/icons/instagram.svg";
import TwitterIcon from "../../../Assets/images/icons/twitter.svg";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__main_container">
        <div className="footer__column1">
          <Link to="/">
            <img src={TrakkyLogo} alt="Trakky" />
          </Link>

          <p>Experience best massage therapies with spas of trakky</p>

          <div className="social_media__container">
            <ul>
              <li style={{ marginLeft: 0 }}>
                <Link to={"https://g.co/kgs/spvB6L"} target="_blank">
                  <img src={GoogleIcon} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.facebook.com/Trakky.in?mibextid=ZbWKwL"}
                  target="_blank"
                >
                  <img src={FacebookIcon} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.instagram.com/trakky_india/"}
                  target="_blank"
                >
                  <img src={InstagramIcon} alt="" />
                </Link>
              </li>
              <li>
                <Link to={"https://twitter.com/trakky5?t=I9aYy64mlfcTN5Liu28tzQ&s=08"} target="_blank">
                  <img src={TwitterIcon} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="footer__column2">
          <p>Catogories</p>

          <ul>
            <li>
              <Link to={"/spanearyou"}>Spa near you</Link>
            </li>
            <li>
              <Link to={"/toprated"}>Top rated</Link>
            </li>
            <li>
              <Link to={"/luxurious"}>Luxurious</Link>
            </li>
            <li>
              <Link to={"/trending"}>Trending</Link>
            </li>
          </ul>
        </div> */}
        {/* <div className="footer__column3">
          <p>What we offer</p>

          <ul>
            <li>
              <Link to={"/"}>Services</Link>
            </li>
            <li>
              <Link to={"/offers"}>Offers</Link>
            </li>
            <li>
              <Link to={"/luxuriousspa"}>Best spas</Link>
            </li>
            <li>
              <Link to={"/"}>Help Center</Link>
            </li>
          </ul>
        </div> */}
        <div className="footer__column4">
          <p>What we offer</p>

          <ul>
            <li>
              {/* <a href="#therapies">Therapies</a> */}
            </li>
            <li>
              <a href="#offers">Offers</a>
            </li>
            <li>
              <Link to={"/luxuriousspas"}>Best spas</Link>
            </li>
            {/* <li>
              <Link to={"/"}>Help Center</Link>
            </li> */}
          </ul>
        </div>
        <div className="footer__column5">
          <p>Categories</p>

          <ul>
            <li>
              <Link to={"/spanearyou"}>Spa near you</Link>
            </li>
            <li>
              <Link to={"/topratedspas"}>Top rated</Link>
            </li>
            <li>
              <Link to={"/luxuriousspas"}>Luxurious</Link>
            </li>
            {/* <li>
    <Link to={"/trending"}>Trending</Link>
  </li> */}
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <p>
          © Copyright 2023 <Link to={"/"}>Trakky</Link>. All Rights Reserved by Trakky Techno Services
          Pvt Ltd. | Handcrafted in India by <Link to={"/"}>Trakky</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
