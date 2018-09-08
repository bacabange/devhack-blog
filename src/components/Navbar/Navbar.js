import React, { Component } from 'react';
import Menu from './Menu';
import { PropTypes } from 'prop-types';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            {this.props.apellido}
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {/* Menu */}
            <Menu />
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  siteName: PropTypes.string,
};

Navbar.defaultProps = {
  siteName: 'Stiven Castillo',
};

export default Navbar;
