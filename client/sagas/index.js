import { fork } from 'redux-saga/effects'
import {all} from 'redux-saga/effects';

import actionsTakenSaga from './actionsTakenSaga'

/**
 * Combine sagas
 */
export default function* rootSaga() {
  yield all([
    fork(actionsTakenSaga),
  ]);
}