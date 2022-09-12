import {collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import {firestoreDb} from '../../firebase/config';
import {eventChannel} from 'redux-saga';
import {IUserMessage} from '../../types/message-type';

const queryDialog = (uid: string) => {
  return query(
    collection(firestoreDb, 'questions', uid, 'messages'),
    orderBy('timestamp', 'asc'),
  );
};

export const getCurrentMessages = (uid: string) => {
  return eventChannel(emitter => {
    const unsubscribe = onSnapshot(queryDialog(uid), messages => {
      const currentMessages: IUserMessage[] = [];
      messages.forEach(message => {
        currentMessages.push({
          content: message.data().content,
          timestamp: message.data().timestamp,
          writtenBy: message.data().writtenBy,
        });
      });
      emitter(currentMessages);
    });

    return () => {
      unsubscribe();
    };
  });
};
