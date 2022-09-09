import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum ScreenList {
  LOGIN = 'login',
  SIGNUP = 'signup',
  FORGOT = 'forgot',
}

type RootStackParamList = {
  login: undefined;
  signup: undefined;
  forgot: undefined;
};

export type navigationType = NativeStackNavigationProp<RootStackParamList>;
