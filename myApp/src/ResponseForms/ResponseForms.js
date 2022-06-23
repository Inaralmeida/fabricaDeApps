import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ResponseForms = ({data, backToHome}) => {
  const {name, email, phone} = data;
  return (
    <View style={styles.container}>
      <Text style={styles.text_highlight}>
        Olá <Text style={styles.highligth}>{name}</Text>
      </Text>
      <Text style={styles.text_description}>
        Agradecemos a inscrição, em breve entraremos em contato através do email{' '}
        {email} ou pelo telefone {phone} via whatsapp{' '}
      </Text>

      <Text style={styles.text_description}>
        Que a sorte esteja ao seu favor!
      </Text>

      <TouchableOpacity style={buttons.highlight} onPress={backToHome}>
        <View style={buttons.highlight_area}>
          <Text style={buttons.highlight_text}>Voltar ao inicio</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ResponseForms;

const styles = StyleSheet.create({
  container: {
    height: 600,
    margin: 20,
    borderColor: '#000',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    marginTop: 20,
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
