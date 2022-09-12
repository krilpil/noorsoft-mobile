import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
  STORAGE_BUCKET,
  DATABASE_URL,
} from '@env';

const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: `${AUTH_DOMAIN}`,
  databaseURL: `${DATABASE_URL}`,
  projectId: `${PROJECT_ID}`,
  storageBucket: `${STORAGE_BUCKET}`,
  messagingSenderId: `${MESSAGING_SENDER_ID}`,
  appId: `${APP_ID}`,
  measurementId: `${MEASUREMENT_ID}`,
};

const firebaseInitialize = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseInitialize);
export const firestoreDb = getFirestore(firebaseInitialize);
