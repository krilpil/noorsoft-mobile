import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Wrapper>
        <StatusBar />
        <Navigation />
      </Wrapper>
    </NavigationContainer>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #027afe;
`;

export default App;
