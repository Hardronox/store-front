import { combineReducers } from 'redux';
import keksReducer from './keksReducer';
import authReducer from './usersReducer';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  keksReducer,
  authReducer,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
