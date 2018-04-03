import {call, put, takeEvery } from 'redux-saga/effects'
import {delay } from 'redux-saga'
import {
  REGISTER_USER_PENDING, REGISTER_USER_FULFILLED, REGISTER_USER_REJECTED,
  LOGIN_USER_PENDING, LOGIN_USER_FULFILLED, LOGIN_USER_REJECTED,
  GET_USERS_PENDING, GET_USERS_FULFILLED, GET_USERS_REJECTED,
  GET_SINGLE_USER_PENDING, GET_SINGLE_USER_FULFILLED, GET_SINGLE_USER_REJECTED,
  UPDATE_USER_PENDING, UPDATE_USER_FULFILLED, UPDATE_USER_REJECTED} from '../constants/actionTypes'
import {getUsersApi, getSingleUserApi, registerUserApi,
        loginUserApi, deleteUserApi, updateUserApi} from '../api/usersApi'

/**
 * Generator for sending action (Tweet, Retweet ...)
 * @param {Object<Type>} action
 */


export function* registerUser(user) {
  console.log(user);
  try {
    yield call(registerUserApi, data.payload);
    yield put({ type: REGISTER_USER_FULFILLED, payload: data.payload })
  } catch (e) {
    yield put({type: REGISTER_USER_REJECTED, error: e.error || e.statusText})
  }
}

export function* loginUser() {
  try {
    const keks = yield call(loginUserApi);
    console.log(keks);
    yield put({ type: LOGIN_USER_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: LOGIN_USER_REJECTED, error: e.error || e.statusText})
  }
}

export function* getUsers() {
  try {
    const keks = yield call(getUsersApi);
    console.log(keks);
    yield put({ type: LOGIN_USER_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: LOGIN_USER_REJECTED, error: e.error || e.statusText})
  }
}

export function* getSingleUser() {
  try {
    const keks = yield call(getSingleUserApi);
    console.log(keks);
    yield put({ type: LOGIN_USER_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: LOGIN_USER_REJECTED, error: e.error || e.statusText})
  }
}

export function* updateUser() {
  try {
    const keks = yield call(updateUserApi);
    console.log(keks);
    yield put({ type: LOGIN_USER_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: LOGIN_USER_REJECTED, error: e.error || e.statusText})
  }
}

export function* deleteUser() {
  try {
    const keks = yield call(deleteUserApi);
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
  yield takeEvery(REGISTER_USER_PENDING, registerUser);
  yield takeEvery(LOGIN_USER_PENDING, loginUser);
  yield takeEvery(GET_USERS_PENDING, getUsers);
  yield takeEvery(GET_SINGLE_USER_PENDING, getSingleUser);
  yield takeEvery(UPDATE_USER_PENDING, updateUser);
}

export default authSaga
