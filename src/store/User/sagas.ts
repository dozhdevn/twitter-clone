import { call, put, takeLatest } from 'redux-saga/effects'
import { signIn, signUp } from '../../api/authApi'
import { fetchUserError, fetchUserSuccess } from './actionCreators'
import { FetchUserSignInAction, FetchUserSignUpAction, Status, UserActionsTypes } from './types'


export function* fetchSignInRequest({payload}: FetchUserSignInAction) {
    try {
        const { data } = yield call(signIn, payload)
        window.localStorage.setItem('token', data.token)
        yield put(fetchUserSuccess(data))
    } catch (error) {
        yield put(fetchUserError(Status.ERROR))
    }
}

export function* fetchSignUpRequest({payload}: FetchUserSignUpAction) {
    try {
        const { data } = yield call(signUp, payload)
        yield put(fetchUserSuccess(data))
    } catch (error) {
        yield put(fetchUserError(Status.ERROR))
    }
}


export function* userSaga() {
    yield takeLatest(UserActionsTypes.FETCH_USER_SIGN_IN, fetchSignInRequest)
    yield takeLatest(UserActionsTypes.FETCH_USER_SIGN_UP, fetchSignUpRequest)
}