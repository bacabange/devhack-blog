import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

const Menu = props => {
  return (
    <ul className="navbar-nav ml-auto">
      <MenuItem>
        <Link to="/">Inicio</Link>
      </MenuItem>

      <MenuItem>
        <Link to="/create">Crear Post</Link>
      </MenuItem>
    </ul>
  );
};

export default Menu;
