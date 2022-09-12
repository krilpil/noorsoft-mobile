import React, {useEffect, useRef} from 'react';
import {ChatDialogScroll, ChatDialogView} from './style-components';
import Message from './message/message';
import {ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {fetchCurrentMessages} from '../../../redux/slices/dialog-slice';

const ChatDialog = () => {
  const dispatch = useAppDispatch();
  const uid = useAppSelector(state => state.auth.uid);
  const messages = useAppSelector(state => state.dialog.messages);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    dispatch(fetchCurrentMessages(uid));
  }, [uid]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ChatDialogScroll
      ref={scrollViewRef}
      onContentSizeChange={() => {
        scrollViewRef.current?.scrollToEnd();
      }}>
      <ChatDialogView>
        {messages.map(({content, writtenBy, timestamp}) => {
          return (
            <Message
              key={timestamp.nanoseconds + timestamp.seconds}
              content={content}
              writtenBy={writtenBy}
              timestamp={timestamp}
            />
          );
        })}
      </ChatDialogView>
    </ChatDialogScroll>
  );
};

export default ChatDialog;
