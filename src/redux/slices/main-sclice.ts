import {createSlice, isAnyOf, PayloadAction} from '@reduxjs/toolkit';
import {
  userLoginFailure,
  userLoginSuccess,
  userSignupFailure,
} from './auth-slice';

interface IInitialState {
  error: string;
}

const initialState: IInitialState = {
  error: '',
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    // ERROR
    setErrors: (state, {payload}: PayloadAction<string>) => {
      state.error = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userLoginSuccess, state => {
        state.error = '';
      })
      .addMatcher(
        isAnyOf(userLoginFailure, userSignupFailure),
        (state, {payload}) => {
          state.error = payload;
        },
      );
  },
});

export const {setErrors} = mainSlice.actions;
export default mainSlice.reducer;
