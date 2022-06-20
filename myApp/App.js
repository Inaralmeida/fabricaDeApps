import React, {useState} from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={S.container}>
      <View style={S.header}>
        <Text style={S.colorText}>Um header Legal</Text>
      </View>
      <View style={S.content}>
        <Text style={S.colorText}>Um content Legal</Text>
      </View>
      <View style={S.footer}>
        <Text style={S.colorText}>Um footer Legal</Text>
      </View>
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
