import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class PostPreview extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="post-preview">
          <Link to={`post/${this.props.id}`}>
            <h2 className="post-title">{this.props.title}</h2>
          </Link>
          <p>{this.props.body}</p>
          <p className="post-meta">
            Posted by
            <a href="#">Algún estudiante</a>
          </p>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
};

PostPreview.defaultProps = {
  title: 'Not title',
  body: 'Not body',
};

export default PostPreview;
