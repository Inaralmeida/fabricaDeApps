import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Sobre = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <Button title="home" onPress={() => navigation.navigate('home')} />
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
