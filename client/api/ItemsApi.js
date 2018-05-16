import axios from 'axios';
import {base_url} from '../config';


// Send a POST request
export function getSingleItemApi (id) {
  axios({
    method: 'get',
    url: `${base_url}/item/${id}`,

  });
}

// GET request for remote image
export function getItemsApi() {
  return axios({
    method:'get',
    url: `${base_url}/items`,
    // responseType:'stream'
  });
}

// Send a POST request
export function createItemApi(item) {
  axios({
    method: 'post',
    url: `${base_url}/item`,
    data: item
  });
}

// Send a POST request
export function updateItemApi(item) {
  axios({
    method: 'post',
    url: `${base_url}/item`,
    data: item
  });
}

// Send a POST request
export function deleteItemApi(id) {
  axios({
    method: 'post',
    url: `${base_url}/item/${id}`,

  });
}

// Send a POST request
export function searchItemApi(id) {
  axios({
    method: 'get',
    url: `${base_url}/item/${id}`,

  });
}

