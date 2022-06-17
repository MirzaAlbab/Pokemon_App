import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import React from 'react';
import Login from '../screen/Login';
import Register from '../screen/Register';
import Detail from '../screen/Details';

const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default Root;
