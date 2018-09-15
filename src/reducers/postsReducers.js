import { RECIEVE_POSTS, REQUEST_POSTS } from '../actions/actionsTypes/postsTypes';

const initialState = {
  posts: [],
  error: null,
  loading: false,
};

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case RECIEVE_POSTS:
      return Object.assign({}, state, {
        posts: action.posts,
        loading: action.loading,
      });
    case REQUEST_POSTS:
      return state;
    default:
      return state;
  }
}

export { postsReducer };
