import {IQuestionData, IUserData} from './user-type';

export interface IUserMessage {
  writtenBy: 'client' | 'operator';
  content: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
}

export type UserDialogType = IUserData & IQuestionData;

export type StatusDialogType = 'active' | 'saved' | 'closed' | 'pending';

export type UserSendMessageType = Omit<IUserMessage, 'timestamp'>;
