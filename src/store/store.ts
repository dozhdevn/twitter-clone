import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./saga";
import { TagsState } from "./Tags/types";
import { TweetState } from "./Tweet/types";
import { TweetsState } from "./Tweets/types";
import { UserState } from "./User/types";


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleWare = createSagaMiddleware()

export interface RootState {
  tweets: TweetsState
  tags: TagsState
  tweet: TweetState,
  user: UserState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(rootSaga)