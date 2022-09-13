import {signInWithEmailAndPassword} from 'firebase/auth';
import {firebaseAuth} from '../../firebase/config';
import {UserFormData} from '../../types/form-type';
import {IUserAuthData} from '../../types/user-type';

export const loginService = async ({
  email,
  password,
}: UserFormData): Promise<IUserAuthData> => {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
    .then(userCredential => {
      const {user} = userCredential;
      return user.getIdToken(false).then(idToken => {
        return {
          isAuth: true,
          email: user.email || email,
          token: idToken,
          uid: user.uid,
        };
      });
    })
    .catch(() => {
      throw new Error('The user was not logged in');
    });
};
