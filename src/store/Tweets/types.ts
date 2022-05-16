import { Action } from "redux";

interface IUser {
    avatarUrl: string,
    fullname: string,
    username: string
}

export interface Tweet {
    _id: string,
    text: string,
    user: IUser,
    createdAt: string
}

export interface TweetsState {
    tweets: Tweet[],
    loading: boolean,
    loadingAddTweet: boolean,
    error: null | string,
    errorAddTweet: null | string
}

export enum TweetsActionsTypes {
    FETCH_TWEETS = 'FETCH_TWEETS',
    FETCH_TWEETS_SUCCESS = 'FETCH_TWEETS_SUCCESS',
    FETCH_TWEETS_ERROR = 'FETCH_TWEETS_ERROR',
    FETCH_ADD_TWEET = 'FETCH_ADD_TWEET',
    ADD_TWEET = 'ADD_TWEET',
    ADD_TWEET_ERROR = 'ADD_TWEET_ERROR'
}

interface FetchTweetsAction extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.FETCH_TWEETS
}

interface FetchTweetsSuccessAction extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.FETCH_TWEETS_SUCCESS;
    payload: Tweet[]
}
interface FetchTweetsErrorAction extends Action<TweetsActionsTypes>{
    type: TweetsActionsTypes.FETCH_TWEETS_ERROR;
    payload: string;
}

export interface AddTweetAction extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.ADD_TWEET;
    payload: Tweet
}

export interface FetchAddTweet extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.FETCH_ADD_TWEET;
    payload: string
}

interface AddTweetError extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.ADD_TWEET_ERROR;
    payload: string
}

export type TweetsActions = FetchTweetsAction | FetchTweetsSuccessAction | FetchTweetsErrorAction | AddTweetAction | FetchAddTweet | AddTweetError