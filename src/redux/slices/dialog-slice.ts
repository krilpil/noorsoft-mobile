import {IUserMessage, UserDialogType} from '../../types/message-type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IState extends UserDialogType {
  messages: IUserMessage[];
}

const initialState: IState = {
  name: '',
  surname: '',
  avatar: '',
  status: 'pending',
  unread: 0,
  messages: [],
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    fetchDialog: (state, _action: PayloadAction<string>) => state,
    setDialog: (state, {payload}: PayloadAction<UserDialogType>) => {
      state.name = payload.name;
      state.surname = payload.surname;
      state.avatar = payload.avatar;
      state.status = payload.status;
      state.unread = payload.unread;
    },
    fetchCurrentMessages: (state, _action: PayloadAction<string>) => state,
    setCurrentMessages: (state, action: PayloadAction<IUserMessage[]>) => {
      state.messages = action.payload;
    },
  },
});

export const {
  fetchCurrentMessages,
  setCurrentMessages,
  setDialog,
  fetchDialog,
} = dialogSlice.actions;
export default dialogSlice.reducer;
