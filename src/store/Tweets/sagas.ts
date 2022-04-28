import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchTweets, fetchAddTweet } from '../../api/tweetApi'
import { setTweetsSuccess, setTweetsError, addTweet } from './actionCreators'
import { ITweet, FetchAddTweet, TweetsActionsTypes } from './types'

export function* fetchTweetsRequest(): Generator<unknown, void, ITweet[]> {
    try {
        const data: ITweet[] = yield call(fetchTweets)
        yield put(setTweetsSuccess(data))
    } catch (error) {
        yield put(setTweetsError('Ошибка при запросе твитов'))
    }
}

export function* addTweetRequest({ payload }: FetchAddTweet): Generator<unknown, void, ITweet> {
    try {
        const data = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullname: "Архитектурные излишества",
                username: "arkhlikbez",
                avatarUrl: "https://pbs.twimg.com/profile_images/1058468527772983301/xTP2mndN_bigger.jpg"
            }
        }
        const item = yield call(fetchAddTweet, data)
        yield put(addTweet(item))
    } catch (error) {
        console.log(error)
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsTypes.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsTypes.FETCH_ADD_TWEET, addTweetRequest)
}