import {
  GET_KEKS_FULFILLED, GET_KEKS_REJECTED,
  STORE_KEK_FULFILLED, STORE_KEK_REJECTED,
  INCR,
} from '../constants/actionTypes';

const initialState = {
  keks: [],
  kek: 0
};

/**
 * reducer for companies
 * @param {Object} state - application state
 * @param {Object<type>} action
 */
const campaignsReducer = (state = initialState, action) => {
  let { type } = action;

  switch(type) {
    case GET_KEKS_FULFILLED: {
      return {
        ...state,
        keks: action.payload
      };
    }
    case GET_KEKS_REJECTED: {
      return {
        ...state,
        keksStatus: action.error
      };
    }

    case STORE_KEK_FULFILLED: {
      console.log(action.payload);
      return {
        ...state,
        kekStatus: true
      };
    }

    case STORE_KEK_REJECTED: {
      console.log(action.payload);
      return {
        ...state,
        kekStatus: false
      };
    }

    case INCR: {
      return {
        kek: state.kek + 1
      };
    }

    default:
      return state;
  }
};

export default campaignsReducer;
