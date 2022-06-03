import CodePush from 'react-native-code-push';

const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
export default CodePush(CodePushOptions)(App);
