/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import Home from './src/components/home';
import Loginbtn from './src/components/home/loginbtn'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack=createStackNavigator();
const App: () => React$Node = () => {
  
  return (
   
      
      <NavigationContainer>
      <Stack.Navigator>
             <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
       
  );
};


export default App;
