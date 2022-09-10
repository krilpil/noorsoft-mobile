import {all, fork} from 'redux-saga/effects';
import userAuthSaga from './auth-sagas';

export default function* rootSaga() {
  yield all([fork(userAuthSaga)]);
}
