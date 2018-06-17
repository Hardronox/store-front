import axios from 'axios';
import {baseUrl} from '../config';

// GET request for remote image
export function getCommentsApi () {
  return axios({
    method: 'get',
    url: `${baseUrl}/comments`
    // responseType:'stream'
  });
}

// Send a POST request
export function createCommentApi (comment) {
  axios({
    method: 'post',
    url: `${baseUrl}/comment`,
    data: comment
  });
}

export function createReplyApi (reply, id) {
  // TODO: update comments[id] replies array property
  axios({
    method: 'post',
    url: `${baseUrl}/comment`,
    data: reply
  });
}

// Send a POST request
export function updateCommentApi (comment) {
  axios({
    method: 'post',
    url: `${baseUrl}/comment`,
    data: comment
  });
}

// Send a POST request
export function deleteCommentApi (id) {
  axios({
    method: 'post',
    url: `${baseUrl}/comment/${id}`

  });
}

// Send a POST request
export function likeCommentApi (id) {
  // TODO: update comment's liked property
  axios({
    method: 'post',
    url: `${baseUrl}/comment/${id}`

  });
}

// Send a POST request
export function dislikeCommentApi (id) {
  // TODO: update comment's disliked property
  axios({
    method: 'post',
    url: `${baseUrl}/comment/${id}`

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
//       "Authorization": 'Bearer ' + localStorage.getComment('jwt')
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
