import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SpaProfile.css";

import spaImage1 from "../../../Assets/images/spa/spa-image1.png";
import spaImage2 from "../../../Assets/images/spa/spa-image2.png";
import spaImage3 from "../../../Assets/images/spa/spa-image3.png";
import spaImage4 from "../../../Assets/images/spa/spa-image4.png";
import spaImage5 from "../../../Assets/images/spa/spa-image5.png";
import Star from "./../../../Assets/images/icons/star.svg";
import Phone from "./../../../Assets/images/icons/phone.svg";
import Man from "./../../../Assets/images/icons/man.svg";
import Grids from "./../../../Assets/images/icons/four-grids.svg";

import Hero from "./../Hero/Hero";
import Footer from "./../../Common/Footer/Footer";

import { MdFavoriteBorder } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { RiShareBoxLine } from "react-icons/ri";
import Slider from "../../Common/Slider/Slider";
import { spaProfile, spaServices, spaOffers, spaFacilitiesData, spaRoomPhotos, spaProfilePhotos } from "../../../data";
import Popup from "../../Common/Popup/Popup";
import Gallery from "../../Common/Gallery/Gallery";

// window dimensions
function getWindowDimensions() {
  const width = window.innerWidth,
    height = window.innerHeight;
  return { width, height };
}


