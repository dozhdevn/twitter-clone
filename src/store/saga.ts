import { all } from 'redux-saga/effects'
import { tweetsSaga } from "./Tweets/sagas";

export function* rootSaga(){
    yield all([tweetsSaga()])
}