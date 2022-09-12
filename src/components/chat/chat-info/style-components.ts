import styled from 'styled-components/native';
import {Avatar as AvatarPaper} from 'react-native-paper';

export const InfoView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px 20px;
`;

export const Avatar = styled(AvatarPaper.Text).attrs({
  size: 40,
  color: '#027afe',
})`
  background-color: #ffffff;
`;

export const Name = styled.Text`
  flex: 1;
  font-size: 17px;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
`;
