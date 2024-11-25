import React, { useEffect, useState } from "react";
import * as Component from "./Homecomponent";
import axios from "axios";
import "./Home.css";

const Banner = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        "https://streamflix-6rvf.onrender.com/api/movies/"
      );
      setData(response.data);
    } catch (error) {
      console.log("Error in fetching data from API:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleright = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleleft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const currentBanner = data[currentIndex]?.poster;

  return (
    <>
    <div className="banner">
    <h2 className="movie-title">{data[currentIndex]?.title}</h2>
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
