import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CardServices = ({item}) => {
  return (
    <View key={item.key} style={styles.container}>
      <Image source={item.img} styles={styles.img} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

export default CardServices;

const styles = StyleSheet.create({
  container: {
    width: 112,
    height: 111,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#101010',
    borderWidth: 5,
    borderColor: '#efefef',
    borderRadius: 20,
    marginBottom: 15,
  },
  img: {
    width: 60,
    height: 60,
  },
  text: {
    color: '#FF880D',
    fontSize: 12,
    marginTop: 10,
  },
});
