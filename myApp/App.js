import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import Card from './src/Card';

const App = () => {
  const [feed, setFeed] = useState([
    {id: 0, name: 'Inara', idade: 23, email: 'inara@gmail.com'},
    {id: 1, name: 'Carol', idade: 23, email: 'carol@gmail.com'},
    {id: 2, name: 'Dino', idade: 23, email: 'dino@gmail.com'},
    {id: 3, name: 'José', idade: 23, email: 'jose@gmail.com'},
    {id: 4, name: 'Marcel', idade: 23, email: 'marcel@gmail.com'},
    {id: 5, name: 'Maria', idade: 23, email: 'maria@gmail.com'},
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Card data={item} />}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
