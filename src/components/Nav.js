import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <h1 className="page-title">Book Club</h1>
      <Link className="favorites-link" to="/favorites">Your Favorites »</Link>
    </nav>
  )
}

export default Nav;
