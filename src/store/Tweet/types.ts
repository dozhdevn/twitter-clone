import { Action } from "redux";
import { Tweet } from "../Tweets/types";

export interface TweetState {
    tweet?: Tweet
    loading: boolean,
    error: null | string
}

export enum TweetActionsTypes {
    FETCH_TWEET = 'FETCH_TWEET',
    FETCH_TWEET_SUCCESS = 'FETCH_TWEET_SUCCESS',
    FETCH_TWEET_ERROR = 'FETCH_TWEET_ERROR'
}

export interface FetchTweetAction extends Action<TweetActionsTypes> {
    type: TweetActionsTypes.FETCH_TWEET,
    payload: string
}

interface FetchTweetSuccessAction extends Action<TweetActionsTypes> {
    type: TweetActionsTypes.FETCH_TWEET_SUCCESS;
    payload: Tweet
}
interface FetchTweetErrorAction extends Action<TweetActionsTypes>{
    type: TweetActionsTypes.FETCH_TWEET_ERROR;
    payload: string;
}

export type TweetActions = FetchTweetAction | FetchTweetSuccessAction | FetchTweetErrorAction