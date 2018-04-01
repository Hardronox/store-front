import axios from 'axios';
import {base_url} from '../config';


// Send a POST request
export function getSingleUser (id) {
  axios({
    method: 'get',
    url: `${base_url}/user/${id}`,

  });
}

// GET request for remote image
export function getUsers() {
  return axios({
    method:'get',
    url: `${base_url}/users`,
    // responseType:'stream'
  });
}

// Send a POST request
export function registerUser (user) {
  axios({
    method: 'post',
    url: `${base_url}/register`,
    data: user
  });
}

// Send a POST request
export function loginUser (user) {
  axios({
    method: 'post',
    url: `${base_url}/login`,
    data: user
  });
}

// Send a POST request
export function updateUser (user) {
  axios({
    method: 'post',
    url: `${base_url}/user`,
    data: user
  });
}

// Send a POST request
export function deleteUser (id) {
  axios({
    method: 'post',
    url: `${base_url}/user/${id}`,

  });
}




//
// getAllBooksAttempt() {
//
//   $.ajax({
//     url: '/books',
//     type: 'GET',
//     dataType: 'json',
//     cache: false,
//     success: function(data) {
//       BooksStore._books= data;
//       AppActions.allBooksLoaded(BooksStore._books);
//     }.bind(this),
//     error: function(xhr, status, err) {
//       console.error(status, err);
//     }.bind(this)
//   });
// }
//
// getSingleBookAttempt(id) {
//   $.ajax({
//     url: `/books/${id}`,
//     type: 'GET',
//     dataType: 'json',
//     cache: false,
//     success: function(data) {
//       BooksStore._books= data;
//       AppActions.singleBookLoaded(BooksStore._books);
//     }.bind(this),
//     error: function(xhr, status, err) {
//       console.error(status, err);
//     }.bind(this)
//   });
// }
//
// createSingleBookAttempt(data) {
//   $.ajax({
//     url: `/books`,
//     type: 'POST',
//     dataType: 'json',
//     data: data,
//     cache: false,
//     contentType : false,
//     enctype: 'multipart/form-data',
//     processData:false,
//     headers: {
//       "Authorization": 'Bearer ' + localStorage.getUser('jwt')
//     },
//     success: function() {
//       AppActions.singleBookCreated();
//     }.bind(this),
//     error: function(response) {
//       AppActions.singleBookNotCreated(response.responseJSON);
//     }.bind(this)
//   });
// }
//
// updateSingleBookAttempt(data) {
//   $.ajax({
//     url: `/books/${data.get('id')}`,
//     type: 'POST',
//     dataType: 'json',
//     data: data,
//     cache: false,
//     contentType : false,
//     enctype: 'application/x-www-form-urlencoded',
//     processData:false,
//     success: function() {
//       AppActions.singleBookUpdated();
//     }.bind(this),
//     error: function(response) {
//       AppActions.singleBookNotUpdated(response.responseJSON);
//
//     }.bind(this)
//   });
// }
//
// deleteSingleBookAttempt(id) {
//   $.ajax({
//     url: `/books/${id}`,
//     type: 'DELETE',
//     dataType: 'json',
//     cache: false,
//     success: function() {
//       AppActions.singleBookDeleted();
//     }.bind(this),
//     error: function(xhr, status, err) {
//       console.error(status, err);
//     }.bind(this)
//   });
// }

