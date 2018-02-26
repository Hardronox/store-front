import {GET_KEKS_PENDING,
        STORE_KEK_PENDING
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