const SpaProfile = () => {


  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let spa = "Aroma The Luxurious Spa";

  const [isLiked, setIsLiked] = useState(false)

  const [spaProfilePhotosTrigger, setSpaProfilePhotosTrigger] = useState(false)

  return (
    <>
      <Hero />

      <div className="showPhotos">
        <Popup trigger={spaProfilePhotosTrigger}>
          <div className="topbar"
          style={{
            width: "98%",
            margin: "1rem 1%",
            display: "flex",
            justifyContent: "flex-end"
          }}>

          <button
            onClick={() => setSpaProfilePhotosTrigger(false)}
            style={{
              padding: "0.7rem 1.2rem",
              borderRadius: "10px",
              color: "white",
              backgroundColor: "#512DC8"
            }}
            >Close</button>
          </div>

          <Gallery photos={spaProfilePhotos} />

        </Popup>
      </div>

      {/* Altering Grid layout for smaller devices */}
      {{ windowDimensions }.windowDimensions.width >= 600 ? (
        <div className="spa-profile__container">
          <div className="spa-description__container">
            <div className="spa-images__container">
              <div className="image-1">
                <img src={spaImage1} alt="" />
              </div>
              <div className="image-2">
                <img src={spaImage2} alt="" />
              </div>
              <div className="image-3">
                <img src={spaImage3} alt="" />
              </div>
              <div className="image-4">
                <img src={spaImage4} alt="" />
              </div>
              <div className="image-5">
                <img src={spaImage5} alt="" />
                <div className="show-all-photos">
                  <button onClick={() => setSpaProfilePhotosTrigger(true)}>
                    <img src={Grids} alt="" />Show all photos
                  </button>
                </div>
              </div>
            </div>
            <div className="spa-information__container">
              <div className="spa-information-title">
                <h1>{spa}</h1>
                <div className="spa-information-like-share">
                  <li className="spa-like">
                    {
                      isLiked ? (
                        <>
                          <FcLike onClick={() => setIsLiked(false)} />
                          Liked
                        </>
                      ) : (
                        <>
                          <MdFavoriteBorder onClick={() => setIsLiked(true)} />
                          Like
                        </>
                      )
                    }
                  </li>
                  <li className="spa-share">
                    <RiShareBoxLine />
                    Share
                  </li>
                </div>
              </div>
              <div className="spa-information-subtitle">
                <h3
                  style={{
                    color: "#6B7280",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "30px",
                    width: "70%",
                  }}
                >
                  203, Sarthak Pulse Mall, Second Floor, PDPU Circle, Bhajipura,
                  Service Rd, Kudasan, Gandhinagar, Gujarat 382421
                </h3>
                <div className="spa-information-ratings-reviews">
                  <li className="spa-ratings">
                    <img src={Star} alt="" draggable="false" />
                    5.0
                  </li>
                  <li className="spa-reviews">(318 Reviews)</li>
                </div>
              </div>
              <div className="spa-information-tags-offers">
                <div className="spa-information-tags">
                  <li>Premium</li>
                  <li>Luxurious</li>
                  <li>Trending</li>
                </div>
                <div className="spa-information-offer">
                  <li>COUPLE THERAPY 50% OFF</li>
                </div>
              </div>
              <div className="spa-information-contact">
                <div className="spa-information-bookings">
                  <li>Book Now</li>
                  <li>Call Now</li>
                  <li>Get Directions</li>
                </div>
                <div className="spa-information-phone-price">
                  <li className="spa-phone">
                    <img src={Phone} alt="" draggable="false" />
                    096670 50051
                  </li>
                  <li className="spa-price">
                    <img src={Man} alt="" draggable="false" />₹ 999 Onwards
                  </li>
                </div>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="spa-profile-mini__container">
          <div className="spa-information-title" style={{ margin: "0 .8rem" }}>
            <div
              className="spa-information-ratings-reviews"
              style={{ fontSize: "1rem", gap: ".5rem" }}
            >
              <li className="spa-ratings">
                <img src={Star} alt="" />
                5.0
              </li>
              <li className="spa-reviews">(318 Reviews)</li>
            </div>
            <div
              className="spa-information-like-share"
              style={{ fontSize: "1rem", gap: ".5rem" }}
            >
              <li className="spa-like">
                {
                  isLiked ? (
                    <>
                      <FcLike onClick={() => setIsLiked(false)} />
                      Liked
                    </>
                  ) : (
                    <>
                      <MdFavoriteBorder onClick={() => setIsLiked(true)} />
                      Like
                    </>
                  )
                }
              </li>
              <li className="spa-share">
                <RiShareBoxLine />
                Share
              </li>
            </div>
          </div>
          <Slider cardList={spaProfile} _name="spaProfile" />

          <div className="spa-information-mini-title">
            <h2>{spa}</h2>
            <h3
              style={{
                color: "#6B7280",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                textAlign: "justify",
              }}
            >
              203, Sarthak Pulse Mall, Second Floor, PDPU Circle, Bhajipura,
              Service Rd, Kudasan, Gandhinagar, Gujarat 382421
            </h3>
            <div
              className="spa-information-tags"
              style={{ justifyContent: "flex-start" }}
            >
              <li>Premium</li>
              <li>Luxurious</li>
              <li>Trending</li>
            </div>

            <div
              className="spa-information-phone-price"
              style={{ justifyContent: "space-between" }}
            >
              <li className="spa-phone" style={{ fontSize: "1rem" }}>
                <img
                  src={Phone}
                  alt=""
                  draggable="false"
                  style={{ width: "1rem", height: "1rem" }}
                />
                096670 50051
              </li>
              <li className="spa-price" style={{ fontSize: "1rem" }}>
                <img
                  src={Man}
                  alt=""
                  draggable="false"
                  style={{ width: "1rem", height: "1rem" }}
                />
                ₹ 999 Onwards
              </li>
            </div>
            <div
              className="spa-information-contact"
              style={{ padding: "7.5px 0" }}
            >
              <div className="spa-information-bookings">
                <li>Book Now</li>
                <li>Call Now</li>
                <li>Get Directions</li>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="spa_offers-services__container">
        <div className="spa_profile__left_container">
          <Services />
        </div>

        <div className="spa_profile__right_container">
          <Offers />
          <SpaFacilities spaName={spa} />
        </div>
      </div>

      <AboutUsSpa />


      <hr className="hr_line" />

      <SpaRooms />

      <Footer />
    </>
  );
};

const SpaRooms = () => {
  return (
    <div className="spa_rooms_slider__container">
      <div className="servos__header">
        <h2>Our Room Photos</h2>
      </div>

      <Slider cardList={spaRoomPhotos} _name={"spaRooms"} />

    </div>
  )
}


// I'm giving 'servos' as classname to some divs because there are some
// properties of services and offers are same, so for them I'm using 
// 'servos' as a common name 


const Services = () => {
  const [visible, setVisible] = useState(5)
  const length = spaServices.length
  const [show, setShow] = useState(true)

  function showMoreItems() {
    if (visible < length) {
      setVisible(prevValue => prevValue + 5)
    } else {
      setShow(false)
    }
  }

  return (
    <div className="services__container">
      <div className="servos__header">
        <h2>Services</h2>
      </div>

      <div className="servos__list">
        <ul>
          {
            spaServices.slice(0, visible).map((therapy, index) => {
              return (
                <li key={index}>
                  <div className="services_list__container">
                    <div className="service_list__left_container">

                      <div className="service_name">
                        <h3>{therapy.therapyName}</h3>
                      </div>
                      <div className="service_description">
                        <p>{therapy.description}</p>
                      </div>
                    </div>

                    <div className="service_list__right_container">
                      <div className="service_price">
                        <p><span>₹ {therapy.price}</span>  / 60 Min </p>
                      </div>
                      <div className="services__button">
                        <Link>Call Now</Link>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>

      </div>
      <div className="view_more__button"
        style={{ display: show ? "block" : "none" }}>
        <button onClick={showMoreItems}>View More</button>
      </div>
    </div>
  )
}

const Offers = () => {
  const [visible, setVisible] = useState(3)
  const length = spaServices.length
  const [show, setShow] = useState(true)

  function showMoreItems() {
    if (visible < length) {
      setVisible(prevValue => prevValue + 3)
    } else {
      setShow(false)
    }
  }

  return (
    <div className="spa_offers__container">
      <div className="servos__header">
        <h2>Offers</h2>
      </div>

      <div className="servos__list">
        <ul>
          {
            spaOffers.slice(0, visible).map((therapy, index) => {
              return (
                <li key={index}>
                  <div className="offers_list__container">
                    <div className="offers_list__upper_container">

                      <div className="offers_name">
                        <h3>{therapy.offerName}</h3>
                      </div>
                      <div className="offers_description">
                        <p>{therapy.description}</p>
                      </div>
                    </div>

                    <div className="offers_list__bottom_container">
                      <div className="offers_price">
                        <p><span>₹ {therapy.price}</span>  / 60 Min </p>
                      </div>
                      <div className="offers__button">
                        <Link>Call Now</Link>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>

      </div>
      <div className="view_more__button"
        style={{ display: show ? "block" : "none" }}>
        <button onClick={showMoreItems}>View More</button>
      </div>
    </div>
  )
}

const SpaFacilities = ({ spaName }) => {

  const spaData = spaFacilitiesData.find(
    spa => spa.spaname === spaName
  );

  const facilities = spaData ? spaData.spafacilities : ["Not found"]




  return (
    <div className="spa_facility__container">
      <div className="servos__header">
        <h2>What this place offers</h2>
      </div>

      <div className="spa_facility_list">
        <ul>
          {
            facilities.map((data, index) => {
              return (
                <li key={index}>

                  <div className="spa_facility_icon">
                    <img src={require(`./../../../Assets/images/icons/${data.iconName}`)} alt="" />
                  </div>
                  <div className="spa_facility__name">
                    <p>{data.name}</p>
                  </div>

                </li>
              )
            })
          }
        </ul>
      </div>

    </div>
  )
}


const AboutUsSpa = () => {
  return (
    <div className="spa_about_us__container">
      <div className="servos__header">
        <h2>About Us</h2>
      </div>

      <div className="spa_about_us__description">
        <p>Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.</p>

        <p>Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44.Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.</p>

        <p>Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44.</p>

        <p>...</p>

        <p>...</p>
      </div>

      <div className="spa_show_more__button">
        <Link>Show more</Link>
      </div>
    </div>
  )
}
export default SpaProfile;