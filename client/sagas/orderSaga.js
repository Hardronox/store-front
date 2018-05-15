import {call, put, takeEvery } from 'redux-saga/effects'

import {SUBMIT_ORDER_PENDING, SUBMIT_ORDER_FULFILLED, SUBMIT_ORDER_REJECTED} from '../constants/actionTypes'

import {submitOrderApi} from '../api/orderApi'

export function* submitOrder(order) {
    try {
        const response = yield call(submitOrderApi, order);
        yield put({
            type: SUBMIT_ORDER_FULFILLED,
            payload: response.data
        });
    } catch(e) {
        yield put({
            type: SUBMIT_ORDER_REJECTED,
            error: e.error || e.statusText
        })
    }
}

function* orderSaga() {
    yield takeEvery(SUBMIT_ORDER_PENDING, submitOrder);
}

export default orderSaga;
