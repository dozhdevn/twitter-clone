import {TweetsActionsTypes, TweetsState } from "./types";

export const setTweets = () => ({type: TweetsActionsTypes.FETCH_TWEETS})

export const setTweetsSuccess = (payload: TweetsState['tweets']) => {
    return {
        type: TweetsActionsTypes.FETCH_TWEETS_SUCCESS, 
        payload
    }
}

export const setTweetsError = (payload: TweetsState['error']) => ({type: TweetsActionsTypes.FETCH_TWEETS_ERROR, payload})