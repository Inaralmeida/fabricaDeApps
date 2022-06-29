import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ModalOpen from './ModalOpen';

const ModalComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View>
      <Text>ModalComponent</Text>
      <Button title="Abrir modal" onPress={() => setOpenModal(true)} />
      <Modal
        visible={openModal}
        animationType="slide"
        transparent={true}
        style={styles.modal}>
        <ModalOpen onClose={() => setOpenModal(false)} />
      </Modal>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({});
