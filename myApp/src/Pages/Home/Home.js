import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  function navegaSobre() {
    navigation.navigate('Sobre');
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="sobre" onPress={navegaSobre} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
