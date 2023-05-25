import React from "react";

import { tags } from "../../../data";
import "./Tags.css";

const Tags = () => {
  return (
    <div className="tags__container">
      <div className="slider__header">
        <h2>Find Best Spa Near Your Area.</h2>
      </div>

      <div>
        <ul className="tags-items__container">
          {
            tags.map((tagElement, index) => {
              return (
                <li key={index} className="tags-item">
                  {tagElement}
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Tags;
