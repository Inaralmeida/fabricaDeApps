import React, {useState} from 'react';
import {View, Text, Image, Button, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  function pegaNome(text) {
    const intro = text.length > 0 ? 'Salve ' : '';
    setText(intro + text);
  }
  return (
    <View style={S.container}>
      <TextInput
        style={S.input}
        placeholder="Digite seu nome"
        onChangeText={text => pegaNome(text)}
      />
      <Text style={S.text}>{text}</Text>
    </View>
  );
};

export default App;

const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#222',
    margin: 20,
    paddingLeft: 5,
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: '#ededed',
    color: '#555',
  },

  text: {
    textAlign: 'center',
    fontSize: 50,
    color: '#f2f2f2',
  },
});
