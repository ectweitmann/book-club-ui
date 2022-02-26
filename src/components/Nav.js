import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Book_Club_Logo.png';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <Link className="landing-page-link" to="/">
        <img className="logo" src={logo} alt="Book club logo"/>
      </Link>
      <Link className="favorites-link" to="/favorites">Your Favorites »</Link>
    </nav>
  )
}

export default Nav;
