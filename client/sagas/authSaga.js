import {call, put, takeEvery } from 'redux-saga/effects'
import {delay } from 'redux-saga'
import {
  REGISTER_USER_PENDING, REGISTER_USER_FULFILLED, REGISTER_USER_REJECTED,
  LOGIN_USER_PENDING, LOGIN_USER_FULFILLED, LOGIN_USER_REJECTED} from '../constants/actionTypes'
import {getKeksApi, createKek} from '../api/ProductsApi'

/**
 * Generator for sending action (Tweet, Retweet ...)
 * @param {Object<Type>} action
 */


export function* registerUser(data) {
  console.log(data.payload);
  try {
    yield call(createKek, data.payload)
    yield put({ type: REGISTER_USER_FULFILLED, payload: data.payload })
  } catch (e) {
    yield put({type: REGISTER_USER_REJECTED, error: e.error || e.statusText})
  }
}
export function* loginUser() {
  try {
    const keks = yield call(getKeksApi)
    console.log(keks);
    yield put({ type: LOGIN_USER_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: LOGIN_USER_REJECTED, error: e.error || e.statusText})
  }
}


/**
 * Connect actions to generators
 */
function* authSaga() {
  // yield takeEvery(SET_PREDEFINED_COMMENTS_PENDING, setPreDefinedComments)
  yield takeEvery(REGISTER_USER_PENDING, registerUser)
  yield takeEvery(LOGIN_USER_PENDING, loginUser)
}

export default authSaga
