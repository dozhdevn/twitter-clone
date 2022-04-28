import { combineReducers } from "redux";
import { tagsReducer } from "./Tags/reducer";
import { tweetReducer } from "./Tweet/reducer";
import { tweetsReducer } from "./Tweets/reducer";


export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer
})