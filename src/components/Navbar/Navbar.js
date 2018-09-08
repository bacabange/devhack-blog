import React, { Component } from 'react';
import Menu from './Menu';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <Link to="/" className="navbar-brand">
              {this.props.siteName}
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button">
              Menu
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <Menu />
            </div>
          </div>
        </nav>
      </div>
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
