import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Box.css"

const Box = () => {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Fetch data from API
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://streamflix-6rvf.onrender.com/api/movies/"
      );
      setData(response.data); // Store the data in state
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  // Run fetchMovies when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  // Render the component
  return (
    <div className="Boxes">
      {loading ? (
        <p>Loading movies...</p> // Show loading indicator while data is being fetched
      ) : (
        data.map((item, index) => (
          <div key={index} className="Box">
            <img src={item.poster} alt={item.title || "Movie Poster"} />
            <p>{item.title}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Box;
