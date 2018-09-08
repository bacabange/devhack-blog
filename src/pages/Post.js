import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}
