import React, { useState } from "react";
import "./Gallery.css";

import { IoMdClose } from 'react-icons/io'


const Gallery = (props) => {
  // let data = props.photolist;

  var data = props.photos;

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <IoMdClose onClick={() => setModel(false)} />
      </div>

      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item)}
            >
              <img
                src={item}
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
