import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './sidebar';

const Navbar = () => {
  return (
    <nav className="navbar px-0 py-2 fixed-top navbar-dark bg-dark">
      <ul className="nav">
        <li className="nav-item">
          <SideBar width={220} />
        </li>
        <li className="nav-item">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>
            <span className="text-white">Home</span>
          </Link>
        </li>
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
