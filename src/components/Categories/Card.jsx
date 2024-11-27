import React from "react";
import "./Card.css"

const Card = ({ category }) => {
  return (
    <div className="images">
      {
        category.map((item,i) => (
          <div className="single">
            <h1 className="index">{`${++i}`}</h1>
            <img className="image" src={item.poster} alt="" />
          </div>
        ))
      }
    </div>
  );
};

export default Card;
