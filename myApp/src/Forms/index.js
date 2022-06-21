import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Forms = ({states}) => {
  return (
    <View>
      <Text>Cadastre-se</Text>
      <TextInput
        value={states.name}
        onChangeText={text => states.setName(text)}
        placeholder="Digite seu nome"
      />
      <TextInput
        value={states.email}
        onChangeText={text => states.setEmail(text)}
        placeholder="Digite seu email"
      />
    </View>
  );
};

export default Forms;

const styles = StyleSheet.create({});
