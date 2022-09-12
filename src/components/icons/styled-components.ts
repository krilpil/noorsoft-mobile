import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowRightFromBracket,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

export const LogoutIcon = styled(FontAwesomeIcon).attrs({
  size: 22,
  color: '#ffffff',
  icon: faArrowRightFromBracket,
})``;

export const SendIcon = styled(FontAwesomeIcon).attrs({
  size: 22,
  color: '#027afe',
  icon: faPaperPlane,
})``;
