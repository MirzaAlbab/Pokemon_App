import CodePush from 'react-native-code-push';
import React from 'react';
import Root from './src/routes/Root';
import {NavigationContainer} from '@react-navigation/native';

const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
export default CodePush(CodePushOptions)(App);
