import React from "react";

import "./SpaCard.css";
import { Link } from "react-router-dom";
import CardIcons from "../../../Assets/images/icons/card_icons.png";
import LikeIcon from "../../../Assets/images/icons/like.svg";
import Man from "../../../Assets/images/icons/man.svg";
import Star from "../../../Assets/images/icons/star.svg";

// SpaCard will appear when screen is large
const SpaCard = ({
  img,
  name,
  offers,
  location,
  ratings,
  reviewsCount,
  basePrice,
}) => {
  return (
    <div className="spa_card">
      <div className="image__container">
        <img
          src={require(`./../../../Assets/images/spa/${img}`)}
          alt="Spa"
          draggable="false"
        />
      </div>

      <div className="spa_information__container">
        <div className="spa_name">
          <h2>{name}</h2>
          <p>{location}</p>
        </div>

        <div className="spa_icon__box">
          <img src={CardIcons} draggable="false" alt="" />
        </div>

        <div className="spa_rating__box">
          <span>{ratings}</span>
          &nbsp;
          {Array.from({ length: ratings }, (_, index) => (
            <img
              key={index}
              src={Star}
              alt=""
              style={{ width: "1.4rem", margin: "auto .3rem" }}
              draggable="false"
            />
          ))}
          &nbsp; (<span id="spa-review">{reviewsCount}</span>&nbsp;reviews)
        </div>
      </div>

      <div className="spa_contact__container">
        <div className="spa_offer_tag__box">
          <p>{offers}</p>
          <img src={LikeIcon} alt="" />
        </div>

        <div className="spa_contact__box">
          <div className="spa_price_tag">
            <img src={Man} alt="" draggable="false" />
            <p>
              &nbsp;₹ <span id="spa-price">{basePrice}</span> Onwards
            </p>
          </div>

          <div className="spa_booking_buttons">
            <Link>Book Now</Link>
            <Link>Call Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// SpaCardMini will appear when screen is of mobile size
export const SpaCardMini = ({
  img,
  name,
  offers,
  location,
  ratings,
  reviewsCount,
  basePrice,
}) => {
  return (
    <div className="mini_spa_card">
      <div className="main_mini_spa__container">
        <div className="mini_image__container">
          <img
            src={require(`../../../Assets/images/spa/${img}`)}
            alt="Spa"
            draggable="false"
          />
          <p>{offers}</p>
        </div>

        <div className="mini_spa_information__container">
          <div className="spa_name">
            <h2>{name}</h2>
            <p>{location}</p>
          </div>

          <div className="spa_icon__box">
            <img src={CardIcons} draggable="false" alt="" />
          </div>

          <div className="spa_rating__box">
            <span>{ratings}</span>&nbsp;
            {Array.from({ length: ratings }, (_, index) => (
              <img
                key={index}
                src={Star}
                alt=""
                draggable="false"
                style={{ width: "1rem", margin: "auto .1rem" }}
              />
            ))}
            &nbsp;(<span id="spa-review">{reviewsCount}</span>&nbsp;reviews)
          </div>

          <div className="mini_spa_price__box">
            <div className="mini_spa_price_tag">
              <img src={Man} alt="" draggable="false" />
              <p>
                &nbsp;₹ <span id="spa-price">{basePrice}</span> Onwards
              </p>
            </div>

            <div className="spa_like__box">
              <img src={LikeIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mini_spa_buttons">
        <div>
          <Link>Book Now</Link>
        </div>
        <span style={{ alignContent: "center", display: "flex" }}>|</span>
        <div>
          <Link>Call Now</Link>
        </div>
      </div>
    </div>
  );
};

export default SpaCard;
