import axios from 'axios';
import {baseUrl} from '../config';
import setAuthorizationToken from '../utils/setAuthorizationToken';

// Send a POST request
export function getSingleUserApi (id) {
  axios({
    method: 'get',
    url: `${baseUrl}/user/${id}`

  });
}

// GET request for remote image
export function getUsersApi () {
  return axios({
    method: 'get',
    url: `${baseUrl}/users`
    // responseType:'stream'
  });
}

// Send a POST request
export function registerUserApi (user) {
  axios({
    method: 'post',
    url: `${baseUrl}/register`,
    data: user
  });
}

// Send a POST request
export function loginUserApi (user) {
  axios({
    method: 'post',
    url: `${baseUrl}/login`,
    data: user
  }).then((res) => {
    const {token} = res.data;
    localStorage.setItem('jwt', token);
    setAuthorizationToken(token);
    // console.log(jwt_decode(token));
  });
}

// Send a POST request
export function updateUserApi (user) {
  axios({
    method: 'post',
    url: `${baseUrl}/user`,
    data: user
  });
}

// Send a POST request
export function deleteUserApi (id) {
  axios({
    method: 'post',
    url: `${baseUrl}/user/${id}`

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
//       "Authorization": 'Bearer ' + localStorage.getUserApi('jwt')
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
