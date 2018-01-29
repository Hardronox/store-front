import {GET_PRODUCTS_PENDING} from '../constants/actionTypes';

export let getProducts = (searchValue) => {
  return (dispatch) => {
    dispatch({ type: GET_PRODUCTS_PENDING, payload: searchValue });
  };
};
