import React from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import To_watch from "../To_watch/To_watch";

const Home = () => {
  return (
    <div className="home" style={{height:"100%", backgroundColor:"black",width:"100vw",overflow:"hidden"}}>
      <Navbar/>
      <Banner />
      <To_watch/>
    </div>
  );
};

export default Home;
