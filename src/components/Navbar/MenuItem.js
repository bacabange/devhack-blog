import React from 'react';

const MenuItem = props => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="index.html">
        {props.title}
      </a>
    </li>
  );
};

export default MenuItem;
