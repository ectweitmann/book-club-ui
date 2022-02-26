import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Book_Club_Logo.png';
import '../styles/Nav.css';

const Nav = ({ location }) => {
  let navLink;
  if (location === 'favorites') {
    navLink = <Link className="landing-page-link" to="/">Return Home »</Link>
  } else {
    navLink = <Link className="favorites-link" to="/favorites">Your Favorites »</Link>
  }
  return (
    <nav className="navbar">
      <Link className="logo-link" to="/">
        <img className="logo" src={logo} alt="Book club logo"/>
      </Link>
      {navLink}
    </nav>
  )
}

export default Nav;
