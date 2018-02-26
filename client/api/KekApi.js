import axios from 'axios';



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
  //       "Authorization": 'Bearer ' + localStorage.getItem('jwt')
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



// Send a POST request
export function createKek (data) {
  axios({
    method: 'post',
    url: '/kek',
    data: {
      name: data.name,
      woah: data.woah
    }
  });
}

// GET request for remote image
export function getKeksApi() {
  return axios({
    method:'get',
    url:'http://localhost:8000/kek',
    // responseType:'stream'
  });
}