import React, { useEffect, useRef } from "react";
import SpaCard, { OfferCard, SpecialIconCard, TherapyCard } from "../Cards/Card.jsx"

import { motion } from "framer-motion"
import { useState } from "react";

const Slider = (props) => {
  const [width, setWidth] = useState(0)
  const carousel = useRef();

  const sliderType = props._name;
  let card;

  
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])


  if (sliderType === "spa") {
    card = <SpaCard />
  }
  else if (sliderType === "offer") {
    card = <OfferCard />
  }
  else if (sliderType === "special_icons") {
    card = <SpecialIconCard />
  }
  else if (sliderType === "therapy_catagory") {
    card = <TherapyCard />
  }

  
  const styles = {
    slider__inner_container: {
      display: "flex"
    },
    slider__container: {
      overflow: "hidden"
    },
    __card: {
      padding: "1rem 0.5rem"
    }
  }


  return (
    <motion.div className="slider__container" style={styles.slider__container}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        ref={carousel}
        className="slider__inner-container"
        style={styles.slider__inner_container}
      >
        {
          props.cardList.map((data, index) => {
            return (
              <motion.div className="__card" style={styles.__card}>
                <React.Fragment key={index}>{React.cloneElement(card, { cardData: data })}</React.Fragment>
              </motion.div>
            )
          })
        }
      </motion.div>
    </motion.div>
  );
};


export default Slider;