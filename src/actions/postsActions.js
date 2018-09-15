import { REQUEST_POSTS, RECIEVE_POSTS, ERROR_FETCH_POSTS } from '../actions/actionsTypes/postsTypes';
import { apiRequest } from '../utils/api';

export const requestPosts = (posts, loading) => {
  return {
    type: REQUEST_POSTS,
    loading,
    posts,
  };
};

export const recievePosts = posts => {
  return {
    type: RECIEVE_POSTS,
    loading: false,
    posts,
  };
};

export const errorFetchPosts = error => {
  return {
    type: ERROR_FETCH_POSTS,
    error,
  };
};

export const getFetch = (urlApi, method, body = {}) => {
  return dispatch => {
    // run reques posts
    dispatch(requestPosts([], true));

    apiRequest(urlApi, method, body)
      .then(res => {
        dispatch(recievePosts(res.data));
      })
      .catch(error => {
        dispatch(errorFetchPosts(error));
      });
  };
};
