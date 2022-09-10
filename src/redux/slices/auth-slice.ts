import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserData} from '../../types/user-type';
import {UserFormData} from '../../types/form-type';

const initialState: UserData = {
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
    userLoginSuccess: (state, action: PayloadAction<UserData>) =>
      action.payload,
    userLoginFailure: (state, _action: PayloadAction<string>) => {
      state.isAuth = false;
      state.email = '';
      state.token = '';
      state.uid = '';
    },
  },
});

export const {userLogin, userLoginSuccess, userLoginFailure} =
  authSlice.actions;
export default authSlice.reducer;
