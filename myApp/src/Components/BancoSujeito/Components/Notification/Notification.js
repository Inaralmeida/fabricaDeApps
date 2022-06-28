import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Notification = ({email}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Toda comunicação do Banco Sujeito é feita via email. Caso receba
        notificações ou mensagens via SMS/Whatsapp desconsidere. Sempre
        enviaremos a comunicação para o email {email}
      </Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#555',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: '#efefef',
    textAlign: 'center',
    lineHeight: 20,
  },
});
