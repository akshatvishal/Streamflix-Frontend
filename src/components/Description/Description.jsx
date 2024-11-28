import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Videoplayer from "./Videoplayer";
import Navbar from "../Navbar/Navbar";
import "./Description.css";
import Recommend from "./Recommend";

const Description = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(
          "https://streamflix-6rvf.onrender.com/api/movies/"
        );
        const foundMovie = response.data.find(
          (movie) => movie.id === parseInt(id)
        );
        if (foundMovie) {
          setMovie(foundMovie);
        } else {
          setError("Movie not found.");
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Movie not found!</p>;
  }

  const videolink = movie.videos[0].file;

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videolink,
        type: "video/mp4",
      },
    ],
  };

  return (
    <>
      <div className="Description">
        <Navbar />
        <div className="movie-details">
          <Videoplayer options={videoPlayerOptions} />
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <div className="detail">
              <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
              <p>{movie.release_date}</p>
              <p>{movie.duration}</p>
              <p>{movie.categories[0].category_name}</p>
            </div>
            <p>{movie.description}</p>
          </div>
        </div>
      </div>
      <Recommend movie={movie.title} />
    </>
  );
};

export default Description;
