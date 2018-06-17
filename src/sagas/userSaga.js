import {call, put, takeEvery} from 'redux-saga/effects';
import {
  REGISTER_USER_PENDING, REGISTER_USER_FULFILLED, REGISTER_USER_REJECTED,
  LOGIN_USER_PENDING, LOGIN_USER_FULFILLED, LOGIN_USER_REJECTED,
  GET_USERS_PENDING, GET_USERS_FULFILLED, GET_USERS_REJECTED,
  GET_SINGLE_USER_PENDING, GET_SINGLE_USER_FULFILLED, GET_SINGLE_USER_REJECTED,
  UPDATE_USER_PENDING, UPDATE_USER_FULFILLED, UPDATE_USER_REJECTED} from '../constants/actionTypes';
import {getUsersApi, getSingleUserApi, registerUserApi,
  loginUserApi, deleteUserApi, updateUserApi} from '../api/usersApi';

/**
 * Generator for sending action (Tweet, Retweet ...)
 * @param {Object<Type>} action
 */

export function * registerUser (user) {
  try {
    yield call(registerUserApi, user);
    console.log('asdfasdf');
    yield put({type: REGISTER_USER_FULFILLED});
  } catch (e) {
    yield put({type: REGISTER_USER_REJECTED, error: e.error || e.statusText});
  }
}

export function * loginUser (data) {
  try {
    const user = yield call(loginUserApi, data);
    console.log(user);
    yield put({type: LOGIN_USER_FULFILLED, payload: user.data});
  } catch (e) {
    yield put({type: LOGIN_USER_REJECTED, error: e.error || e.statusText});
  }
}

export function * getUsers () {
  try {
    const user = yield call(getUsersApi);
    console.log(user);
    yield put({type: GET_USERS_FULFILLED, payload: user.data});
  } catch (e) {
    yield put({type: GET_USERS_REJECTED, error: e.error || e.statusText});
  }
}

export function * getSingleUser (id) {
  try {
    const user = yield call(getSingleUserApi, id);
    console.log(user);
    yield put({type: GET_SINGLE_USER_FULFILLED, payload: user.data});
  } catch (e) {
    yield put({type: GET_SINGLE_USER_REJECTED, error: e.error || e.statusText});
  }
}

export function * updateUser () {
  try {
    const user = yield call(updateUserApi);
    console.log(user);
    yield put({type: UPDATE_USER_FULFILLED, payload: user.data});
  } catch (e) {
    yield put({type: UPDATE_USER_REJECTED, error: e.error || e.statusText});
  }
}

export function * deleteUser () {
  try {
    const user = yield call(deleteUserApi);
    console.log(user);
    yield put({type: LOGIN_USER_FULFILLED, payload: user.data});
  } catch (e) {
    yield put({type: LOGIN_USER_REJECTED, error: e.error || e.statusText});
  }
}

/**
 * Connect actions to generators
 */
function * authSaga () {
  // yield takeEvery(SET_PREDEFINED_COMMENTS_PENDING, setPreDefinedComments)
  yield takeEvery(REGISTER_USER_PENDING, registerUser);
  yield takeEvery(LOGIN_USER_PENDING, loginUser);
  yield takeEvery(GET_USERS_PENDING, getUsers);
  yield takeEvery(GET_SINGLE_USER_PENDING, getSingleUser);
  yield takeEvery(UPDATE_USER_PENDING, updateUser);
}

export default authSaga;
