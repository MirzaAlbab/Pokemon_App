import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoutes from './MainRoute';

function Root() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}

export default Root;
