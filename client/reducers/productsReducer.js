import {
  GET_PRODUCTS_FULFILLED
} from '../constants/actionTypes';

const initialState = {
  searchResult: [],
};

/**
 * reducer for companies
 * @param {Object} state - application state
 * @param {Object<type>} action
 */
const productsReducer = (state = initialState, action) => {
  let { type } = action;

  switch(type) {

    case GET_PRODUCTS_FULFILLED: {
      return {
        ...state,
        searchResult: action.payload,
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
