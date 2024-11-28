import React, { useState, useEffect, useContext } from "react";
import { Datacontext } from "../../Context/dataContext";
import axios from "axios";
import Card from "./Card";

const Categories = () => {
const {data}=useContext(Datacontext)

  const filterMoviesByCategory = (categoryName) => {
    return data.filter((item) =>
      item.categories.some((cat) => cat.category_name === categoryName)
    );
  };

  const punjabiMovies = filterMoviesByCategory("Punjabi");
  const hollywoodMovies = filterMoviesByCategory("Hollywood");
  const bollywoodMovies = filterMoviesByCategory("Bollywood");
  const southMovies = filterMoviesByCategory("South indian");

  return (
    <div  id="categories" className="categories-section" style={{color:"white" , margin:"5rem 0rem"}}>
      <h1>Punjabi Movies</h1>
      {punjabiMovies.length > 0 ? (
        <Card category={punjabiMovies} />
      ) : (
        <p>No Punjabi movies available.</p>
      )}

      <h1>Hollywood Movies</h1>
      {hollywoodMovies.length > 0 ? (
        <Card category={hollywoodMovies} />
      ) : (
        <p>No Hollywood movies available.</p>
      )}

      <h1>Bollywood Movies</h1>
      {bollywoodMovies.length > 0 ? (
        <Card category={bollywoodMovies} />
      ) : (
        <p>No Bollywood movies available.</p>
      )}

      <h1>South Indian Movies</h1>
      {southMovies.length > 0 ? (
        <Card category={southMovies} />
      ) : (
        <p>No South Indian movies available.</p>
      )}
    </div>
  );
};

export default Categories;
