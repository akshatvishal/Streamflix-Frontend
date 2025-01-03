
import { useState } from 'react'
import React from "react";
import logo from "./assets/logo.png";
import search from "./assets/search.png";
import profile from "./assets/profile.png";
import "./Navbar.css";
import { Link } from "react-scroll"; 
import { useNavigate } from "react-router-dom";

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
      <li onClick={() => navigate("/home")}>Home</li>
        <li>
          <Link to="categories" smooth={true} duration={500}>
            Movies
          </Link>
        </li>
        <li onClick={()=>navigate('/Home/List')}>My list</li>
        <li>
        <input
        className='search'
            type="text"
            placeholder="Search for a movie"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </li>
        <li>
          <div className="profilediv" onClick={()=>navigate('/profile')}>
            <img className="profile" src={profile} alt="profile"/>
            <p>Profile</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
