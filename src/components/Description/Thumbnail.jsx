import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Thumbnail.css"

const Thumbnail = ({ movie_title }) => {
  const [thumbnail, setThumbnail] = useState(null); // Initialize state to hold the image URL
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(false); // State for error handling

  useEffect(() => {
    // Fetch thumbnail when component mounts or movie_title changes
    const fetchThumbnail = async () => {
      setLoading(true);
      setError(false);
      try {
        const thumbnailResponse = await axios.get(
          `https://thumbnails-9n3d.onrender.com/movie_thumbnail?movie_name=${movie_title}`,
          { responseType: "blob" }
        );
        const imageURL = URL.createObjectURL(thumbnailResponse.data);
        setThumbnail(imageURL); // Update state with the fetched URL
      } catch (error) {
        console.error("Error in fetching thumbnail:", error);
        setError(true);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    if (movie_title) {
      fetchThumbnail(); // Only fetch if movie_title is provided
    }
  }, [movie_title]); // Re-run effect if movie_title changes

  if (loading) {
    return <p>Loading thumbnail...</p>; // Display loading message
  }

  if (error || !thumbnail) {
    return (
      <p>Thumbnail not available</p> // Display error message or fallback
    );
  }

  return <img className="thumbnail" src={thumbnail} alt={`Thumbnail for ${movie_title}`} />;
};

export default Thumbnail;
