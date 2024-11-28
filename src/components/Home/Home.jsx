import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Datacontext } from "../../Context/dataContext"; // Import context to set data
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import To_watch from "../To_watch/To_watch";
import Categories from "../Categories/Categories";

const Home = () => {
  const { setData } = useContext(Datacontext); // Getting setData from context

  const getMovies = async () => {
    try {
      const response = await axios.get(
        "https://streamflix-6rvf.onrender.com/api/movies/"
      );
      setData(response.data); // Updating context data
    } catch (error) {
      console.error("Error in fetching data from API:", error);
    }
  };

  useEffect(() => {
    getMovies(); // Calling getMovies to fetch data when Home loads
  }, []); // Empty dependency array to run once when the component is mounted

  return (
    <div
      className="home"
      style={{
        height: "100%",
        backgroundColor: "black",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Banner />
      <To_watch />
      <Categories />
    </div>
  );
};

export default Home;
