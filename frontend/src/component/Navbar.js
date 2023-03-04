import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="">Home</NavLink>
      <NavLink to="/">Search</NavLink>
      <NavLink to="body">Login</NavLink>
      <NavLink to="about">About</NavLink>
    </div>
  );
}

export default Navbar;
