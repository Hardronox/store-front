import {
  ADD_ITEM_TO_CART_FULFILLED, ADD_ITEM_TO_CART_REJECTED,
  REMOVE_ITEM_FROM_CART_FULFILLED, REMOVE_ITEM_FROM_CART_REJECTED,
  REMOVE_ALL_ITEMS_FROM_CART_FULFILLED, REMOVE_ALL_ITEMS_FROM_CART_REJECTED,
} from '../constants/actionTypes';
import axios from "axios/index";
import {base_url} from "../config";

const initialState = {
  keks: [],
  kek: 0
};

/**
 * reducer for companies
 * @param {Object} state - application state
 * @param {Object<type>} action
 */
const itemsReducer = (state = initialState, action) => {
  let { type } = action;

  export function removeItemFromCartApi(item) {
    axios({
      method: 'post',
      url: `${base_url}/item`,
      data: item
    });
  }

  export function removeAllItemsFromCartApi(item) {
    axios({
      method: 'post',
      url: `${base_url}/item`,
      data: item
    });
  }

  switch(type) {

    case ADD_ITEM_TO_CART_FULFILLED: {
      return {
        ...state,
        keks: action.payload
      };
    }
    case ADD_ITEM_TO_CART_REJECTED: {
      return {
        ...state,
        keksStatus: action.error
      };
    }


    case ADD: {
      return {
        ...state,
        keks: action.payload
      };
    }
    case LOGIN_USER_REJECTED: {
      return {
        ...state,
        keksStatus: action.error
      };
    }



    default:
      return state;
  }
};

export default itemsReducer;
