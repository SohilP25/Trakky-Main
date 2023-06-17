import React, { useState } from "react";

import "./SpaCard.css";
import { Link } from "react-router-dom";
import CardIcons from "../../../Assets/images/icons/card_icons.png";
import LikeIcon from "../../../Assets/images/icons/like.svg";
import ManIcon from "../../../Assets/images/icons/man.svg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

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
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="spa_card">
      <div className="image__container">
        <p className="spa_tag">Premium</p>
        <img
          src={require(`../../../Assets/images/spa/${img}`)}
          alt="Spa"
          draggable="false"
        />
        <p className="spa_offer_tag">{offers}</p>
      </div>

      <div className="spa_information__container">
        <div className="row1">
          <div className="spa_name">
            <h2>
              <Link to={"/spa-profile"}>{name}</Link>
            </h2>
            <p>{location}</p>
          </div>
          <div className="spa_offer_tag__box">
            {isLiked ? (
              <FcLike
                onClick={() => setIsLiked(false)}
                style={{ width: "2rem", height: "2rem" }}
              />
            ) : (
              <BiHeart
                onClick={() => setIsLiked(true)}
                style={{ width: "2rem", height: "2rem" }}
              />
            )}
          </div>
        </div>

        <div className="row2">
          {/* <div className="spa_icon__box">
            <img src={CardIcons} draggable="false" alt="" />
          </div>
          <div className="spa_price_tag">
            <img src={ManIcon} alt="" draggable="false" />
            <p>
              &nbsp;₹ <span id="spa-price">{basePrice}</span> Onwards
            </p>
          </div> */}
        </div>

        <div className="row3">
          <div className="spa_rating__box">
            {/* <Star stars={ratings} reviews={reviewsCount} /> */}
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

export const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <div>
      <span>{stars}</span>&nbsp;{ratingStar}
      <div
        style={{
          display: "inline-block",
        }}
      >
        &nbsp;({reviews}&nbsp;reviews)
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
        <div className="mini_spa_image__container">
          <p className="spa_tag">Premium</p>
          <img
            src={require(`../../../Assets/images/spa/${img}`)}
            alt="Spa"
            draggable="false"
          />
          <p
            className="spa_offer_tag"
            style={{
              width: "98%",
              bottom: "1%",
              margin: "0 1%",
            }}
          >
            {offers}
          </p>
        </div>

        <div className="mini_spa_information__container">
          <Link to="/spa-profile">
            <div className="spa_name">
              <h2>{name}</h2>
              <p>{location}</p>
            </div>

            <div className="spa_icon__box">
              <img src={CardIcons} draggable="false" alt="" />
            </div>

            <div className="mini_spa_rating__box spa_rating__box">
              <Star stars={ratings} reviews={reviewsCount} />
            </div>
          </Link>
          <div className="mini_spa_price__box">
            <div className="mini_spa_price_tag">
              <img src={ManIcon} alt="" draggable="false" />
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
        <div style={{ borderRight: "1px solid gray" }}>
          <Link>Book Now</Link>
        </div>
        <div>
          <Link>Call Now</Link>
        </div>
      </div>
    </div>
  );
};

export default SpaCard;
