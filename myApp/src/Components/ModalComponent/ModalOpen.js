import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ModalOpen = ({onClose}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.text}>ModalOpen</Text>
        <Button title="Fechar" onPress={onClose} style={{width: 50}} />
      </View>
    </View>
  );
};

export default ModalOpen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    height: 400,
    justifyContent: 'flex-end',
  },
  text: {
    color: '#f2f2f2',
    fontSize: 25,
    textAlign: 'center',
  },
  modal: {
    height: 400,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#101010',
    borderRadius: 25,
  },
});
