import styled from 'styled-components/native';

interface ChatInputViewProps {
  isShowKeyboard: boolean;
}

export const ChatInputView = styled.View<ChatInputViewProps>`
  padding: 10px 0;
  justify-content: center;
  background-color: #f0f2f5;
  margin-bottom: ${({isShowKeyboard}) => (isShowKeyboard ? '20px' : 0)};
`;

export const ChatButtonView = styled.View`
  justify-content: center;
  margin: 0 15px 0 10px;
`;
