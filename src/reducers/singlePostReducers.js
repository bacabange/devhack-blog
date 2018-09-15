import { REQUEST_SINGLE_POST, RECIEVE_SINGLE_POST } from '../actions/actionsTypes/singlePostTypes';

const initialState = {
  post: {},
  error: null,
  loading: false,
};

function singlePostReducer(state = initialState, action) {
  switch (action.type) {
    case RECIEVE_SINGLE_POST:
      return Object.assign({}, state, {
        post: action.post,
        loading: action.loading,
      });
    case REQUEST_SINGLE_POST:
      return state;
    default:
      return state;
  }
}

export { singlePostReducer };
