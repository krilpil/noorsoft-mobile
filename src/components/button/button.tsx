import React from 'react';
import {Button, Title} from './styled-components';
import {ColorValue, GestureResponderEvent} from 'react-native';

type buttonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  backgroundColor?: ColorValue;
  color?: ColorValue;
};

const AppButton: React.FC<buttonProps> = ({
  title,
  onPress,
  color,
  backgroundColor,
}) => {
  return (
    <Button backgroundColor={backgroundColor} onPress={onPress}>
      <Title color={color}>{title}</Title>
    </Button>
  );
};

export default AppButton;
