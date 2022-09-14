import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login-screen/login-screen';
import SignupScreen from '../screens/signup-screen/signup-screen';
import {ScreenList} from './stack-list';
import {useAppSelector} from '../hooks/redux';
import HomeScreen from '../screens/home-screen/home-screen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {isAuth ? (
        <>
          <Stack.Screen name={ScreenList.HOME} component={HomeScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name={ScreenList.LOGIN} component={LoginScreen} />
          <Stack.Screen name={ScreenList.SIGNUP} component={SignupScreen} />
        </>
      )}
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
