import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchTweetData } from "../../api/tweetApi";
import { ITweet } from '../Tweets/types';
import { FetchTweetAction } from './types';
import { setTweetError, setTweetSuccess } from './actionCreators';
import { TweetActionsTypes } from './types';


export function* fetchTweetDataRequest({payload}: FetchTweetAction): Generator<unknown, void, ITweet[]>{
    try {
        const data: ITweet[] = yield call(fetchTweetData, payload)
        yield put(setTweetSuccess(data[0]))
    } catch (error) {
        yield put(setTweetError('Ошибка при запросе твита'))
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsTypes.FETCH_TWEET, fetchTweetDataRequest)
}