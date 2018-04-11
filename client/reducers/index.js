import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import itemsReducer from './itemsReducer';
import commentsReducer from './commentsReducer';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  usersReducer,
  itemsReducer,
  commentsReducer,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
