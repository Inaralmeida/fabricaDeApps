import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        <View style={styles.box3}></View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    height: 250,
    backgroundColor: 'red',
  },
  box2: {
    height: 250,
    backgroundColor: 'blue',
  },
  box3: {
    height: 250,
    backgroundColor: 'yellow',
  },
  box4: {
    height: 250,
    backgroundColor: 'green',
  },
});
