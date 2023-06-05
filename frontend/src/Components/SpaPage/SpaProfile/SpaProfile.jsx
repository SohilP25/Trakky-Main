import React, { useEffect, useState } from "react";
import "./SpaProfile.css";
import Hero from "./../Hero/Hero";
import Footer from "./../../Common/Footer/Footer";
import spaImage1 from "../../../Assets/images/spa/spa-image1.png";
import spaImage2 from "../../../Assets/images/spa/spa-image2.png";
import spaImage3 from "../../../Assets/images/spa/spa-image3.png";
import spaImage4 from "../../../Assets/images/spa/spa-image4.png";
import spaImage5 from "../../../Assets/images/spa/spa-image5.png";
import Star from "./../../../Assets/images/icons/star.svg";
import Phone from "./../../../Assets/images/icons/phone.svg";
import Man from "./../../../Assets/images/icons/man.svg";
import Grids from "./../../../Assets/images/icons/four-grids.svg";
import { BiHeart } from "react-icons/bi";
import { RiShareBoxLine } from "react-icons/ri";
import Slider from "../../Common/Slider/Slider";
import { spaProfile } from "../../../data";

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
  return (
    <>
      <Hero />
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
                  <button>
                    <img src={Grids}></img>Show all photos
                  </button>
                </div>
              </div>
            </div>
            <div className="spa-information__container">
              <div className="spa-information-title">
                <h1>Aroma The Luxurious Spa</h1>
                <div className="spa-information-like-share">
                  <li className="spa-like">
                    <BiHeart />
                    Like
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
                    width: "50%",
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
          <div className="spa-information-title" style={{ margin:"0 .8rem" }}>
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
                <BiHeart />
                Like
              </li>
              <li className="spa-share">
                <RiShareBoxLine />
                Share
              </li>
            </div>
          </div>
          <Slider cardList={spaProfile} _name="spaProfile" />

          <div className="spa-information-mini-title">
            <h2>Aroma The Luxurious Spa</h2>
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
      <Footer />
    </>
  );
};

export default SpaProfile;