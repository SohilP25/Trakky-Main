import React, { useRef, useState, useEffect } from "react";
import SpaCard, { OfferCard, TherapyCard } from "../../MainPage/Cards/Cards";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slide.css";
import { Pagination } from "swiper";
import "./Slide.css";
import SwiperCore, { Autoplay } from "swiper";

const Slider = (props) => {
  // using autoplay feature
  SwiperCore.use([Autoplay]);

  // for without autoplay slider
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  let card; // card contains the type of card to be fetched
  const sliderType = props._name;
  // deciding the type of card
  if (sliderType === "spa") {
    card = <SpaCard />;
  } else if (sliderType === "offer") {
    card = <OfferCard />;
  } else if (sliderType === "therapy") {
    card = <TherapyCard />;
  }
  // including styles
  const styles = {
    slider__inner_container: {
      display: "flex",
      transition: ".5s",
    },
    slider__container: {
      overflow: "hidden",
    },
    __card: {
      padding: "1rem 0.5rem",
    },
    slideIn: {
      display: "none",
    },
  };

  // for autoplay slider: only when present on viewport.
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
    );
    // console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slideIn");
      });
    }
  }, [isIntersecting]);
  return (
    <div
      className="slider__container"
      ref={ref}
      style={styles.slider__container}
    >
      {/* if component is intersecting then render autoplay else render without autoplay. */}
      {isIntersecting ? (
        <div>
          <Swiper
            className="slider__inner-container mySwiper "
            style={styles.slider__inner_container}
            autoplay={{
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              delay: 1500,
              stopOnLastSlide: true,
            }}
            slidesPerView={"auto"}
            navigation={true}
            modules={[Autoplay, Pagination]}
          >
            {props.cardList.map((data, index) => {
              return (
                <SwiperSlide
                  className="__card"
                  style={styles.__card}
                  key={index}
                >
                  <div>{React.cloneElement(card, { cardData: data })}</div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <motion.div
          className="slider__container"
          style={styles.slider__container}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            ref={carousel}
            className="slider__inner-container"
            style={styles.slider__inner_container}
          >
            {props.cardList.map((data, index) => {
              return (
                <motion.div
                  className="__card"
                  style={styles.__card}
                  key={index}
                >
                  <React.Fragment>
                    {React.cloneElement(card, { cardData: data })}
                  </React.Fragment>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
export default Slider;
