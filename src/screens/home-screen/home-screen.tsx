import React from 'react';
import ChatInfo from '../../components/chat/chat-info/chat-info';
import {HomeView} from './style-components';
import ChatDialog from '../../components/chat/chat-dialog/chat-dialog';
import ChatInput from '../../components/chat/chat-input/chat-input';

const HomeScreen = () => {
  return (
    <HomeView>
      <ChatInfo />
      <ChatDialog />
      <ChatInput />
    </HomeView>
  );
};

export default HomeScreen;
