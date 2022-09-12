import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';

type TouchableIconProps = {
  onPress?: (event: GestureResponderEvent) => void;
  icon: JSX.Element;
};

const TouchableIcon: React.FC<TouchableIconProps> = ({onPress, icon}) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
};

export default TouchableIcon;
