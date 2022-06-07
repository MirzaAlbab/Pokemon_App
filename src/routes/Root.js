import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import React from 'react';

const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default Root;
