import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app/navigatiion/AppNavigator';
import { myTheme } from './app/navigatiion/navigationTheme';

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
