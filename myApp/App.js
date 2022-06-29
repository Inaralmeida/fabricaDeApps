import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ModalComponent from './src/Components/ModalComponent/ModalComponent';
import VectorIcons from './src/Components/VectorIcons/VectorIcons';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello word</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
