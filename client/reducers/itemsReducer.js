import {
  REGISTER_USER_FULFILLED, REGISTER_USER_REJECTED,
  LOGIN_USER_FULFILLED, LOGIN_USER_REJECTED,
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
const itemsReducer = (state = initialState, action) => {
  let { type } = action;

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