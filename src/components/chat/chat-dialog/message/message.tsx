import React from 'react';
import {
  MessageText,
  MessageTime,
  MessageView,
  UnreadMessage,
} from './style-components';
import {IUserMessage} from '../../../../types/message-type';
import {firebaseTime} from '../../../../helpers/timestamp-converter';

interface MessageProps extends IUserMessage {
  unread?: boolean;
}

const Message: React.FC<MessageProps> = ({
  content,
  writtenBy,
  timestamp,
  unread,
}) => {
  return (
    <MessageView writtenBy={writtenBy}>
      <MessageText>{content}</MessageText>
      <MessageTime>{firebaseTime(timestamp)}</MessageTime>
      {unread ? <UnreadMessage /> : null}
    </MessageView>
  );
};

export default Message;
