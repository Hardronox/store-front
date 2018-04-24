import {
  REGISTER_USER_FULFILLED, REGISTER_USER_REJECTED,
  LOGIN_USER_FULFILLED, LOGIN_USER_REJECTED,
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


// Send a POST request
  export function getCartItemsApi (id) {
    axios({
      method: 'get',
      url: `${base_url}/item/${id}`,

    });
  }

// GET request for remote image
  export function addItemToCartApi() {
    return axios({
      method:'get',
      url: `${base_url}/items`,
      // responseType:'stream'
    });
  }

// Send a POST request
  export function removeItemFromCartApi(item) {
    axios({
      method: 'post',
      url: `${base_url}/item`,
      data: item
    });
  }

// Send a POST request
  export function removeAllItemsFromCartApi(item) {
    axios({
      method: 'post',
      url: `${base_url}/item`,
      data: item
    });
  }



  switch(type) {

    case REGISTER_USER_FULFILLED: {
      return {
        ...state,
        keks: action.payload
      };
    }
    case REGISTER_USER_REJECTED: {
      return {
        ...state,
        keksStatus: action.error
      };
    }


    case LOGIN_USER_FULFILLED: {
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
