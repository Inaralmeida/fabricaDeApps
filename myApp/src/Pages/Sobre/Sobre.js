import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const Sobre = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
    </View>
  );
};

export default Sobre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
