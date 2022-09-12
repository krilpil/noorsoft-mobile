import {all, call, put, take, takeLatest} from 'redux-saga/effects';
import {actionType} from '../../types/sagas-type';
import {fetchCurrentMessages, setCurrentMessages} from '../slices/dialog-slice';
import {EventChannel} from 'redux-saga';
import {IUserMessage} from '../../types/message-type';
import {getCurrentMessages} from '../../api/dialog/get-current-messages';

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

export default function* dialogSaga() {
  yield all([takeLatest(fetchCurrentMessages.type, workerSetCurrentMessages)]);
}
