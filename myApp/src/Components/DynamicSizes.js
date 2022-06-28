import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DynamicSizes = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
      <View style={{width: 100, height: 50, backgroundColor: 'green'}} />
      <View style={{height: 50, backgroundColor: 'blue'}} />
      <View style={{height: 50, backgroundColor: 'red'}} />
    </View>
  );
};

export default DynamicSizes;

const styles = StyleSheet.create({
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
