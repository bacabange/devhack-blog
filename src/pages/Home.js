import React, { Component } from 'react';
import { PostPreview } from '../components/PostPreview/';
import { getPosts } from '../utils/api';
import * as postsActions from '../actions/postsActions';

import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    this.props.getFetch('/posts', 'get');
  }

  renderPosts = () => {
    const { posts } = this.props;

    return posts.map(post => <PostPreview key={post.id} id={post.id} title={post.title} body={post.body} />);
  };

  render() {
    const { loading } = this.props;

    return <React.Fragment>{loading ? 'loading...' : this.renderPosts()}</React.Fragment>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postsReducer.posts,
    loading: state.postsReducer.loading,
  };
}

export default connect(
  mapStateToProps,
  postsActions
)(Home);
