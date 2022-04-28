import { RootState } from "../store";
import { TweetState } from "./types";

export const selectTweet = (state: RootState): TweetState => state.tweet