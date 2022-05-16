import {AddTweetAction, Tweet, FetchAddTweet, TweetsActionsTypes, TweetsState } from "./types";

export const setTweets = () => ({type: TweetsActionsTypes.FETCH_TWEETS})

export const setTweetsSuccess = (payload: TweetsState['tweets']) => {
    return {
        type: TweetsActionsTypes.FETCH_TWEETS_SUCCESS, 
        payload
    }
}

export const setTweetsError = (payload: TweetsState['error']) => ({type: TweetsActionsTypes.FETCH_TWEETS_ERROR, payload})

export const fetchAddTweet = (payload: string): FetchAddTweet => ({type: TweetsActionsTypes.FETCH_ADD_TWEET, payload})

export const addTweet = (payload: Tweet): AddTweetAction => ({type: TweetsActionsTypes.ADD_TWEET, payload})

export const addTweetError = (payload: string) => ({type: TweetsActionsTypes.ADD_TWEET_ERROR, payload})