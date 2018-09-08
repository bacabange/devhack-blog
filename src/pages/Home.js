import React, { Component } from 'react';
import { PostPreview } from '../components/PostPreview/';
import { getPosts } from '../utils/api';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    getPosts()
      .then(res => {
        this.setState({
          posts: res.data,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  }

  renderPosts = () => {
    const { posts } = this.state;

    return posts.map(post => <PostPreview key={post.id} id={post.id} title={post.title} body={post.body} />);
  };

  render() {
    const { loading } = this.state;

    return <React.Fragment>{loading ? 'loading...' : this.renderPosts()}</React.Fragment>;
  }
}
