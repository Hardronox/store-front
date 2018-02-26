import { combineReducers } from 'redux';
import keksReducer from './keksReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  keksReducer,
  routing: routerReducer
});

export default rootReducer;
