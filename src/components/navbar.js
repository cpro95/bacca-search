import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <ul className="nav">
        <Link className="nav-link" to={'/'}>
          <span className="text-white">Home</span>
        </Link>
        <li className="nav-item">
          <Link className="nav-link" to={'/about'}>
            <span className="text-white">About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
