import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const HomeView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  background-color: #f0f2f5;
`;
