import React, { useContext, useEffect, useState } from "react";
import { Datacontext } from "../../Context/dataContext";
import * as Component from "./Homecomponent";
import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const {data} = useContext(Datacontext)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000); // Automatically slide every 3 seconds
    }

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts or `isHovered` changes
    };
  }, [isHovered, data.length]);

  const handleright = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleleft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const currentBanner = data[currentIndex]?.poster;

  return (
    <>
      <div id="home" 
        className="banner"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        <div className="banner_info">
          {data[currentIndex] ? (
            <>
              <p className="duration">
                Duration: {data[currentIndex].duration}
              </p>
              <h2 className="movie-title">{data[currentIndex].title}</h2>
              <p className="description">{data[currentIndex].description}</p>
              <div className="buttons">
                <button className="butt button_watch" onClick={()=>{navigate(`/Home/${data[currentIndex].id}`)}}>
                  <span className="icon">▶</span> WATCH
                </button>
                <button className="butt button_add-list">
                  <span className="icon">+</span> ADD LIST
                </button>
              </div>
            </>
          ) : (
            <p></p>
          )}
        </div>

        <Component.Banner bgImage={currentBanner}>
          <Component.Clicking onClick={handleleft}>&lt;</Component.Clicking>
          <Component.BannerContent>
            {currentBanner ? (
              <div className="hello">
                <Component.BannerImg
                  src={currentBanner}
                  alt={data[currentIndex]?.title || "Movie Poster"}
                />
              </div>
            ) : (
              <p>Loading...</p> // Fallback when no banner image is available
            )}
          </Component.BannerContent>
          <Component.Clicking onClick={handleright}>&gt;</Component.Clicking>
        </Component.Banner>
      </div>
    </>
  );
};

export default Banner;
