import styled from 'styled-components/native';
import {Avatar as AvatarPaper} from 'react-native-paper';

export const InfoView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px 20px;
  background-color: #027afe;
`;

export const Avatar = styled(AvatarPaper.Text).attrs({
  size: 40,
  color: '#027afe',
})`
  background-color: #ffffff;
`;

export const Name = styled.Text`
  font-size: 17px;
  color: #ffffff;
  font-weight: 600;
`;

export const Status = styled.Text`
  color: #ffffff;
`;

export const InformationView = styled.View`
  flex: 1;
  align-items: center;
`;
