import { postsReducer } from './postsReducers';
import { singlePostReducer } from './singlePostReducers';
import { combineReducers } from 'redux';

const Reducers = combineReducers({
  postsReducer,
  singlePostReducer,
});

export default Reducers;
