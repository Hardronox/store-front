import { call, put, takeEvery } from 'redux-saga/effects';
import {
    DELETE_VIEWED_PRODUCT_FULFILLED, DELETE_VIEWED_PRODUCT_PENDING,
    DELETE_VIEWED_PRODUCT_REJECTED,
    TOGGLE_PRODUCT_LIKE_FULFILLED,
    TOGGLE_PRODUCT_LIKE_PENDING,
    TOGGLE_PRODUCT_LIKE_REJECTED
} from "../constants/actionTypes";

// TODO: create the api and use it in the saga


export function* toggleProductLike(action) {
    try {
        // TODO: call the api to toggle product's liked property here
        //yield call(toggleProductLikeApi, action.id);
        yield put({ type: TOGGLE_PRODUCT_LIKE_FULFILLED, id: action.id })
    } catch (e) {
        yield put({type: TOGGLE_PRODUCT_LIKE_REJECTED, error: e.error || e.statusText})
    }
}

export function* deleteViewedProduct(action) {
    try {
        // TODO: call the api to actually delete the product
        //yield call(deleteViewedProductApi, action.id);
        yield put({type: DELETE_VIEWED_PRODUCT_FULFILLED, id: action.id})
    } catch (e) {
        yield put({type: DELETE_VIEWED_PRODUCT_REJECTED, error: e.error || e.statusText})
    }
}

function* viewedProductsSaga() {
    yield takeEvery(TOGGLE_PRODUCT_LIKE_PENDING, toggleProductLike);
    yield takeEvery(DELETE_VIEWED_PRODUCT_PENDING, deleteViewedProduct);
}


export default viewedProductsSaga;