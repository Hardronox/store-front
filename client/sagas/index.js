import { fork } from 'redux-saga/effects'
import {all} from 'redux-saga/effects';
import userSaga from './userSaga'
import itemSaga from './itemSaga'
import commentSaga from './commentSaga'
import cartSaga from './cartSaga'
import orderSaga from './orderSaga';
import viewedProductsSaga from './viewedProductsSaga';

/**
 * Combine sagas
 */
export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(itemSaga),
    fork(commentSaga),
    fork(cartSaga),
    fork(orderSaga),
    fork(viewedProductsSaga),
  ]);
}