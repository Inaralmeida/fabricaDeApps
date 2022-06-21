import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Forms from './src/Forms';

export default function App() {
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
  });

  const states = {
    name: dataForm.name,
    email: dataForm.email,
    setName: value => {
      setDataForm({...dataForm, name: value});
    },
    setEmail: value => {
      setDataForm({...dataForm, email: value});
    },
  };

  return (
    <View>
      <Text>Hello My friend</Text>
      <Forms states={states} />
    </View>
  );
}

const styles = StyleSheet.create({});
