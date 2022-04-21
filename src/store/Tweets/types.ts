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

export enum TweetsActionTypes {
    FETCH_TWEETS = 'FETCH_TWEETS',
    FETCH_TWEETS_SUCCESS = 'FETCH_TWEETS_SUCCESS',
    FETCH_TWEETS_ERROR = 'FETCH_TWEETS_ERROR'
}

interface FetchTweetsAction {
    type: TweetsActionTypes.FETCH_TWEETS,
}

interface FetchTweetsSuccessAction {
    type: TweetsActionTypes.FETCH_TWEETS_SUCCESS;
    payload: ITweet[]
}
interface FetchTweetsErrorAction {
    type: TweetsActionTypes.FETCH_TWEETS_ERROR;
    payload: string;
}

export type TweetsActions = FetchTweetsAction | FetchTweetsSuccessAction | FetchTweetsErrorAction