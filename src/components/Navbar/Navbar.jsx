import React from 'react'
import logo from "./assets/logo.png"
import search from "./assets/search.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
        <img src={logo} alt="logo" />
            <ul className='section'>
                <li>Home</li>
                <li>Series</li>
                <li>Movies</li>
                <li>My list</li>
                <li><img src={search} alt="search"/></li>
            </ul>
    </div>
  )
}

export default Navbar
