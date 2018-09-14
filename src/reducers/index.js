import { postsReducer } from './postsReducers';
import { combineReducers } from 'redux';

const Reducers = combineReducers({
  postsReducer,
});

export default Reducers;
