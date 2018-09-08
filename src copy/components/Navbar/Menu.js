import React from 'react';
import MenuItem from './MenuItem';

const Menu = props => {
  return (
    <ul className="navbar-nav ml-auto">
      <MenuItem title="Home" link="/" />
      <MenuItem title="Crear Post" link="/create" />
    </ul>
  );
};

export default Menu;
