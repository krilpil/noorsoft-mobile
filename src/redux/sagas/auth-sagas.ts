import {all, call, takeLatest, put} from 'redux-saga/effects';
import {
  userLogin,
  userLoginFailure,
  userLoginSuccess,
  userLogout,
  userSignup,
  userSignupFailure,
  userSignupSuccess,
} from '../slices/auth-slice';
import {UserLoginData, UserSignupData} from '../../types/form-type';
import {IUserAuthData} from '../../types/user-type';
import {loginService} from '../../api/auth/login-service';
import {actionType} from '../../types/sagas-type';
import {UserLogoutService} from '../../api/auth/user-logout';
import {UserSignupService} from '../../api/auth/signup-service';

export function* workerLoginForm({payload}: actionType<UserLoginData>) {
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

export function* workerSignupForm({type, payload}: actionType<UserSignupData>) {
  try {
    const responseSignup: string = yield call(UserSignupService, {
      email: payload.email,
      password: payload.password,
      name: payload.name,
      surname: payload.surname,
    });
    yield put(userSignupSuccess(responseSignup));
    yield workerLoginForm({type, payload});
  } catch (err) {
    const {message} = err as Error;
    yield put(userSignupFailure(message));
  }
}

export function* workerUserLogout() {
  yield call(UserLogoutService);
}

export default function* userAuthSaga() {
  yield all([
    takeLatest(userLogin.type, workerLoginForm),
    takeLatest(userSignup.type, workerSignupForm),
    takeLatest(userLogout.type, workerUserLogout),
  ]);
}
