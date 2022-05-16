import { all } from 'redux-saga/effects'
import { tagsSaga } from './Tags/sagas';
import { tweetSaga } from './Tweet/sagas';
import { tweetsSaga } from "./Tweets/sagas";
import { userSaga } from './User/sagas';

export function* rootSaga(){
    yield all([tweetsSaga(), tagsSaga(), tweetSaga(), userSaga()])
}