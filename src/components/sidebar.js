import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const SideBar = props => {
  return (
    <Menu width={props.width}>
      <Link className="nav-link" to={'/'}>
        Home
      </Link>
      <Link className="nav-link" to={'/about'}>
        About
      </Link>
    </Menu>
  );
};

export default SideBar;
