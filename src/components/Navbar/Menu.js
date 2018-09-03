import React from 'react';
import MenuItem from './MenuItem';

const Menu = props => {
  return (
    <ul className="navbar-nav ml-auto">
      <MenuItem title="Menu Item" />
      <MenuItem title="Menu Item 2" />
      <MenuItem title="Menu Item 3" />
    </ul>
  );
};

export default Menu;
