import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const Sobre = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.nome === '' ? 'Pagina Sobre' : route.params?.nome,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
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
