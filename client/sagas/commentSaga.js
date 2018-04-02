import {call, put, takeEvery } from 'redux-saga/effects'
import {delay } from 'redux-saga'
import {GET_COMMENTS_PENDING, GET_COMMENTS_FULFILLED, GET_COMMENTS_REJECTED,
        CREATE_COMMENT_PENDING, CREATE_COMMENT_FULFILLED, CREATE_COMMENT_REJECTED,
        UPDATE_COMMENT_PENDING, UPDATE_COMMENT_FULFILLED, UPDATE_COMMENT_REJECTED,
        DELETE_COMMENT_PENDING, DELETE_COMMENT_FULFILLED, DELETE_COMMENT_REJECTED} from '../constants/actionTypes'

import {getCommentsApi, createCommentApi, updateCommentApi, deleteCommentApi} from '../api/commentsApi'

/**
 * Generator for sending action (Tweet, Retweet ...)
 * @param {Object<Type>} action
 */


export function* getComments() {
  try {
    const keks = yield call(getCommentsApi);
    console.log(keks);
    yield put({ type: GET_COMMENTS_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: GET_COMMENTS_REJECTED, error: e.error || e.statusText})
  }
}

export function* createComment(item) {
  try {
    const keks = yield call(createCommentApi, item);
    console.log(keks);
    yield put({ type: CREATE_COMMENT_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: CREATE_COMMENT_REJECTED, error: e.error || e.statusText})
  }
}

export function* updateComment(item) {
  try {
    const keks = yield call(updateCommentApi, item);
    console.log(keks);
    yield put({ type: UPDATE_COMMENT_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: UPDATE_COMMENT_REJECTED, error: e.error || e.statusText})
  }
}

export function* deleteComment(id) {
  try {
    const keks = yield call(deleteCommentApi, id);
    console.log(keks);
    yield put({ type: DELETE_COMMENT_FULFILLED, payload: keks.data })
  } catch (e) {
    yield put({type: DELETE_COMMENT_REJECTED, error: e.error || e.statusText})
  }
}


/**
 * Connect actions to generators
 */
function* commentSaga() {
  yield takeEvery(GET_COMMENTS_PENDING, getComments);
  yield takeEvery(CREATE_COMMENT_PENDING, createComment);
  yield takeEvery(UPDATE_COMMENT_PENDING, updateComment);
  yield takeEvery(DELETE_COMMENT_PENDING, deleteComment);
}

export default commentSaga
