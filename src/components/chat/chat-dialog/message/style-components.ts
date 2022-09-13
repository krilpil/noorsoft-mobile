import styled from 'styled-components/native';

type MessageViewProps = {
  writtenBy: 'client' | 'operator';
};

export const MessageView = styled.View<MessageViewProps>`
  padding: 10px;
  margin: 5px 0;
  align-self: ${({writtenBy}) =>
    writtenBy === 'client' ? 'flex-start' : 'flex-end'};
  border-radius: 15px;
  flex-direction: ${({writtenBy}) =>
    writtenBy === 'client' ? 'row-reverse' : 'row'};
  background-color: #3596fe;
`;

export const MessageText = styled.Text`
  color: #ffffff;
  margin: 0 5px;
  flex-wrap: wrap;
  flex-shrink: 1;
  max-width: 70%;
`;

export const MessageTime = styled.Text`
  color: #ffffff;
  font-size: 12px;
  margin: 0 5px;
  flex-shrink: 1;
  align-self: flex-end;
`;

export const UnreadMessage = styled.View`
  position: absolute;
  align-self: flex-end;
  background-color: #3596fe;
  width: 10px;
  height: 10px;
  margin-bottom: 10px;
  border: solid #ffffff 2px;
  border-radius: 10px;
`;
