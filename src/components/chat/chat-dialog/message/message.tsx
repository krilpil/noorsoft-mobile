import React from 'react';
import {MessageText, MessageTime, MessageView} from './style-components';
import {IUserMessage} from '../../../../types/message-type';
import {firebaseTime} from '../../../../helpers/timestamp-converter';

const Message: React.FC<IUserMessage> = ({content, writtenBy, timestamp}) => {
  return (
    <MessageView writtenBy={writtenBy}>
      <MessageText>{content}</MessageText>
      <MessageTime>{firebaseTime(timestamp)}</MessageTime>
    </MessageView>
  );
};

export default Message;
