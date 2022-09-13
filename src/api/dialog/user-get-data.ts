import {doc, DocumentReference, getDoc, onSnapshot} from 'firebase/firestore';
import {firestoreDb} from '../../firebase/config';
import {IQuestionData, IUserData} from '../../types/user-type';
import {eventChannel} from 'redux-saga';

const docUserRef = (userId: string) => {
  return doc(firestoreDb, 'users', userId) as DocumentReference<IUserData>;
};

const docQuestionRef = (userId: string) => {
  return doc(
    firestoreDb,
    'questions',
    userId,
  ) as DocumentReference<IQuestionData>;
};

export const fetchUserData = async (userId: string) => {
  const userDataDoc = await getDoc(docUserRef(userId)).then(userData => {
    if (userData.exists()) {
      return userData.data();
    } else {
      throw new Error('invalid user data');
    }
  });

  return eventChannel(emitter => {
    const unsubscribe = onSnapshot(docQuestionRef(userId), questionData => {
      if (questionData.exists()) {
        emitter({
          name: userDataDoc.name,
          surname: userDataDoc.surname,
          avatar: userDataDoc.avatar,
          status: questionData.data().status,
          unread: questionData.data().unread,
        });
      } else {
        throw new Error('invalid question data');
      }
    });

    return () => {
      unsubscribe();
    };
  });
};
