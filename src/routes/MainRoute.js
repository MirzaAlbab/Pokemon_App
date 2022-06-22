import Login from '../screen/Login';
import Register from '../screen/Register';
import Detail from '../screen/Details';
import React from 'react';
import Pokebag from '../screen/Pokebag';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import {useSelector} from 'react-redux';
import Search from '../screen/Search';

const Stack = createStackNavigator();
function MainRoutes() {
  const {user} = useSelector(state => state.login);
  console.log('user: ', user);
  return (
    <Stack.Navigator
      initialRouteName={user ? 'Home' : 'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Pokebag" component={Pokebag} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
export default MainRoutes;
