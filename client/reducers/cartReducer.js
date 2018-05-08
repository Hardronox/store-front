import {
  ADD_ITEM_TO_CART_FULFILLED, ADD_ITEM_TO_CART_REJECTED,
  REMOVE_ITEM_FROM_CART_FULFILLED, REMOVE_ITEM_FROM_CART_REJECTED,
  REMOVE_ALL_ITEMS_FROM_CART_FULFILLED, REMOVE_ALL_ITEMS_FROM_CART_REJECTED,
} from '../constants/actionTypes';
import {base_url} from "../config";
import {saveState, loadState} from '../utils/localStorage'

const initialState = {
  cartProducts: loadState('cartProducts') ? loadState('cartProducts') : [],
};

/**
 * reducer for companies
 * @param {Object} state - application state
 * @param {Object<type>} action
 */
const itemsReducer = (state = initialState, action) => {
  let { type } = action;

  switch(type) {

    case ADD_ITEM_TO_CART_FULFILLED: {
      let {cartProducts} = initialState;

      cartProducts.push(action.payload);
      saveState('cartProducts', cartProducts);

      return {
        ...state,
        cartProducts
      };
    }
    case ADD_ITEM_TO_CART_REJECTED: {
      return {
        ...state,
        keksStatus: action.error
      };
    }

    case REMOVE_ITEM_FROM_CART_FULFILLED: {
      let {cartProducts} = initialState;

      let newCartProducts = cartProducts.filter((item) => {
        if (item.productId !== action.payload) {
          return item;
        }
      });

      saveState('cartProducts', newCartProducts);

      return {
        ...state,
        newCartProducts
      };
    }
    case REMOVE_ITEM_FROM_CART_REJECTED: {
      return {
        ...state,
        keksStatus: action.error
      };
    }

    case REMOVE_ALL_ITEMS_FROM_CART_FULFILLED: {
      let {cartProducts} = initialState;

      cartProducts = [];
      saveState('cartProducts', cartProducts);

      return {
        ...state,
        cartProducts
      };
    }
    case REMOVE_ALL_ITEMS_FROM_CART_REJECTED: {
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
