import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import {TextButton} from './styled-components';

type TouchableTextProps = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  color?: ColorValue;
};

const TouchableText: React.FC<TouchableTextProps> = ({
  text,
  onPress,
  color = '#ffffff',
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TextButton color={color}>{text}</TextButton>
    </TouchableOpacity>
  );
};

export default TouchableText;
