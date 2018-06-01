import {
  GET_SINGLE_ITEM_FULFILLED, GET_SINGLE_ITEM_REJECTED,
  GET_ITEMS_FULFILLED, GET_ITEMS_REJECTED,
  CREATE_ITEM_FULFILLED, CREATE_ITEM_REJECTED,
  UPDATE_ITEM_FULFILLED, UPDATE_ITEM_REJECTED,
  DELETE_ITEM_FULFILLED, DELETE_ITEM_REJECTED,
  SEARCH_ITEM_FULFILLED, SEARCH_ITEM_REJECTED
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
  let {type} = action;

  switch (type) {
  case GET_SINGLE_ITEM_FULFILLED: {
    return {
      ...state,
      keks: action.payload
    };
  }
  case GET_SINGLE_ITEM_REJECTED: {
    return {
      ...state,
      keksStatus: action.error
    };
  }

  case GET_ITEMS_FULFILLED: {
    return {
      ...state,
      keks: action.payload
    };
  }
  case GET_ITEMS_REJECTED: {
    return {
      ...state,
      keksStatus: action.error
    };
  }

  case CREATE_ITEM_FULFILLED: {
    return {
      ...state,
      keks: action.payload
    };
  }
  case CREATE_ITEM_REJECTED: {
    return {
      ...state,
      keksStatus: action.error
    };
  }

  case UPDATE_ITEM_FULFILLED: {
    return {
      ...state,
      keks: action.payload
    };
  }
  case UPDATE_ITEM_REJECTED: {
    return {
      ...state,
      keksStatus: action.error
    };
  }

  case DELETE_ITEM_FULFILLED: {
    return {
      ...state,
      keks: action.payload
    };
  }
  case DELETE_ITEM_REJECTED: {
    return {
      ...state,
      keksStatus: action.error
    };
  }

  case SEARCH_ITEM_FULFILLED: {
    return {
      ...state,
      searchResults: action.payload
    };
  }
  case SEARCH_ITEM_REJECTED: {
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
