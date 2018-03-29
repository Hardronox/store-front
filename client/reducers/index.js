import { combineReducers } from 'redux';
import keksReducer from './keksReducer';
import authReducer from './authReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  keksReducer,
  authReducer,
  routing: routerReducer,
});

export default rootReducer;
