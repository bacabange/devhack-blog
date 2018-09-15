import axios from 'axios';
import * as consts from '../config/constants';

export function getPosts() {
  return axios({
    method: 'get',
    url: `${consts.PATH_BASE}${consts.PATH_POSTS}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  });
}

export function getPost(id) {
  return axios({
    method: 'get',
    url: `${consts.PATH_BASE}${consts.PATH_POSTS}/${id}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  });
}

export function postPost({ title, body }) {
  return axios({
    method: 'post',
    url: `${consts.PATH_BASE}${consts.PATH_POSTS}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: {
      title,
      body,
    },
  });
}

export const apiRequest = (urlApi, method, body = {}) => {
  return axios({
    method,
    url: `${consts.PATH_BASE}${urlApi}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: body,
  });
};
