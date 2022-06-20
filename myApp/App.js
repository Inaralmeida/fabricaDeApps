import React, {useState} from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
      <View style={{width: 100, height: 50, backgroundColor: 'green'}} />
      <View style={{height: 50, backgroundColor: 'blue'}} />
      <View style={{height: 50, backgroundColor: 'red'}} />
    </View>
  );
};

export default App;

const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555',
  },
  header: {
    height: 70,
    backgroundColor: '#333',
  },
  content: {
    flex: 1,
  },
  footer: {
    height: 50,
    backgroundColor: '#333',
  },
  colorText: {
    color: '#f2f2f2',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 20,
  },
});
