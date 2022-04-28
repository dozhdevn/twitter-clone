import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchTweets } from '../../api/tweetApi'
import { setTweetsSuccess, setTweetsError } from './actionCreators'
import { ITweet, TweetsActionsTypes } from './types'

export function* fetchTweetsRequest(): Generator<unknown, void, ITweet[]> {
    try {
        const data: ITweet[]  = yield call(fetchTweets)
        yield put(setTweetsSuccess(data))
    } catch (error) {
        yield put(setTweetsError('Ошибка при запросе твитов'))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsTypes.FETCH_TWEETS, fetchTweetsRequest)
}