import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchTweetData } from "../../api/tweetApi";
import { Tweet } from '../Tweets/types';
import { FetchTweetAction } from './types';
import { setTweetError, setTweetSuccess } from './actionCreators';
import { TweetActionsTypes } from './types';


export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetAction): Generator<unknown, void, Tweet>{
    try {
        const data: Tweet = yield call(fetchTweetData, tweetId)
        yield put(setTweetSuccess(data))
    } catch (error) {
        yield put(setTweetError('Ошибка при запросе твита'))
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsTypes.FETCH_TWEET, fetchTweetDataRequest)
}