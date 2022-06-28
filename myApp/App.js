import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
 
  return (
    <View style={styles.container}>
     <Text>Hello Word</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },
});
