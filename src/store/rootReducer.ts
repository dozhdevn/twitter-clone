import { combineReducers } from "redux";
import { tweetsReducer } from "./Tweets/reducer";


export const rootReducer = combineReducers({
    tweets: tweetsReducer
})