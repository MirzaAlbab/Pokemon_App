import CodePush from 'react-native-code-push';
import React from 'react';
import Root from './src/routes/Root';

const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
const App = () => {
  return <Root />;
};
export default CodePush(CodePushOptions)(App);
