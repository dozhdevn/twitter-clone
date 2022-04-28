import { TweetActions, TweetActionsTypes, TweetState } from "./types";

const initialState: TweetState = {
    tweet: undefined,
    loading: false,
    error: null
}

export const tweetReducer = (state = initialState, action: TweetActions): TweetState => {
    switch (action.type) {
        case TweetActionsTypes.FETCH_TWEET:
            return {
                ...state,
                loading: true
            }
        case TweetActionsTypes.FETCH_TWEET_SUCCESS:
            return {
                ...state,
                loading: false,
                tweet: action.payload
            }       
        case TweetActionsTypes.FETCH_TWEET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 
        default:
            return state
    }
}