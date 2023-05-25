import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

import Logo from '../../../assets/images/logos/logo text purple.png'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo desktop-nav tablet-nav">
        <img src={Logo} alt="Trakky logo" />
      </div>

      <div className="button desktop-nav tablet-nav">
        <Link className='register-button'>Register Your Spa</Link>
      </div>

      <div className="button mobile-nav">
        <Link className='register-button-mobile'>Register Your Spa → </Link>
      </div>

      <div className="logo mobile-nav">
        <img src={Logo} alt="Trakky logo" />
      </div>
    </nav>
  )
}

export default Navbar;