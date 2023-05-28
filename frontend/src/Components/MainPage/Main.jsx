import React from 'react'

// importing other stuff
import { Link } from 'react-router-dom'
import LeftArrow from '../../Assets/images/icons/Arrow left.svg'
import RightArrow from '../../Assets/images/icons/Arrow right.svg'
import GiftCard from '../../Assets/images/other/Gift Cards.png';
import './Main.css'

// importing components
import Header from '../Common/Header/Header'
import Hero from '../Hero/Hero'
import Slider from '../Common/Slider/Slider'
import Footer from '../Common/Footer/Footer'

// importing Data from Data.js
import { spaNearYou, offers, therapy, topRatedSpa, LuxuriousSpa } from '../../data'

const Home = () => {
    return (
        <div className='main__container'>

            <Header />

            <Hero />

            <div className="slider__outer-container offer__container">
                <div className="slider__header">
                    <h2>Grab the best deals</h2>
                    {/* <Link to={'/deals'}>more</Link> */}
                </div>
                <Slider cardList={offers} _name={"offer"} />
            </div>

            <div className="therapy__container">

                <div className="slider__outer-container">
                    <div className="slider__header">
                        <h1>Therapies</h1>
                        <div className="slider_buttons">
                            <p>More</p>
                            <img src={LeftArrow} alt="" />
                            <img src={RightArrow} alt="" />
                        </div>
                        <p>Here are lots of interesting destinations to visit</p>
                    </div>
                    <Slider cardList={therapy} _name={"therapy"} />
                </div>

            </div>

            <div className="slider__outer-container">
                <div className="slider__header">
                    <h1>Spa Near You</h1>
                    <div className="slider_buttons">
                        <p>More</p>
                        <img src={LeftArrow} alt="" />
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
                <Slider cardList={spaNearYou} _name={"spa"} />
            </div>

            <div className="slider__outer-container">
                <div className="slider__header">
                    <h1>Top Rated Spa</h1>
                    <div className="slider_buttons">
                        <p>More</p>
                        <img src={LeftArrow} alt="" />
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
                <Slider cardList={topRatedSpa} _name={"spa"} />
            </div>


            <div className="explore">
                <p id="quotes">“Find the perfect spa therapy for your needs.”</p>
            </div>

            <div className="slider__outer-container">
                <div className="slider__header">
                    <h1>Luxurious Spa</h1>
                    <div className="slider_buttons">
                        <p>More</p>
                        <img src={LeftArrow} alt="" />
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
                <Slider cardList={LuxuriousSpa} _name={"spa"} />
            </div>

            <div className="upper__footer_desktop">
                <div className="left__container">
                    <h1>Trakky Experience</h1>
                    <Link to={'/learn-more'}>Learn more</Link>
                </div>
                <div className="right__container">
                    <img src={GiftCard} alt="" />
                </div>
            </div>

            <div className="upper__footer_mobile">
                <h1>Trakky Experience</h1>
                <img src={GiftCard} alt="" />
                <Link to={'/learn-more'}>Learn more</Link>
            </div>

            <Footer />
        </div>
    )
}

export default Home