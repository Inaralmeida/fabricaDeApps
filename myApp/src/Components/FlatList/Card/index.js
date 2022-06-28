import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Card({data}) {
  const {name, idade, email} = data;

  return (
    <View style={styles.card}>
      <Text style={styles.infos}>{name}</Text>
      <Text style={styles.infos}>{idade}</Text>
      <Text style={styles.infos}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  infos: {
    color: 'white',
  },
});
