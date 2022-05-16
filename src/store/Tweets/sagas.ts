import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchTweets, fetchAddTweet } from '../../api/tweetApi'
import { setTweetsSuccess, setTweetsError, addTweet, addTweetError } from './actionCreators'
import { Tweet, FetchAddTweet, TweetsActionsTypes } from './types'

export function* fetchTweetsRequest(): Generator<unknown, void, Tweet[]> {
    try {
        const data: Tweet[] = yield call(fetchTweets)
        yield put(setTweetsSuccess(data))
    } catch (error) {
        yield put(setTweetsError('Ошибка при запросе твитов'))
    }
}

export function* fetchAddTweetRequest({ payload: text }: FetchAddTweet): Generator<unknown, void, Tweet> {
    try { 
        const item = yield call(fetchAddTweet, text)
        yield put(addTweet(item))
    } catch (error) {
        yield put(addTweetError('Ошибка при добавлении твита'))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsTypes.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsTypes.FETCH_ADD_TWEET, fetchAddTweetRequest)
}