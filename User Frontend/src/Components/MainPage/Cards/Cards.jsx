import React from "react";

import { Link } from "react-router-dom";
import "./Cards.css";
// import cardIcons from "../../../Assets/images/icons/card_icons.png";

const SpaCard = (props) => {
  return (
    <Link to={`spas${props.cardData.slug}`}>
      <div className="card">
        <div className="card-image">
          <img src={props.cardData.imageUrl} alt="spa" />
        </div>

        <div className="discount_tag">
          <p>couple therapy 50% off</p>
        </div>

        {/* <div className="card_icons">
          <img src={cardIcons} alt="" />
        </div> */}

        <div className="information__container">
          <h3>{props.cardData.name}</h3>
          <p>
            {props.cardData.Area},&nbsp;{props.cardData.City}
          </p>
        </div>

        <div className="information__container_lower">
          <div>
            {/* <p id="price-tag">
              <span>$89</span> / Person
            </p> */}
          </div>

          <div>
            <Link to={"/contact"} className="card-btn-link">
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const OfferCard = (props) => {
  return (
    <div className="offer-card">
      <Link to={"/offers"}>
        <img src={props.cardData.imageUrl} draggable="false" alt="offers" />
      </Link>
    </div>
  );
};

export const TherapyCard = (props) => {
  return (
    <div className="therapy-card">
      <Link>
        <img src={props.cardData.imageUrl} draggable={false} alt="therapy" />
        <p>{props.cardData.Name}</p>
      </Link>
    </div>
  );
};

export const SpaProfile = (props) => {
  return (
    <div className="spa-profile-card">
      <img
        className="spa-profile-card-img"
        src={props.cardData.img}
        draggable={false}
        alt="spa"
      />
      <p className="spa-profile-card-offers">{props.cardData.offers}</p>
    </div>
  );
};

export const SpaRoom = (props) => {
  return (
    <div className="spa_therapy_room">
      <img
        src={require(`../../../Assets/images/spa/${props.cardData.photo}`)}
        alt=""
      />
      <p>{props.cardData.roomname}</p>
    </div>
  );
};

export default SpaCard;

export const ImageCard = (props) => {
  return (
    <div className="slider_image_card">
      <img
        src={require(`../../../Assets/images/spa/${props.cardData}`)}
        alt=""
      />
    </div>
  );
};
