import React from 'react';
import {Button, Title} from './styled-components';
import {GestureResponderEvent} from 'react-native';

type buttonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const FormButton: React.FC<buttonProps> = ({title, onPress}) => {
  return (
    <Button onPress={onPress}>
      <Title>{title}</Title>
    </Button>
  );
};

export default FormButton;
