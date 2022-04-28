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
    FETCH_TWEETS_ERROR = 'FETCH_TWEETS_ERROR'
}

interface FetchTweetsAction extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.FETCH_TWEETS,
}

interface FetchTweetsSuccessAction extends Action<TweetsActionsTypes> {
    type: TweetsActionsTypes.FETCH_TWEETS_SUCCESS;
    payload: ITweet[]
}
interface FetchTweetsErrorAction extends Action<TweetsActionsTypes>{
    type: TweetsActionsTypes.FETCH_TWEETS_ERROR;
    payload: string;
}

export type TweetsActions = FetchTweetsAction | FetchTweetsSuccessAction | FetchTweetsErrorAction