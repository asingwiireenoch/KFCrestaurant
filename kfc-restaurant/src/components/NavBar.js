// NavBar.js
import React from 'react';
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/'><img src='https://global.kfc.com/images/footer_logo.svg' /></Link>
        <h1>
          KFC
        </h1>
        <ul className='List'>
          <li >
            About Us
          </li>
          <li >
            Sign Up
          </li>
          <li>
            Log In
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
