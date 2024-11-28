import React, { useState, useEffect } from "react";
import "./Recommend.css";
import Thumbnail from "./Thumbnail";
import axios from "axios";

const Recommend = () => {
  const [recommend, setRecommend] = useState({});
  const [thumbnail, setThumbnail] = useState(""); // Store the image URL as a string
  const [loading, setLoading] = useState("Loading...");
  const movieArr = [
    "Avatar",
    "Inception",
    "Pirates of the Caribbean: At World's End",
    "The Dark Knight",
    "Interstellar",
  ];

  // Function to select a random movie
  const getRandomMovie = () => {
    return movieArr[Math.floor(Math.random() * movieArr.length)];
  };

  // Fetch recommendations from the API
  const getRecommendation = async () => {
    const randomMovie = getRandomMovie();
    try {
      // Fetch recommendations
      const response = await axios.get(
        `https://movie-relate.onrender.com/recommend?movie_name=${randomMovie}`
      );
      setRecommend(response.data);
    } catch (error) {
      console.error("Error in fetching data from API:", error);
      setLoading("Data not available");
    }
  };

  useEffect(() => {
    getRecommendation();
  }, []); 

  return (
    <div className="everything">
      <div className="main">
        <h1>Recommendation</h1>
        {recommend.recommendations && recommend.recommendations.length > 0 ? (
          <ul className="envelop_box">
            {recommend.recommendations.map((rec, index) => (
              <li key={index} className="envelop">
                <Thumbnail movie_title={rec.title} />
                <p className="rating">Rating: {rec.vote_average}</p>
              </li>
            ))}
          </ul>
        ) : (
          !recommend.movie_name && <p>{loading}</p>
        )}
      </div>
    </div>
  );
};

export default Recommend;
