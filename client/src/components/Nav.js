import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1 nav-info">
      {' '}
      <h4>
        {' '}
        <Link to="/">Search{'  '}</Link>|
        <Link to="/saved">{'   '}Saved</Link>
      </h4>
      <div className="center center-this">
        <h3>Scrape Articles from The New York Times Website and Save Them for Later</h3>
      </div>
    </span>
  </nav>
);

export default Nav;
