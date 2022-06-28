import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonAction from '../../components/ButtonAction/ButtonAction';

const Home = ({nextPage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.section_intro}>
        <Text style={styles.intro}>Banco</Text>
        <Text style={styles.highlight}>Sujeito!</Text>
      </View>
      <Text style={styles.description}>o banco do seu jeito</Text>
      <ButtonAction onPress={nextPage} text="Abrir Conta" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    height: 500,
    textAlign: 'center',
    justifyContent: 'space-around',
    paddingLeft: 45,
    paddingRight: 45,
  },
  section_intro: {
    height: 200,
  },
  intro: {
    color: '#efefef',
    textDecorationLine: 'underline',
    fontSize: 50,
  },
  highlight: {
    color: '#FF880D',
    fontSize: 90,
  },
  description: {
    color: '#efefef',
    fontSize: 30,
  },
});
