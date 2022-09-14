import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum ScreenList {
  LOGIN = 'login',
  SIGNUP = 'signup',
  HOME = 'home',
}

type RootStackParamList = {
  login: undefined;
  signup: undefined;
  home: undefined;
};

export type navigationType = NativeStackNavigationProp<RootStackParamList>;
