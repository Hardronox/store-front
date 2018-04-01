import {call, put, takeEvery } from 'redux-saga/effects'
import {delay } from 'redux-saga'
import {GET_SINGLE_ITEM_PENDING, GET_SINGLE_ITEM_FULFILLED, GET_SINGLE_ITEM_REJECTED,
        GET_ITEMS_PENDING, GET_ITEMS_FULFILLED, GET_ITEMS_REJECTED,
        CREATE_ITEM_PENDING, CREATE_ITEM_FULFILLED, CREATE_ITEM_REJECTED,
        UPDATE_ITEM_PENDING, UPDATE_ITEM_FULFILLED, UPDATE_ITEM_REJECTED,
        DELETE_ITEM_PENDING, DELETE_ITEM_FULFILLED, DELETE_ITEM_REJECTED} from '../constants/actionTypes'
import {getKeksApi, createKek} from '../api/ProductsApi'

/**
 * Generator for sending action (Tweet, Retweet ...)
 * @param {Object<Type>} action
 */


export function* storeKek(data) {
  console.log(data.payload);
  try {
    yield call(createKek, data.payload)
    yield put({ type: STORE_KEK_FULFILLED, payload: data.payload })
  } catch (e) {
    yield put({type: STORE_KEK_REJECTED, error: e.error || e.statusText})
  }
}
export function* getKeks() {
  try {
    const keks = yield call(getKeksApi)
    console.log(keks);
    yield put({ type: GET_KEKS_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: GET_KEKS_REJECTED, error: e.error || e.statusText})
  }
}


/**
 * Connect actions to generators
 */
function* actionsTakenSaga() {
  // yield takeEvery(SET_PREDEFINED_COMMENTS_PENDING, setPreDefinedComments)
  yield takeEvery('INCR_ASYNC', incrementAsync)
  yield takeEvery(STORE_KEK_PENDING, storeKek)
  yield takeEvery(GET_KEKS_PENDING, getKeks)
}

export default actionsTakenSaga
