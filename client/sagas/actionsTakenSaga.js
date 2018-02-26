import {call, put, takeEvery } from 'redux-saga/effects'
import {delay } from 'redux-saga'
import {GET_KEKS_PENDING, GET_KEKS_FULFILLED, GET_KEKS_REJECTED,
        STORE_KEK_PENDING, STORE_KEK_FULFILLED, STORE_KEK_REJECTED} from '../constants/actionTypes'
import {getKeksApi, createKek} from '../api/KekApi'

/**
 * Generator for sending action (Tweet, Retweet ...)
 * @param {Object<Type>} action
 */

export function* incrementAsync() {
  try {
    yield delay(500)
    const tabi = yield call(getKek)
    yield put({ type: 'INCR', payload: {tabi} })
  } catch (e) {
    yield put({type: SET_PREDEFINED_COMMENTS_REJECTED, error: e.error || e.statusText})
  }
}

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
