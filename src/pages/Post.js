import React, { Component } from 'react';
import './post.css';
import { getPost } from '../utils/api';

// Consumir API para traer el detalle del post https://jsonplaceholder.typicode.com/posts/:id
export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    getPost(id)
      .then(response => {
        this.setState({
          title: response.data.title,
          body: response.data.body,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="post-detail">
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
      </div>
    );
  }
}
