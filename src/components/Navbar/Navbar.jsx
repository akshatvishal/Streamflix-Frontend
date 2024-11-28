import React from "react";
import logo from "./assets/logo.png";
import search from "./assets/search.png";
import profile from "./assets/profile.png";
import "./Navbar.css";
import { Link } from "react-scroll"; // Add this import
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="nav">
      <img src={logo} alt="logo" />
      <ul className="section">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="categories" smooth={true} duration={500}>
            Movies
          </Link>
        </li>
        <li onClick={()=>navigate('/Home/List')}>My list</li>
        <li>
          <img src={search} alt="search" />
        </li>
        <li>
          <div className="profilediv">
            <img className="profile" src={profile} alt="profile" />
            <p>Profile</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
