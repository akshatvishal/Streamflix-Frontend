import React from 'react'
import logo from "./assets/logo.png"
import search from "./assets/search.png"
import "./Navbar.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput.trim() !== '') {
      navigate(`/search?query=${searchInput}`);
    }
  };


  return (
    <div className='nav'>
        <img src={logo} alt="logo" />
            <ul className='section'>
                <li>Home</li>
                <li>Movies</li>
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
            </ul>
    </div>
  )
}

export default Navbar
