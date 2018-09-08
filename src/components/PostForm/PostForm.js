import React, { Component } from 'react';
import { postPost } from '../../utils/api';
import { Form, Input, TextArea, Button } from '../Form';

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  handleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    postPost(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const { title, body } = this.state;
    return (
      <Form className="form-post" onSubmit={this.handleSubmit}>
        <h2>Create Post</h2>
        <Input
          className="form-control mb-4"
          name="title"
          onChange={this.handleChange}
          placeholder="Title"
          value={title}
        />
        <TextArea
          className="form-control mb-4"
          name="body"
          onChange={this.handleChange}
          placeholder="Content"
          rows={7}
          value={body}
        />
        <Button className="btn btn-primary">Submit</Button>
      </Form>
    );
  }
}
