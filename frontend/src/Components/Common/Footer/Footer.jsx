import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

import TrakkyLogo from '../../../Assets/images/logos/Trakky logo purple.png'
import GoogleIcon from '../../../Assets/images/icons/google.svg'
import FacebookIcon from '../../../Assets/images/icons/facebook.svg'
import InstagramIcon from '../../../Assets/images/icons/instagram.svg'
import TwitterIcon from '../../../Assets/images/icons/twitter.svg'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className="footer__main_container">

        <div className="footer__column1">
          <Link>
            <img src={TrakkyLogo} alt="" />
          </Link>

          <p>Experience best massage therapies with spas of trakky</p>
          
          <div className="social_media__container">
            <ul>
              <li style={{ marginLeft: 0 }}>
                <Link to={'https://www.google.com'} target='_blank'><img src={GoogleIcon} alt="" /></Link>
              </li>
              <li>
                <Link to={'https://www.facebook.com'} target='_blank'><img src={FacebookIcon} alt="" /></Link>
              </li>
              <li>
                <Link to={'https://www.instagram.com'} target='_blank'><img src={InstagramIcon} alt="" /></Link>
              </li>
              <li>
                <Link to={'https://www.twitter.com'} target='_blank'><img src={TwitterIcon} alt="" /></Link>
              </li>
            </ul>
          </div>

        </div>
        <div className="footer__column2">
          <p>Resources</p>
          
          <ul>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
          </ul>

        </div>
        <div className="footer__column3">
          <p>Travellers</p>
          
          <ul>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
          </ul>


        </div>
        <div className="footer__column4">
          <p>Company</p>

          <ul>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
          </ul>


        </div>
        <div className="footer__column5">
          <p>Company</p>

          <ul>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
            <li><Link to={'/help-center'}>Help Center</Link></li>
          </ul>


        </div>
      </div>

      <div className="footer__copyright">
        <p>© Copyright 2023 Trakky. All Rights Reserved by Trakky Techno Services Pvt Ltd.    |     Handcrafted in India by Trakky</p>
      </div>
    </div>
  )
}

export default Footer