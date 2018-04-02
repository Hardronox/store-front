import { fork } from 'redux-saga/effects'
import {all} from 'redux-saga/effects';

import actionsTakenSaga from './actionsTakenSaga'
import authSaga from './userSaga'
import itemSaga from './itemSaga'
import commentSaga from './commentSaga'

/**
 * Combine sagas
 */
export default function* rootSaga() {
  yield all([
    fork(actionsTakenSaga),
    fork(authSaga),
    fork(itemSaga),
    fork(commentSaga),
  ]);
}