import styled from 'styled-components/native';

type MessageViewProps = {
  writtenBy: 'client' | 'operator';
};

export const MessageView = styled.View<MessageViewProps>`
  background-color: #3596fe;
  padding: 10px 20px;
  margin: 5px 0;
  align-self: ${({writtenBy}) =>
    writtenBy === 'client' ? 'flex-start' : 'flex-end'};
  border-radius: 15px;
  flex-direction: row;
`;

export const MessageText = styled.Text`
  color: #ffffff;
  margin-right: 5px;
  flex-wrap: wrap;
  flex-shrink: 1;
  max-width: 70%;
`;

export const MessageTime = styled.Text`
  color: #ffffff;
  margin-left: 5px;
  align-self: flex-end;
`;
