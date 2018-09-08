import React, { Component } from 'react';
import { PostPreview } from '../components/PostPreview/';
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { getPosts, savePost } from '../utils/api';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,

      postTitle: '',
      postBody: '',
    };
  }

  componentDidMount() {
    getPosts()
      .then(result => {
        this.setState({
          posts: result.data,
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  renderPosts = () => {
    const { posts } = this.state;

    return posts.map(post => <PostPreview key={post.id} title={post.title} body={post.body} />);
  };

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

    savePost({ title: this.state.postTitle, body: this.state.postBody })
      .then(result => {
        this.setState({
          postTitle: '',
          postBody: '',
        });

        console.log(result);
      })
      .catch(error => console.log(error));
  };

  isValid = data => {
    console.log('Se ejecutó en el padre', data);
  };

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
        <Navbar siteName="Hola" link="hola" lista="castillo" />

        <Header isValid={this.isValid} />

        <Container>
          <form onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="postTitle"
              onChange={this.handleChange}
              value={this.state.postTitle}
              placeholder="Title"
            />
            <textarea
              name="postBody"
              id=""
              cols="30"
              rows="5"
              onChange={this.handleChange}
              className="form-control mt-4"
              value={this.state.postBody}
              placeholder="Body"
            />
            <button className="btn btn-primary mt-4 mb-4" type="submit">
              Crear
            </button>
          </form>
          {loading ? <div className="alert alert-info">Loading...</div> : this.renderPosts()}
        </Container>

        <Footer />
      </React.Fragment>
    );
  }
}
