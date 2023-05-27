import React from 'react'

// importing other stuff
import { Link } from 'react-router-dom'
import './Main.css'

// importing components
import Header from '../Common/Header/Header'
import Hero from '../Hero/Hero'
import Slider from '../Common/Slider/Slider'

// importing Data from Data.js
import { spaNearYou, offers } from '../../data'

const Home = () => {
    return (
        <div className='main__container'>

            <Header />

            <Hero />

            <div className="slider__outer-container">
                <div className="slider__header">
                    <h2>Grab the best deals</h2>
                    {/* <Link to={'/deals'}>more</Link> */}
                </div>
                <Slider cardList={offers} _name={"offer"} />
            </div>

        </div>
    )
}

export default Home