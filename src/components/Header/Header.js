import React, { Component } from 'react';
import Image from './header.jpeg';

export default class Header extends Component {
  render() {
    return (
      <header className="masthead" style={{ backgroundImage: `url(${Image})` }}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Blog Devhack</h1>
                <span className="subheading">Proyecto a crear en el curso de Reactjs en DevHack.co</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
