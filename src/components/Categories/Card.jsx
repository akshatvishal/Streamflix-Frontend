import React from "react";
import "./Card.css"
import { useNavigate,Navigate } from "react-router-dom";

const Card = ({ category }) => {
const navigate=useNavigate();

  return (
    <div className="images">
      {
        category.map((item,i) => (
          <div className="single" key={item.id} onClick={()=>{navigate(`/Home/${item.id}`)}}>
      
            <img className="image" src={item.poster} alt=""/>
          </div>
        ))
      }
    </div>
  );
};

export default Card;
