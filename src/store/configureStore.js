import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import history from '../history';

import rootSaga from '../sagas';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers';


const sagaMiddleware = createSagaMiddleware();

function configureStoreProd (initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...
    thunk,
    reactRouterMiddleware,
    sagaMiddleware
  ];

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(
    applyMiddleware(...middlewares)
  )
  );
  sagaMiddleware.run(rootSaga);

  return store;
}

function configureStoreDev (initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),
    thunk,
    reactRouterMiddleware,
    sagaMiddleware
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(
    applyMiddleware(...middlewares)
  )
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
