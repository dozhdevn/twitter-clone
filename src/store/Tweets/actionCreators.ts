import { AnyCnameRecord } from "dns";
import { ITweet, TweetsActionTypes, TweetsState } from "./types";

export const setTweets = () => ({type: TweetsActionTypes.FETCH_TWEETS})

export const setTweetsSuccess = (payload: TweetsState['tweets'] | any) => {
    return {
        type: TweetsActionTypes.FETCH_TWEETS_SUCCESS, 
        payload
    }
}

export const setTweetsError = (payload: TweetsState['error']) => ({type: TweetsActionTypes.FETCH_TWEETS_ERROR, payload})