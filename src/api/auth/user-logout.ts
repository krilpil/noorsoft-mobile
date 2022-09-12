import {signOut} from 'firebase/auth';
import {firebaseAuth} from '../../firebase/config';

export const UserLogoutService = (): Promise<boolean> => {
  return signOut(firebaseAuth)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};
