import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  productsReducer,
  routing: routerReducer
});

export default rootReducer;
