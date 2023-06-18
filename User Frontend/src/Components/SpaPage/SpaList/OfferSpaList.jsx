import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./SpaList.css";

import Hero from "../Hero/Hero";
import Footer from "../../Common/Footer/Footer";
import Slider from "../../Common/Slider/Slider";
import { popularLocations } from "../../../data";
import SpaCard from "../SpaCard/SpaCard";
import { SpaCardMini } from "../SpaCard/SpaCard";

const OfferSpaList = () => {
  const params = useParams();
  const { slug } = params;

  console.log(slug);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const width = window.innerWidth,
      height = window.innerHeight;
    return { width, height };
  }
  // Getting Spa Details
  const [offers, setOffers] = useState([]);
  const [spas, setSpas] = useState([{}]);


  useEffect(() => {
    // Getting offers starts
    const requestOption = {
      method: "GET",
      header: { "Content-Type": "application/json" },
    };
    // Getting therapy starts
    fetch("http://localhost:8080/api/v1/offer", requestOption)
      .then((res) => res.json())
      .then((data) => setOffers(data.data))
      .catch((err) => console.log(err));

    // Getting spas starts
    fetch("http://localhost:8080/api/v1/spas", requestOption)
      .then((res) => res.json())
      .then((data) => setSpas(data))
      .catch((err) => console.log(err));
  }, []);
  
  var ListValue = [{}];
  var spaNames = [];

  if (offers && spas) {
    var requiredOffers = offers.filter(offer => offer.Slug === `/${slug}`)
    spaNames = requiredOffers.map(offer => offer.Select_Spa)
    // console.log(spaNames)
    var requiredSpas = spas.filter(data => spaNames.includes(data.name))
    // console.log(requiredSpas)
    ListValue = requiredSpas
  }

  console.log(ListValue)

 
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [visible, setVisible] = useState(4);
  const [show, setShow] = useState(true);
  const length = ListValue.length;

  const showMoreItems = () => {
    if (visible < length) {
      setVisible((prevValue) => prevValue + 4);
    } else {
      setShow(false);
    }
  };

  return (
    <div>
      <Hero />
      <div className="spa_list__header">
        <h1>Best Offers For You</h1>
      </div>
      <div className="spa_list_main__container">
        <div className="spa_list__container">
          {/* Displays list of cards according to window size */}
          {{ windowDimensions }.windowDimensions.width >= 765 ? (
            <div className="spa_list">
              {ListValue.map((data, index) => {
                return (
                  <>
                    {index === 2 ? <OfferContainer  /> : <></>}
                    <>
                      <SpaCard
                        key={index}
                        name={data.name}
                        img={data.imgUrl}
                        address={data.address}
                        landmark={data.landmark}
                        openTime={data.openTime}
                        closeTime={data.closeTime}
                        city={data.City}
                        area={data.Area}
                        mobileNumber={data.mobileNumber}
                        bookingNumber={data.bookingNumber}
                        slug={data.slug}
                        premium={data.premium}
                        // location={data.location}
                        // offers={data.offers}
                        // basePrice={data.basePrice}
                        // ratings={data.ratings}
                        // reviewsCount={data.reviewsCount}
                      />
                    </>
                  </>
                );
              })}
            </div>
          ) : (
            <>
              {ListValue.map((data, index) => {
                return (
                  <>
                    {index === 2 ? <OfferContainer /> : null}
                    <SpaCardMini
                    key={index}
                    name={data.name}
                    img={data.imgUrl}
                    address={data.address}
                    landmark={data.landmark}
                    openTime={data.openTime}
                    closeTime={data.closeTime}
                    city={data.City}
                    area={data.Area}
                    mobileNumber={data.mobileNumber}
                    bookingNumber={data.bookingNumber}
                    premium={data.premium}
                    // location={data.location}
                    // offers={data.offers}
                    // basePrice={data.basePrice}
                    // ratings={data.ratings}
                    // reviewsCount={data.reviewsCount}
                    />
                  </>
                );
              })}
            </>
          )}

          <div
            className="view_more__button"
            style={{ display: show ? "block" : "none" }}
          >
            <button onClick={showMoreItems}>View More</button>
          </div>
        </div>

        {/* <PopularLocations /> */}
      </div>
      <Footer />
    </div>
  );
};

const OfferContainer = () => {
  // Getting offers starts
  const [offers, setOffers] = useState([]);
  const getOffer = () => {
    const requestOption = {
      method: "GET",
      header: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:8080/api/v1/offer", requestOption)
      .then((res) => res.json())
      .then((data) => setOffers(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getOffer();
  }, []);
  // Getting offers ends

  return (
    <div
      className="slider__outer-container offer__container"
      style={{ width: "135%" }}
    >
      <div className="slider__header">
        <h2>Grab the best deals</h2>
      </div>
      <Slider cardList={offers} _name={"offer"} />
    </div>
  );
};

const PopularLocations = () => {
  return (
    <div className="popular_location__container">
      <div className="popular_location__header">
        <h3>Searched Popular Localities</h3>
      </div>

      <div className="popular_location_list">
        <ul>
          {popularLocations.map((city, index) => {
            return (
              <li key={index}>
                <Link to={"/city"}>{city}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default OfferSpaList;
