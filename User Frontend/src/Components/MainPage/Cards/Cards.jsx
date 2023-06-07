import React from "react";

import { Link } from "react-router-dom";
import "./Cards.css";
import cardIcons from "../../../Assets/images/icons/card_icons.png";

const SpaCard = (props) => {
  return (
    <Link to="/spa-profile">
      <div className="card">
        <div className="card-image">
          <img
            src={require(`../../../Assets/images/spa/${props.cardData.img}`)}
            alt="spa"
          />
        </div>

        <div className="discount_tag">
          <p>couple therapy 50% off</p>
        </div>

        <div className="card_icons">
          <img src={cardIcons} alt="" />
        </div>

        <div className="information__container">
          <h3>{props.cardData.name}</h3>
          <p>{props.cardData.location}</p>
        </div>

        <div className="information__container_lower">
          <div>
            <p id="price-tag">
              <span>$89</span> / Person
            </p>
          </div>
          
          <div>
            <Link to={props.cardData.callLink} className="card-btn-link">
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
        <img
          src={require(`../../../Assets/images/offers/${props.cardData}`)}
          draggable="false"
          alt="offers"
        />
      </Link>
    </div>
  );
};

export const TherapyCard = (props) => {
  return (
    <div className="therapy-card">
      <Link>
        <img
          src={require(`../../../Assets/images/therapy/${props.cardData.img}`)}
          draggable={false}
          alt="therapy"
        />
        <p>{props.cardData.name}</p>
      </Link>
    </div>
  );
};

export const SpaProfile = (props) => {
  return (
    <div className="spa-profile-card">
      <img
        className="spa-profile-card-img"
        src={require(`../../../Assets/images/spa/${props.cardData.img}`)}
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
  )
}

export default SpaCard;
