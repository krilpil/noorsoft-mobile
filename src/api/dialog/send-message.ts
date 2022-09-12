import {
  addDoc,
  collection,
  doc,
  runTransaction,
  setDoc,
  Timestamp,
} from 'firebase/firestore';
import {firestoreDb} from '../../firebase/config';
import {UserSendMessageType} from '../../types/message-type';

type userSendMessageType = UserSendMessageType & {
  questionId: string;
};

export const userSendMessage = ({
  writtenBy,
  content,
  questionId,
}: userSendMessageType) => {
  try {
    addDoc(collection(firestoreDb, 'questions', questionId, 'messages'), {
      content: content,
      timestamp: Timestamp.now(),
      writtenBy: writtenBy,
    });

    setDoc(
      doc(firestoreDb, 'questions', questionId),
      {lastMessage: content},
      {merge: true},
    );

    runTransaction(firestoreDb, async transaction => {
      const userDocRef = doc(firestoreDb, 'questions', questionId);

      const userDoc = await transaction.get(userDocRef);
      if (!userDoc.exists()) {
        throw new Error('Document questions does not exist!');
      }

      const unreadCount = userDoc.data().unread;
      transaction.update(userDocRef, {unread: unreadCount + 1});
      return unreadCount;
    });
  } catch (e) {
    console.log(e);
  }
};
