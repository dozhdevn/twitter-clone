import { ITweet } from "../Tweets/types";
import { TweetActionsTypes, TweetState } from "./types";

export const setTweet = (payload?: string) => ({type: TweetActionsTypes.FETCH_TWEET, payload})

export const setTweetSuccess = (payload: ITweet) => ({type: TweetActionsTypes.FETCH_TWEET_SUCCESS, payload})

export const setTweetError = (payload: TweetState['error']) => ({type: TweetActionsTypes.FETCH_TWEET_ERROR, payload})