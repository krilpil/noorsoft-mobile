import {IUserData} from './user-type';

export interface IUserMessage {
  writtenBy: 'client' | 'operator';
  content: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
}

export interface IUserDialog extends IUserData {
  status: StatusDialogType;
}

export type StatusDialogType = 'active' | 'saved' | 'closed' | 'pending';

export type UserSendMessageType = Omit<IUserMessage, 'timestamp'>;
