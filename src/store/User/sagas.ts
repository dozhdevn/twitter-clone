import { call, put, takeLatest } from 'redux-saga/effects'
import { signIn } from '../../api/authApi'
import { fetchUserError, fetchUserSuccess } from './actionCreators'
import { FetchUserAction, Status, UserActionsTypes } from './types'


export function* fetchSignInRequest({payload}: FetchUserAction) {
    try {
        const { data } = yield call(signIn, payload)
        window.localStorage.setItem('token', data.token)
        yield put(fetchUserSuccess(data))
    } catch (error) {
        yield put(fetchUserError(Status.ERROR))
    }
}


export function* userSaga() {
    yield takeLatest(UserActionsTypes.FETCH_USER, fetchSignInRequest)
}