import React from 'react'

import './SpaCard.css'
import { Link } from 'react-router-dom'
import SpaImage from '../../../Assets/images/spa/spa.png'
import CardIcons from '../../../Assets/images/icons/card_icons.png'
import LikeIcon from '../../../Assets/images/icons/like.svg'
import Man from '../../../Assets/images/icons/man.svg'
import Star from '../../../Assets/images/icons/star.svg'

// SpaCard will appear when screen is large 
const SpaCard = (props) => {
  return (
    <div className='spa_card'>
      <div className="image__container">
        <img src={SpaImage} alt="" />
      </div>

      <div className="spa_information__container">
        <div className="spa_name">
          <h2>Aroma the luxurious spa</h2>
          <p>Kudasan, Gandhinagar</p>
        </div>

        <div className="spa_icon__box">
          <img src={CardIcons} alt="" />
        </div>

        <div className="spa_rating__box">
          <span>5.0</span>
          &nbsp;
          <img src={Star} style={{ width: '1.4rem' }} alt="" />
          &nbsp;
          (<span id='spa-review'>318</span>&nbsp;reviews)
        </div>
      </div>

      <div className="spa_contact__container">
        <div className="spa_offer_tag__box">
          <p>couple therapy 50% off</p>
          <img src={LikeIcon} alt="" />
        </div>

        <div className="spa_contact__box">
          <div className="spa_price_tag">
            <img src={Man} alt="" />
            <p>&nbsp;₹ <span id='spa-price'>999</span> Onwards</p>
          </div>

          <div className="spa_booking_buttons">
            <Link>Book Now</Link>
            <Link>Call Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// SpaCardMini will appear when screen is of mobile size 
export const SpaCardMini = () => {
  return (
    <div className="mini_spa_card">
      <div className="main_mini_spa__container">
        <div className="mini_image__container">
          <img src={SpaImage} alt="" />
          <p>couple therapy 50% off</p>
        </div>

        <div className="mini_spa_information__container">
          <div className="spa_name">
            <h2>Aroma the luxurious spa</h2>
            <p>Kudasan, Gandhinagar</p>
          </div>

          <div className="spa_icon__box">
            <img src={CardIcons} alt="" />
          </div>

          <div className="spa_rating__box">
            <span>5.0</span>&nbsp;<img src={Star} alt="" />&nbsp;(<span id='spa-review'>318</span>&nbsp;reviews)
          </div>

          <div className="mini_spa_price__box">
            <div className="mini_spa_price_tag">
              <img src={Man} alt="" />
              <p>&nbsp;₹ <span id='spa-price'>999</span> Onwards</p>
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
  )
};

export default SpaCard