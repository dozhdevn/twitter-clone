import { TweetsActions, TweetsActionsTypes, TweetsState } from "./types"

const initialState: TweetsState = {
    tweets: [],
    loading: false,
    error: null,
    loadingAddTweet: false,
    errorAddTweet: null
}

export const tweetsReducer = (state = initialState, action: TweetsActions): TweetsState => {
    switch (action.type) {
        case TweetsActionsTypes.FETCH_TWEETS:
            return {
                ...state,
                loading: true
            }
        case TweetsActionsTypes.FETCH_TWEETS_SUCCESS:
            return {
                ...state,
                tweets: action.payload,
                loading: false
            }
        case TweetsActionsTypes.FETCH_TWEETS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case TweetsActionsTypes.FETCH_ADD_TWEET:
            return {
                ...state,
                loadingAddTweet: true
            }
        case TweetsActionsTypes.ADD_TWEET:
            return {
                ...state,
                loadingAddTweet: false,
                tweets: [...state.tweets, action.payload]
            }
        case TweetsActionsTypes.ADD_TWEET_ERROR:
            return {
                ...state,
                loading: false,
                errorAddTweet: action.payload
            }
        default:
            return state
    }
}