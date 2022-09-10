import {all, call, takeLatest, put} from 'redux-saga/effects';
import {
  userLogin,
  userLoginFailure,
  userLoginSuccess,
} from '../slices/auth-slice';
import {UserFormData} from '../../types/form-type';
import {UserData} from '../../types/user-type';
import {loginService} from '../../api/auth/login-service';
import {actionType} from '../../types/sagas-type';

export function* workerLoginForm({payload}: actionType<UserFormData>) {
  try {
    const responseLogin: UserData = yield call(loginService, {
      email: payload.email,
      password: payload.password,
    });
    yield put(userLoginSuccess(responseLogin));
  } catch (err) {
    const {message} = err as Error;
    yield put(userLoginFailure(message));
  }
}

export default function* userAuthSaga() {
  yield all([takeLatest(userLogin.type, workerLoginForm)]);
}
