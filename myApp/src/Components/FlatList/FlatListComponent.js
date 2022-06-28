import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Card from './Card';

const FlatListComponent = () => {
  const [feed, setFeed] = useState([
    {id: 0, name: 'Inara', idade: 23, email: 'inara@gmail.com'},
    {id: 1, name: 'Carol', idade: 23, email: 'carol@gmail.com'},
    {id: 2, name: 'Dino', idade: 23, email: 'dino@gmail.com'},
    {id: 3, name: 'José', idade: 23, email: 'jose@gmail.com'},
    {id: 4, name: 'Marcel', idade: 23, email: 'marcel@gmail.com'},
    {id: 5, name: 'Maria', idade: 23, email: 'maria@gmail.com'},
  ]);
  return (
    <View>
      <FlatList
        data={feed}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Card data={item} />}
      />
    </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({});
