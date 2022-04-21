import { TweetsActions, TweetsActionTypes, TweetsState } from "./types"

const initialState: TweetsState = {
    tweets: [],
    loading: false,
    error: null
}

export const tweetsReducer = (state = initialState, action: TweetsActions): TweetsState => {
    switch (action.type) {
        case TweetsActionTypes.FETCH_TWEETS:
            return {
                ...state,
                loading: true
            }
        case TweetsActionTypes.FETCH_TWEETS_SUCCESS:
            return {
                ...state,
                tweets: action.payload,
                loading: false
            }
        case TweetsActionTypes.FETCH_TWEETS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}