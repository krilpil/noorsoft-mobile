import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserAuthData} from '../../types/user-type';
import {UserLoginData, UserSignupData} from '../../types/form-type';

const initialState: IUserAuthData = {
  isAuth: false,
  email: '',
  token: '',
  uid: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // USER LOGIN
    userLogin: (state, _action: PayloadAction<UserLoginData>) => state,
    userLoginSuccess: (state, action: PayloadAction<IUserAuthData>) =>
      action.payload,
    userLoginFailure: (state, _action: PayloadAction<string>) => {
      state.isAuth = false;
      state.email = '';
      state.token = '';
      state.uid = '';
    },
    // USER SIGNUP
    userSignup: (state, _action: PayloadAction<UserSignupData>) => state,
    userSignupSuccess: (state, _action: PayloadAction<string>) => state,
    userSignupFailure: (state, _action: PayloadAction<string>) => state,
    // USER LOGOUT
    userLogout: () => initialState,
  },
});

export const {
  userLogin,
  userLoginSuccess,
  userLoginFailure,
  userLogout,
  userSignupFailure,
  userSignupSuccess,
  userSignup,
} = authSlice.actions;
export default authSlice.reducer;
