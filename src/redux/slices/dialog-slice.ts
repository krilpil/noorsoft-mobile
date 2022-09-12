import {IUserDialog, IUserMessage} from '../../types/message-type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IState extends IUserDialog {
  messages: IUserMessage[];
}

const initialState: IState = {
  userId: '',
  name: '',
  surname: '',
  avatar: '',
  status: 'pending',
  messages: [],
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setCurrentDialogUser: (state, action: PayloadAction<IUserDialog>) => {
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.avatar = action.payload.avatar;
      state.status = action.payload.status;
    },
    fetchCurrentMessages: (state, _action: PayloadAction<string>) => state,
    setCurrentMessages: (state, action: PayloadAction<IUserMessage[]>) => {
      state.messages = action.payload;
    },
  },
});

export const {fetchCurrentMessages, setCurrentMessages, setCurrentDialogUser} =
  dialogSlice.actions;
export default dialogSlice.reducer;
