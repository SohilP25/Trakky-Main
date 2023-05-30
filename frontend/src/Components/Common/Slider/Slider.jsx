import SpaCard, { OfferCard, TherapyCard } from "../../MainPage/Cards/Cards";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slide.css";
import SwiperCore, { Autoplay, Pagination } from 'swiper';

const Slider = (props) => {
  SwiperCore.use([Autoplay]);
  
  const sliderType = props._name;
  let card;

  if (sliderType === "spa") {
    card = <SpaCard />;
  } else if (sliderType === "offer") {
    card = <OfferCard />;
  } else if (sliderType === "therapy") {
    card = <TherapyCard />;
  }

  const styles = {
    slider__inner_container: {
      display: "flex",
      transition:".5s",
    },
    slider__container: {
      overflow: "hidden",
    },
    __card: {
      padding: "1rem 0.5rem",
    },
  };

  return (
    <div className="slider__container" style={styles.slider__container}>
      <Swiper
        
        className="slider__inner-container mySwiper "
        style={styles.slider__inner_container}
        grabCursor={true}
        autoplay={{delay:3000,disableOnInteraction:false,stopOnLastSlide:true}}
        slidesPerView={"auto"}
        navigation={true}
        modules={[Autoplay, Pagination]}
        

      >
        {props.cardList.map((data, index) => {
          return (
            <SwiperSlide className="__card" style={styles.__card} key={index}>
              <React.Fragment>
                {React.cloneElement(card, { cardData: data })}
              </React.Fragment>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
