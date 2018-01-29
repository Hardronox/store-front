import { fork } from 'redux-saga/effects'
import {all} from 'redux-saga/effects';

import productsSaga from './productsSaga'

/**
 * Combine sagas
 */
export default function* rootSaga() {
  yield all([
    fork(productsSaga),
  ]);
}