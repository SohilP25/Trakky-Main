import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const SpaCard = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={require(`../../../Assets/images/spa/${props.cardData.img}`)} alt="spa" />
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
    <div className='offer-card'>
      <Link to={'/offers'}>
        <img
          src={require(`../../../Assets/images/offers/${props.cardData}`)}
          draggable="false"
          alt="offers"
        />
      </Link>
    </div>
  )
};

export const TherapyCard = (props) => {
  return (
    <div className="therapy-card">
      <Link>
        <img 
        src={require(`../../../Assets/images/therapy/${props.cardData.img}`)} 
        draggable={false}
        alt="therapy" />

        <p>{props.cardData.name}</p>
      </Link>
    </div>
  );
};

export default SpaCard;