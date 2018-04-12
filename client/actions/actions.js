import {
        REGISTER_USER_PENDING, LOGIN_USER_PENDING, UPDATE_USER_PENDING,
        GET_USERS_PENDING, GET_SINGLE_USER_PENDING,
        CREATE_ITEM_PENDING, UPDATE_ITEM_PENDING, DELETE_ITEM_PENDING,
        GET_ITEMS_PENDING, GET_SINGLE_ITEM_PENDING,
        GET_COMMENTS_PENDING, CREATE_COMMENT_PENDING, UPDATE_COMMENT_PENDING, DELETE_COMMENT_PENDING
} from '../constants/actionTypes';


export const getSingleUser = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_USER_PENDING, payload: id});
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch({ type: GET_USERS_PENDING});
  };
};

export const registerUser = (user) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER_PENDING, payload: user});
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_PENDING, payload: user});
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER_PENDING, payload: user});
  };
};

export const getSingleItem = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_ITEM_PENDING, payload: id});
  };
};

export const getItems = () => {
  return (dispatch) => {
    dispatch({ type: GET_ITEMS_PENDING});
  };
};

export const createItem = (item) => {
  return (dispatch) => {
    dispatch({ type: CREATE_ITEM_PENDING, payload: item});
  };
};

export const updateItem = (id) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ITEM_PENDING, payload: id});
  };
};

export const deleteItem = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ITEM_PENDING, payload: id});
  };
};

export const getComments = () => {
  return (dispatch) => {
    dispatch({ type: GET_COMMENTS_PENDING});
  };
};

export const createComment = (comment) => {
  return (dispatch) => {
    dispatch({ type: CREATE_COMMENT_PENDING, payload: comment});
  };
};

export const updateComment = (id) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_COMMENT_PENDING, payload: id});
  };
};

export const deleteComment = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_COMMENT_PENDING, payload: id});
  };
};

