import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Home({formVisible}) {
  return (
    <>
      <Text style={styles.text_highlight}>
        Aprenda para se <Text style={styles.highligth}>empregar!</Text>
      </Text>
      <Text style={styles.text_description}>
        Aprender o que o mercado busca e poder pagar só quando estiver
        trabalhando é POSSÍVEL. Dê o primeiro passo na sua carreira de sucesso
        com a Resilia!
      </Text>

      <TouchableOpacity style={buttons.highlight} onPress={formVisible}>
        <View style={buttons.highlight_area}>
          <Text style={buttons.highlight_text}>Inscreva-se</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  section_highlight: {
    margin: 20,
    justifyContent: 'space-around',
  },
  text_highlight: {
    padding: 10,
    color: '#fff',
    textAlign: 'center',
    fontSize: 50,
  },
  highligth: {
    color: '#FFD000',
  },
  text_description: {
    lineHeight: 40,
    textAlign: 'center',
    fontSize: 25,
    color: '#f2f2f2',
  },
});

const buttons = StyleSheet.create({
  highlight: {
    alignItems: 'center',
    marginBottom: 50,
  },
  highlight_area: {
    height: 50,
    width: 250,
    backgroundColor: '#FFD000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight_text: {
    fontSize: 25,
    color: '#0b0b0b',
    fontWeight: 'bold',
  },
});
