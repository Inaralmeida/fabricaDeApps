import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ButtonAction = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.button_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAction;

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 65,
    backgroundColor: '#FF880D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
  },

  button_text: {
    fontSize: 40,
    lineHeight: 65,
    color: '#000',
    fontWeight: '400',
  },
});
