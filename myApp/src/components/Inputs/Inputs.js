import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Inputs = ({value, setValue, label, placeholder, name}) => {
  return (
    <View
      style={
        name === 'age'
          ? [styles.age]
          : name === 'date'
          ? [styles.date]
          : [styles.container]
      }>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={text => setValue(text, name)}
        placeholder={placeholder}
        placeholderTextColor="#CCCCCC"
      />
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  age: {
    width: 170,
    height: 100,
    paddingRight: 20,
    paddingLeft: 10,
  },
  date: {
    width: 220,
    height: 100,
    paddingRight: 20,
    paddingLeft: 10,
  },
  container: {
    width: 400,
    height: 100,
    paddingRight: 20,
    paddingLeft: 10,
  },
  label: {
    color: '#f2f2f2',
    fontSize: 20,
    lineHeight: 30,
    marginLeft: 5,
  },
  input: {
    height: 60,
    backgroundColor: '#efefef',
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 10,
    color: '#101010',
  },
});
