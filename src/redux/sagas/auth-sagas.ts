import {all, call, takeLatest, put} from 'redux-saga/effects';
import {
  userLogin,
  userLoginFailure,
  userLoginSuccess,
  userLogout,
} from '../slices/auth-slice';
import {UserFormData} from '../../types/form-type';
import {IUserAuthData} from '../../types/user-type';
import {loginService} from '../../api/auth/login-service';
import {actionType} from '../../types/sagas-type';
import {UserLogoutService} from '../../api/auth/user-logout';

export function* workerLoginForm({payload}: actionType<UserFormData>) {
  try {
    const responseLogin: IUserAuthData = yield call(loginService, {
      email: payload.email,
      password: payload.password,
    });
    yield put(userLoginSuccess(responseLogin));
  } catch (err) {
    const {message} = err as Error;
    yield put(userLoginFailure(message));
  }
}

export function* workerUserLogout() {
  yield call(UserLogoutService);
}

export default function* userAuthSaga() {
  yield all([
    takeLatest(userLogin.type, workerLoginForm),
    takeLatest(userLogout.type, workerUserLogout),
  ]);
}
