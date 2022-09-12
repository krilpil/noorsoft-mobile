import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserAuthData} from '../../types/user-type';
import {UserFormData} from '../../types/form-type';

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
    userLogin: (state, _action: PayloadAction<UserFormData>) => state,
    userLoginSuccess: (state, action: PayloadAction<IUserAuthData>) =>
      action.payload,
    userLoginFailure: (state, _action: PayloadAction<string>) => {
      state.isAuth = false;
      state.email = '';
      state.token = '';
      state.uid = '';
    },
    userLogout: () => initialState,
  },
});

export const {userLogin, userLoginSuccess, userLoginFailure, userLogout} =
  authSlice.actions;
export default authSlice.reducer;
