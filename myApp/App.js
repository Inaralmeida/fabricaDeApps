import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Pages/Home/Home';
import Sobre from './src/Pages/Sobre/Sobre';

const stack = createNativeStackNavigator();

export default function App() {
  const options = {
    title: 'Tela de inicio',
    headerStyle: {
      backgroundColor: '#292929',
    },
    headerTintColor: '#ffb200',
  };
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="home" component={Home} options={options} />
        <stack.Screen
          name="sobre"
          component={Sobre}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
