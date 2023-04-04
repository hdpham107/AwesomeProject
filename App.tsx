/* eslint-disable no-debugger */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UITab from './src/components/Navigation/UITab';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UITab" screenOptions={{headerShown: false}}>
        <Stack.Screen name="UITab" component={UITab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
