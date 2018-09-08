import axios from 'axios';
import * as constants from '../config/constants';

export function getPosts() {
  return axios.get(`${constants.PATH_BASE}${constants.PATH_POSTS}`);
}

export function savePost({ title, body }) {
  return axios({
    method: 'post',
    url: `${constants.PATH_BASE}${constants.PATH_POSTS}`,
    data: {
      title,
      body,
    },
  });
}
