import {GET_KEKS_PENDING,
        STORE_KEK_PENDING,
        REGISTER_USER_PENDING, LOGIN_USER_PENDING, UPDATE_USER_PENDING,
        GET_USERS_PENDING, GET_SINGLE_USER_PENDING,
        CREATE_ITEM_PENDING, UPDATE_ITEM_PENDING, DELETE_ITEM_PENDING,
        GET_ITEMS_PENDING, GET_SINGLE_ITEM_PENDING,
        GET_COMMENTS_PENDING, CREATE_COMMENT_PENDING, UPDATE_COMMENT_PENDING, DELETE_COMMENT_PENDING
} from '../constants/actionTypes';


export let getSingleUser = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_USER_PENDING, payload: id});
  };
};

export let getUsers = () => {
  return (dispatch) => {
    dispatch({ type: GET_USERS_PENDING});
  };
};

export let registerUser = (user) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER_PENDING, payload: user});
  };
};

export let loginUser = (user) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_PENDING, payload: user});
  };
};

export let updateUser = (user) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER_PENDING, payload: user});
  };
};

export let getSingleItem = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_ITEM_PENDING, payload: id});
  };
};

export let getItems = () => {
  return (dispatch) => {
    dispatch({ type: GET_ITEMS_PENDING});
  };
};

export let createItem = (item) => {
  return (dispatch) => {
    dispatch({ type: CREATE_ITEM_PENDING, payload: item});
  };
};

export let updateItem = (id) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ITEM_PENDING, payload: id});
  };
};

export let deleteItem = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ITEM_PENDING, payload: id});
  };
};

export let getComments = () => {
  return (dispatch) => {
    dispatch({ type: GET_COMMENTS_PENDING});
  };
};

export let createComment = (comment) => {
  return (dispatch) => {
    dispatch({ type: CREATE_COMMENT_PENDING, payload: comment});
  };
};

export let updateComment = (id) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_COMMENT_PENDING, payload: id});
  };
};

export let deleteComment = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_COMMENT_PENDING, payload: id});
  };
};

