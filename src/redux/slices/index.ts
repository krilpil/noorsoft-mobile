import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import dialogSlice from './dialog-slice';

export const rootReducer = combineReducers({
  auth: authSlice,
  dialog: dialogSlice,
});
