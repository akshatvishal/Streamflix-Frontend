import React from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import To_watch from "../To_watch/To_watch";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div className="home" style={{height:"100%", backgroundColor:"black",width:"100vw",overflow:"hidden"}}>
      <Navbar/>
      <Banner />
      <To_watch/>
      <Categories/>
    </div>
  );
};

export default Home;
