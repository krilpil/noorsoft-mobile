import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/navigation';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider>
          <Wrapper>
            <StatusBar />
            <Navigation />
          </Wrapper>
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #027afe;
`;

export default App;
