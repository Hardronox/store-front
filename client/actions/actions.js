import {GET_KEKS_PENDING,
        STORE_KEK_PENDING,
        REGISTER_USER_PENDING, LOGIN_USER_PENDING
} from '../constants/actionTypes';


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

export let registerUser = (kek) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER_PENDING, payload: kek});
  };
};

export let loginUser = (kek) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_PENDING, payload: kek});
  };
};
