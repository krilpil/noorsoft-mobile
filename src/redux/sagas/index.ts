import {all, fork} from 'redux-saga/effects';
import userAuthSaga from './auth-sagas';
import dialogSaga from './dialog-sagas';

export default function* rootSaga() {
  yield all([fork(userAuthSaga), fork(dialogSaga)]);
}
