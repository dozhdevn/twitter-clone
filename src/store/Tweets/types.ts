import { Action } from "redux";

interface IUser {
    avatarUrl: string,
    fullname: string,
    username: string
}

export interface ITweet {
    _id: string,
    text: string,
    user: IUser
}

export interface TweetsState {
    tweets: ITweet[],
    loading: boolean,
    error: null | string
}

export enum TweetsActionsTypes {
    FETCH_TWEETS = 'FETCH_TWEETS',
    FETCH_TWEETS_SUCCESS = 'FETCH_TWEETS_SUCCESS',
    FETCH_TWEETS_ERROR = 'FETCH_TWEETS_ERROR',
    FETCH_ADD_TWEET = 'FETCH_ADD_TWEET',
    ADD_TWEET = 'ADD_TWEET'
}

interface FetchTweetsAction extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.FETCH_TWEETS
}

interface FetchTweetsSuccessAction extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.FETCH_TWEETS_SUCCESS;
    payload: ITweet[]
}
interface FetchTweetsErrorAction extends Action<TweetsActionsTypes>{
    type: TweetsActionsTypes.FETCH_TWEETS_ERROR;
    payload: string;
}
export interface AddTweetAction extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.ADD_TWEET;
    payload: ITweet
}

export interface FetchAddTweet extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.FETCH_ADD_TWEET;
    payload: string
}

export type TweetsActions = FetchTweetsAction | FetchTweetsSuccessAction | FetchTweetsErrorAction | AddTweetAction