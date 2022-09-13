import {StatusDialogType} from './message-type';

export interface IUserAuthData {
  isAuth: boolean;
  email: string;
  token: string;
  uid: string;
}

export interface IUserData {
  name: string;
  surname: string;
  avatar: string;
}

export interface IQuestionData {
  status: StatusDialogType;
  unread: number;
}
