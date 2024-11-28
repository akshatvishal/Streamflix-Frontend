
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from "react";
import logo from "./assets/logo.png";
import search from "./assets/search.png";
import profile from "./assets/profile.png";
import "./Navbar.css";
import { Link } from "react-scroll"; // Add this import

const Navbar = () => {

  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput.trim() !== '') {
      navigate(`/search?query=${searchInput}`);
    }
  };


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
        <li>My list</li>
        <li>
        <input
            type="text"
            placeholder="Search for a movie"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
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
