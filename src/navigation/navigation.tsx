import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import ForgotPassword from '../screens/forgot-password/forgot-password';
import LoginScreen from '../screens/login-screen/login-screen';
import SignupScreen from '../screens/signup-screen/signup-screen';
import {ScreenList} from './stack-list';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ScreenList.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ScreenList.SIGNUP} component={SignupScreen} />
      <Stack.Screen name={ScreenList.FORGOT} component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: '#027afe',
  },
};

export default Navigation;
