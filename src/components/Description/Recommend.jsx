import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Recommend.css";

const Recommend = () => {
  const [recommend, setRecommend] = useState({});
  const [loading, setLoading] = useState("Loading...");
  const movieArr = [
    "Avatar",
    "One Man's Hero",
    "The Prisoner of Zenda",
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
      const response = await axios.get(
        `https://movie-relate.onrender.com/recommend?movie_name=${randomMovie}`
      );
      setRecommend(response.data); // Update with API response
    } catch (error) {
      console.error("Error in fetching data from API:", error);
      setLoading("Data not available");
    }
  };

  useEffect(() => {
    getRecommendation();
  }, []); // Call the API once on component mount

  return (
    <div className="everything">
      <div className="main">
        <h1>Recommendation</h1>
        {recommend.recommendations && recommend.recommendations.length > 0 ? (
          <ul className="envelop_box">
            {recommend.recommendations.map((rec, index) => (
              <li key={index} className="envelop">
                <h2>{rec.title}</h2>
                <p>Rating: {rec.vote_average}</p>
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
