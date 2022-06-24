import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './src/Pages/Home/Home';
import Registration from './src/Pages/Registration/Registration';
import Start from './src/Pages/Start/Start';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
      <Registration />
      <Start />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
