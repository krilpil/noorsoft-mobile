import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import dialogSlice from './dialog-slice';
import mainSlice from './main-sclice';

export const rootReducer = combineReducers({
  auth: authSlice,
  dialog: dialogSlice,
  main: mainSlice,
});
