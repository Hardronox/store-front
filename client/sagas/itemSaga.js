import {call, put, takeEvery } from 'redux-saga/effects'
import {delay } from 'redux-saga'
import {GET_SINGLE_ITEM_PENDING, GET_SINGLE_ITEM_FULFILLED, GET_SINGLE_ITEM_REJECTED,
        GET_ITEMS_PENDING, GET_ITEMS_FULFILLED, GET_ITEMS_REJECTED,
        CREATE_ITEM_PENDING, CREATE_ITEM_FULFILLED, CREATE_ITEM_REJECTED,
        UPDATE_ITEM_PENDING, UPDATE_ITEM_FULFILLED, UPDATE_ITEM_REJECTED,
        DELETE_ITEM_PENDING, DELETE_ITEM_FULFILLED, DELETE_ITEM_REJECTED,
        SEARCH_ITEM_PENDING, SEARCH_ITEM_FULFILLED, SEARCH_ITEM_REJECTED} from '../constants/actionTypes'

import {getSingleItemApi, getItemsApi, createItemApi, updateItemApi, deleteItemApi, searchItemApi} from '../api/ItemsApi'

/**
 * Generator for sending action (Tweet, Retweet ...)
 * @param {Object<Type>} action
 */


export function* getSingleItem(id) {
  console.log(item);
  try {
    yield call(getSingleItemApi, id);
    yield put({ type: GET_SINGLE_ITEM_FULFILLED, payload: data.payload })
  } catch (e) {
    yield put({type: GET_SINGLE_ITEM_REJECTED, error: e.error || e.statusText})
  }
}

export function* getItems() {
  try {
    const keks = yield call(getItemsApi);
    console.log(keks);
    yield put({ type: GET_ITEMS_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: GET_ITEMS_REJECTED, error: e.error || e.statusText})
  }
}

export function* createItem(item) {
  try {
    const keks = yield call(createItemApi, item);
    console.log(keks);
    yield put({ type: CREATE_ITEM_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: CREATE_ITEM_REJECTED, error: e.error || e.statusText})
  }
}

export function* updateItem(item) {
  try {
    const keks = yield call(updateItemApi, item);
    console.log(keks);
    yield put({ type: UPDATE_ITEM_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: UPDATE_ITEM_REJECTED, error: e.error || e.statusText})
  }
}

export function* deleteItem(id) {
  try {
    const keks = yield call(deleteItemApi, id);
    console.log(keks);
    yield put({ type: DELETE_ITEM_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: DELETE_ITEM_REJECTED, error: e.error || e.statusText})
  }
}

export function* searchItem(keyword) {
  try {
    const searchValues = yield call(searchItemApi, keyword);
    console.log(searchValues);
    yield put({ type: SEARCH_ITEM_FULFILLED, payload: searchValues.data })
  } catch (e) {
    yield put({type: SEARCH_ITEM_REJECTED, error: e.error || e.statusText})
  }
}


/**
 * Connect actions to generators
 */
function* itemSaga() {
  // yield takeEvery(SET_PREDEFINED_COMMENTS_PENDING, setPreDefinedComments)
  yield takeEvery(GET_SINGLE_ITEM_PENDING, getSingleItem);
  yield takeEvery(GET_ITEMS_PENDING, getItems);
  yield takeEvery(CREATE_ITEM_PENDING, createItem);
  yield takeEvery(UPDATE_ITEM_PENDING, updateItem);
  yield takeEvery(DELETE_ITEM_PENDING, deleteItem);
  yield takeEvery(SEARCH_ITEM_PENDING, searchItem);
}

export default itemSaga
