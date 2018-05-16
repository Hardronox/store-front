import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import itemsReducer from './itemsReducer';
import commentsReducer from './commentsReducer';
import locationReducer from './locationReducer';
import cartReducer from './cartReducer';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  usersReducer,
  itemsReducer,
  commentsReducer,
  locationReducer,
  cartReducer,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
