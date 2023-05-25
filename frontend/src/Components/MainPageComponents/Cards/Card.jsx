import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const SpaCard = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={require(`./../../../assets/images/spa/${props.cardData.img}`)} alt="spa" />
      </div>

      <div className="information__container">
        <h3>{props.cardData.name}</h3>
        <p>{props.cardData.location}</p>

        <div className="information__container_lower">
          <p className="information-phone">
            <BsFillTelephoneOutboundFill />&nbsp;{props.cardData.phone}
          </p>

          <span className="tags">{props.cardData.therapy}</span>
        </div>

        <Link to={props.cardData.callLink} className="card-btn-link">Call Now</Link>
      </div>
    </div>
  );
};

export const OfferCard = (props) => {
  return (
    <div className='offer-card' style={{ margin: "0.5rem" }}>
      <img
        src={require(`./../../../assets/images/offers/${props.cardData}`)}
        draggable="false"
        alt="offers"
      />
    </div>
  )
}

export const SpecialIconCard = (props) => {
  return (
    <div className='special-logo-card' style={{ margin: "0.5rem" }}>
      <img
        src={require(`./../../../assets/images/special_icons/${props.cardData}`)}
        draggable="false"
        alt="offers"
      />
    </div>
  )
}

export const TherapyCard = (props) => {
  return (
    <div className="therapy_card__container">
      <div className="therapy_card_item">
        <div className="therapy_card_img">
          <img
            src={require(`./../../../assets/images/avatars/${props.cardData.img}`)}
            alt=""
          />
        </div>
        <div className="therapy_card_name">{props.cardData.name}</div>
      </div>
    </div>
  )
}

export default SpaCard;