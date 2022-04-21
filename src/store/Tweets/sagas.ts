import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchTweets } from '../../api/tweetApi'
import { setTweets, setTweetsSuccess, setTweetsError } from './actionCreators'
import { TweetsActions, TweetsActionTypes, TweetsState } from './types'

export function* fetchTweetsRequest(): Generator {
    try {
        const items = yield call(fetchTweets)
        yield put(setTweetsSuccess(items))
    } catch (error) {
        yield put(setTweetsError('Ошибка при запросе твитов'))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionTypes.FETCH_TWEETS, fetchTweetsRequest)
}