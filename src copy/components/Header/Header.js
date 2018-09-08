import React, { Component } from 'react';

export default class Header extends Component {
  isValidInChild = () => {
    // validar datos
    console.log('se ejecutó en el hijo');
    this.props.isValid({ error: true, message: 'El formulario no es válido.' });
  };

  render() {
    return (
      <header className="masthead" style={{ backgroundImage: 'url(images/header.jpeg)' }}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Blog Devhack</h1>
                <span className="subheading">Proyecto a crear en el curso de Reactjs en DevHack.co</span>
                <button className="btn btn-primary" onClick={this.isValidInChild}>
                  Click
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
