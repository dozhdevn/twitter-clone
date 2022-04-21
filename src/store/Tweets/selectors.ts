import { ITweet, TweetsState } from "./types";

interface RootState {
    tweets: TweetsState;
  }
  

export const selectTweets = (state: RootState ) => state.tweets