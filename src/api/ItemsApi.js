import axios from 'axios';
import {baseUrl} from '../config';

// Send a POST request
export function getSingleItemApi (id) {
  axios({
    method: 'get',
    url: `${baseUrl}/item/${id}`

  });
}

// GET request for remote image
export function getItemsApi () {
  return axios({
    method: 'get',
    url: `${baseUrl}/items`
    // responseType:'stream'
  });
}

// Send a POST request
export function createItemApi (item) {
  axios({
    method: 'post',
    url: `${baseUrl}/item`,
    data: item
  });
}

// Send a POST request
export function updateItemApi (item) {
  axios({
    method: 'post',
    url: `${baseUrl}/item`,
    data: item
  });
}

// Send a POST request
export function deleteItemApi (id) {
  axios({
    method: 'post',
    url: `${baseUrl}/item/${id}`

  });
}

// Send a POST request
export function searchItemApi (id) {
  axios({
    method: 'get',
    url: `${baseUrl}/item/${id}`

  });
}
