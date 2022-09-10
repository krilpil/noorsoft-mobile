import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum ScreenList {
  LOGIN = 'login',
  SIGNUP = 'signup',
  FORGOT = 'forgot',
  HOME = 'home',
}

type RootStackParamList = {
  login: undefined;
  signup: undefined;
  forgot: undefined;
  home: undefined;
};

export type navigationType = NativeStackNavigationProp<RootStackParamList>;
