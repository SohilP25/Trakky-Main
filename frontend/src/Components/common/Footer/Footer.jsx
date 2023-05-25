import React from 'react'

import { Link } from 'react-router-dom'
import './Footer.css'

import Logo from '../../../assets/images/logos/logo text white.png';
import facebookLogo from '../../../assets/images/logos/facebook.png';
import instagramLogo from '../../../assets/images/logos/instagram.png';
import twitterLogo from '../../../assets/images/logos/twitter.png';
import googleLogo from '../../../assets/images/logos/google_2.png';

const Footer = () => {
    return (
        <footer>
            <div className="upper-footer">
                <p className='heading'>Why to choose trakky ?</p>
                <p>If you're looking for a spa day that's both relaxing and convenient, Trakky is the perfect solution. Trakky is a spa booking platform that makes it easy to find and book appointments with the best spas and massage therapists in your area. With Trakky, you can find and book appointments with just a few taps on your phone, anytime, from anywhere</p>
                <p>Trakky also offers a variety of spas near Ahmedabad and Gandhinagar, so you can find the perfect place to relax and rejuvenate.</p>
                <p>With Trakky, it's easy to book a spa day that's perfect for you. So what are you waiting for? Book your appointment today and start relaxing.</p>
            </div>

            <div className="lower-footer">
                <div className="lower-footer-container-1">
                    <div className="trakky-white-logo">
                        <img src={Logo} alt="Trakky" />
                    </div>
                    <div className="quick-links">
                        <ul>
                            <li><Link to={'/about'}>About Us</Link></li>
                            <li><Link to={'/blogs'}>Blogs</Link></li>
                            <li><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
                            <li><Link to={'https://www.trakky.in'}>Salon Services</Link></li>
                            <li><Link to={'/contact'}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="customer-care">
                        <span>Customer Care:</span>
                        <span>+91 93283 82710</span>
                        <span className='deligater'>&nbsp;|&nbsp;</span>
                        <span>11 AM - 6 PM (MON-FRI)</span>
                    </div>
                </div>

                <div className="lower-footer-container-2">
                    <div className="social-media">
                        <p>Contact Us</p>
                        <div className="social-media-icons">
                            <ul>
                                <li style={{ margin: "0.1rem" }}>
                                    <Link to={'www.facebook.com'} target='_blank'>
                                        <img src={facebookLogo} width="35" height="35" alt="facebook" />
                                    </Link>
                                </li>
                                <li style={{ margin: "0.1rem" }}>
                                    <Link to={'www.instagram.com'} target='_blank'>
                                        <img src={instagramLogo} width="35" height="35" alt="instagram" />
                                    </Link>
                                </li>
                                <li style={{ margin: "0.1rem" }}>
                                    <Link to={'www.twitter.com'} target='_blank'>
                                        <img src={twitterLogo} width="35" height="35" alt="twitter" />
                                    </Link>
                                </li>
                                <li style={{ margin: "0.1rem" }}>
                                    <Link to={'www.google.com'} target='_blank'>
                                        <img src={googleLogo} width="35" height="35" alt="google" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright-container">
                        <p>© Copyright 2022 Trakky. All Rights Reserved by Trakky Techno Services Pvt Ltd.</p>
                        <p>Handcrafted in India by <Link to={'https://trakky.in'}>Trakky</Link></p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
