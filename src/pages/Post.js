import React, { Component } from 'react';
import './post.css';

const Componente = props => {
  return <div {...props} />;
};
// Consumir API para traer el detalle del post https://jsonplaceholder.typicode.com/posts/:id
export default class Post extends Component {
  render() {
    return (
      <Componente id="1" className="post-detail">
        <h1>{this.props.match.params.id}</h1>
      </Componente>
    );
  }
}
