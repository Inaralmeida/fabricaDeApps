import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Pages/Home/Home';
import Sobre from './src/Pages/Sobre/Sobre';
import Contato from './src/Pages/Contato/Contato';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#ffb200',

          tabBarStyle: {
            backgroundColor: '#101010',
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => {
              return <FontAwesome5 name="home" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Feather name="file-text" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Feather name="phone-call" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
