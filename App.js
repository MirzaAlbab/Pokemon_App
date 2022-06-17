import CodePush from 'react-native-code-push';
import React from 'react';
import Root from './src/routes/Root';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';

const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};
export default CodePush(CodePushOptions)(App);
