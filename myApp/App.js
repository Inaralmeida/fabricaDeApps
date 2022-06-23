import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Forms from './src/Forms/Forms';
import Home from './src/Home/Home';
import ResponseForms from './src/ResponseForms/ResponseForms';

export default function App() {
  const [viewForm, setViewForm] = useState(true);
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [viewComponents, setViewComponents] = useState({
    home: false,
    form: false,
    responseForm: true,
  });

  const states = {
    name: dataForm.name,
    email: dataForm.email,
    setForm: (value, key) => {
      setDataForm({...dataForm, [key]: value});
    },
  };

  function formVisible() {
    setViewComponents({
      home: false,
      form: true,
      responseForm: false,
    });
  }

  function responseVisible() {
    setViewComponents({
      home: false,
      form: false,
      responseForm: true,
    });
  }

  function homeVisible() {
    setViewComponents({
      home: true,
      form: false,
      responseForm: false,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./src/images/logo-resilia.png')}
          style={styles.img}
        />
      </View>

      {viewComponents.home && <Home formVisible={formVisible} />}
      {viewComponents.form && (
        <Forms states={states} buttonSave={responseVisible} />
      )}
      {viewComponents.responseForm && (
        <ResponseForms data={dataForm} backToHome={homeVisible} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#0b0b0b',
    alignItems: 'center',
  },
  img: {
    width: 350,
    height: 70,
  },
});
