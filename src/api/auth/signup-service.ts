import {UserSignupData} from '../../types/form-type';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {firebaseAuth, firestoreDb} from '../../firebase/config';
import {addDoc, collection, doc, setDoc, Timestamp} from 'firebase/firestore';
import {messages} from '../../const/messages';

export const UserSignupService = async ({
  email,
  password,
  name,
  surname,
}: UserSignupData): Promise<string> => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(userCredential => {
      const {user} = userCredential;

      setDoc(
        doc(firestoreDb, 'users', user.uid),
        {name: name, surname: surname},
        {merge: true},
      );

      setDoc(
        doc(firestoreDb, 'questions', user.uid),
        {status: 'pending', unread: 0},
        {merge: true},
      );

      addDoc(collection(firestoreDb, 'questions', user.uid, 'messages'), {
        content: messages.welcome,
        timestamp: Timestamp.now(),
        writtenBy: 'operator',
      });

      return '';
    })
    .catch(error => {
      console.log(error);
      throw new Error('The user is already registered');
    });
};
