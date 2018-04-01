import {GET_KEKS_PENDING,
        STORE_KEK_PENDING,
        REGISTER_USER_PENDING, LOGIN_USER_PENDING, UPDATE_USER_PENDING,
        GET_USERS_PENDING, GET_SINGLE_USER_PENDING,
        CREATE_ITEM_PENDING, UPDATE_ITEM_PENDING, DELETE_ITEM_PENDING,
        GET_ITEMS_PENDING, GET_SINGLE_ITEM_PENDING
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














export let incr = () => {
  return (dispatch) => {
    dispatch({ type: 'INCR_ASYNC' });
  };
};

export let storeKek = (kek) => {
  return (dispatch) => {
    dispatch({ type: STORE_KEK_PENDING, payload: kek });
  };
};

export let getKeks = () => {
  return (dispatch) => {
    dispatch({ type: GET_KEKS_PENDING});
  };
};