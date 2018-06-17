import {call, put, takeEvery} from 'redux-saga/effects';
import {
  GET_CART_ITEMS_PENDING, GET_CART_ITEMS_FULFILLED, GET_CART_ITEMS_REJECTED,
  ADD_ITEM_TO_CART_PENDING, ADD_ITEM_TO_CART_FULFILLED, ADD_ITEM_TO_CART_REJECTED,
  REMOVE_ITEM_FROM_CART_PENDING, REMOVE_ITEM_FROM_CART_FULFILLED, REMOVE_ITEM_FROM_CART_REJECTED,
  REMOVE_ALL_ITEMS_FROM_CART_PENDING, REMOVE_ALL_ITEMS_FROM_CART_FULFILLED, REMOVE_ALL_ITEMS_FROM_CART_REJECTED
} from '../constants/actionTypes';

/**
 * Generator for sending action (Tweet, Retweet ...)
 * @param {Object<Type>} action
 */

export function * getCartItems () {
  try {
    // yield call(getCartItemsApi, id);
    // yield put({type: GET_CART_ITEMS_FULFILLED, payload: data.payload});
  } catch (e) {
    yield put({type: GET_CART_ITEMS_REJECTED, error: e.error || e.statusText});
  }
}

export function * addItemToCart (item) {
  try {
    // var lastname = localStorage.getItem("key");
    yield put({type: ADD_ITEM_TO_CART_FULFILLED, payload: item.payload});
  } catch (e) {
    yield put({type: ADD_ITEM_TO_CART_REJECTED, error: e.error || e.statusText});
  }
}

export function * removeItemFromCart (item) {
  try {
    yield put({type: REMOVE_ITEM_FROM_CART_FULFILLED, payload: item.payload});
  } catch (e) {
    yield put({type: REMOVE_ITEM_FROM_CART_REJECTED, error: e.error || e.statusText});
  }
}

export function * removeAllItemsFromCart () {
  try {
    yield put({type: REMOVE_ALL_ITEMS_FROM_CART_FULFILLED});
  } catch (e) {
    yield put({type: REMOVE_ALL_ITEMS_FROM_CART_REJECTED, error: e.error || e.statusText});
  }
}

/**
 * Connect actions to generators
 */
function * cartSaga () {
  // yield takeEvery(SET_PREDEFINED_COMMENTS_PENDING, setPreDefinedComments)
  yield takeEvery(GET_CART_ITEMS_PENDING, getCartItems);
  yield takeEvery(ADD_ITEM_TO_CART_PENDING, addItemToCart);
  yield takeEvery(REMOVE_ITEM_FROM_CART_PENDING, removeItemFromCart);
  yield takeEvery(REMOVE_ALL_ITEMS_FROM_CART_PENDING, removeAllItemsFromCart);
}

export default cartSaga;
