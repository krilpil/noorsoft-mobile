import {all, call, put, take, takeLatest} from 'redux-saga/effects';
import {actionType} from '../../types/sagas-type';
import {
  fetchCurrentMessages,
  setCurrentMessages,
  setDialog,
  fetchDialog,
} from '../slices/dialog-slice';
import {EventChannel} from 'redux-saga';
import {IUserMessage, UserDialogType} from '../../types/message-type';
import {getCurrentMessages} from '../../api/dialog/get-current-messages';
import {fetchUserData} from '../../api/dialog/user-get-data';

export function* workerSetCurrentMessages({payload}: actionType) {
  const currentMessagesChannel: EventChannel<IUserMessage[]> = yield call(
    getCurrentMessages,
    payload,
  );

  try {
    while (true) {
      const currentMessages: IUserMessage[] = yield take(
        currentMessagesChannel,
      );
      yield put(setCurrentMessages(currentMessages));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* workerSetDialog({payload}: actionType) {
  const userDialogChannel: EventChannel<UserDialogType> = yield call(
    fetchUserData,
    payload,
  );
  try {
    while (true) {
      const userDialog: UserDialogType = yield take(userDialogChannel);
      yield put(setDialog(userDialog));
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* dialogSaga() {
  yield all([
    takeLatest(fetchCurrentMessages.type, workerSetCurrentMessages),
    takeLatest(fetchDialog.type, workerSetDialog),
  ]);
}
