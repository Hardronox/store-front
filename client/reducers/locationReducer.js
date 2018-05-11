import {GET_TRANSLATIONS_FULFILLED} from '../constants/actionTypes';

const initialState = {
  translations: {}
};

/**
 * reducer for companies
 * @param {Object} state - application state
 * @param {Object<type>} action
 */
const locationReducer = (state = initialState, action) => {
  let { type } = action;

  switch(type) {
    case GET_TRANSLATIONS_FULFILLED: {
      return {
        ...state,
        translations: action.payload
      };
    }

    default:
      return state;
  }
};

export default locationReducer;