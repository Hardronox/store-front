import {call, put, takeEvery } from 'redux-saga/effects'
import {delay } from 'redux-saga'
import {
    GET_COMMENTS_PENDING,
    GET_COMMENTS_FULFILLED,
    GET_COMMENTS_REJECTED,
    CREATE_COMMENT_PENDING,
    CREATE_COMMENT_FULFILLED,
    CREATE_COMMENT_REJECTED,
    UPDATE_COMMENT_PENDING,
    UPDATE_COMMENT_FULFILLED,
    UPDATE_COMMENT_REJECTED,
    DELETE_COMMENT_PENDING,
    DELETE_COMMENT_FULFILLED,
    DELETE_COMMENT_REJECTED,
    CREATE_REPLY_PENDING,
    CREATE_REPLY_FULFILLED,
    CREATE_REPLY_REJECTED,
    LIKE_COMMENT_PENDING,
    LIKE_COMMENT_FULFILLED,
    LIKE_COMMENT_REJECTED,
    DISLIKE_COMMENT_FULFILLED,
    DISLIKE_COMMENT_REJECTED,
    DISLIKE_COMMENT_PENDING
} from '../constants/actionTypes'

import {getCommentsApi, createCommentApi, updateCommentApi, deleteCommentApi, likeCommentApi, dislikeCommentApi, createReplyApi } from '../api/commentsApi'

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

export function* createComment(action) {
  try {
    //const keks = yield call(createCommentApi, item);
    //console.log(keks);
    // TODO: dummy for now, replace with actual response data
    yield put({ type: CREATE_COMMENT_FULFILLED, payload: action.payload })
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

export function* createReply(action) {
    try {
        //const keks = yield call(createCommentApi, item);
        //console.log(keks);
        // TODO: dummy for now, replace with actual response data
        yield put({ type: CREATE_REPLY_FULFILLED, payload: action.payload, id: action.id })
    } catch (e) {
        yield put({type: CREATE_REPLY_REJECTED, error: e.error || e.statusText})
    }
}

export function* likeComment(action) {
    try {
        // TODO: update comment's 'liked' property in the database by calling Api
        // TODO: use likeCommentApi function
        yield put({ type: LIKE_COMMENT_FULFILLED, id: action.id})
    } catch (e) {
        yield put({type: LIKE_COMMENT_REJECTED, error: e.error || e.statusText})
    }
}

export function* dislikeComment(action) {
    try {
        // TODO: update comment's 'disliked' property in the database by calling Api
        // TODO: use dislikeCommentApi function
        yield put({ type: DISLIKE_COMMENT_FULFILLED, id: action.id})
    } catch (e) {
        yield put({type: DISLIKE_COMMENT_REJECTED, error: e.error || e.statusText})
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
  yield takeEvery(CREATE_REPLY_PENDING, createReply);
  yield takeEvery(LIKE_COMMENT_PENDING, likeComment);
  yield takeEvery(DISLIKE_COMMENT_PENDING, dislikeComment);


}

export default commentSaga
