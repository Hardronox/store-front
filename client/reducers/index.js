import { combineReducers } from 'redux';
import translationsReducer from './translationsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  translationsReducer,
  routing: routerReducer
});

export default rootReducer;
