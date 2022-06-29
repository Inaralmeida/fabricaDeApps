import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewStorage = () => {
  const [name, setName] = useState('');
  const [renderName, setRenderName] = useState('');

  const inputRef = useRef(null);

  async function HandleRenderName() {
    await AsyncStorage.setItem('@name', name);
    setRenderName(name);
    inputRef.current.clear();
  }

  const length = useMemo(() => {
    console.log(renderName.length);
    return renderName.length;
  }, [renderName]);

  useEffect(() => {
    async function loadData() {
      const name = await AsyncStorage.getItem('@name');
      setRenderName(name);
    }
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> View Storage</Text>
      <View style={styles.content}>
        <TextInput
          value={name}
          onChangeText={value => setName(value)}
          style={styles.input}
          ref={inputRef}
        />

        <TouchableOpacity onPress={HandleRenderName} style={styles.btn_area}>
          <Text style={styles.btn_text}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{renderName}</Text>
      <Text style={styles.text}>
        O nome "{renderName}" possui {length} letras
      </Text>
    </View>
  );
};

export default ViewStorage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: 330,
    height: 40,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    color: '#101010',
    padding: 10,
    backgroundColor: '#ccc',
  },
  btn_area: {
    width: 30,
    height: 40,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  btn_text: {
    fontSize: 30,
    color: 'black',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    marginTop: 20,
  },
});
