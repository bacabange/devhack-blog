import {
  REQUEST_SINGLE_POST,
  RECIEVE_SINGLE_POST,
  ERROR_FETCH_SINGLE_POST,
} from '../actions/actionsTypes/singlePostTypes';
import { apiRequest } from '../utils/api';

export const requestSinglePost = (post, loading) => {
  return {
    type: REQUEST_SINGLE_POST,
    loading,
    post,
  };
};

export const recieveSinglePost = post => {
  return {
    type: RECIEVE_SINGLE_POST,
    loading: false,
    post,
  };
};

export const errorFetchSinglePost = error => {
  return {
    type: ERROR_FETCH_SINGLE_POST,
    error,
  };
};

export const getFetch = (urlApi, method, body = {}) => {
  return dispatch => {
    // run reques posts
    dispatch(requestSinglePost({}, true));

    apiRequest(urlApi, method, body)
      .then(res => {
        dispatch(recieveSinglePost(res));
      })
      .catch(error => {
        dispatch(errorFetchSinglePost(error));
      });
  };
};
