import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardServices from '../CardServices/CardServices';

const Services = () => {
  const data = [
    {key: 0, name: 'PIX', img: require('../../images/pix.png')},
    {key: 1, name: 'CARTÕES', img: require('../../images/credit-card.png')},
    {key: 2, name: 'TRANSAÇÕES', img: require('../../images/transacoes.png')},
    {key: 3, name: 'EXTRATO', img: require('../../images/menu.png')},
    {key: 4, name: 'APROXIMACÃO', img: require('../../images/aproximacao.png')},
    {key: 5, name: 'BLETOS', img: require('../../images/bar-code.png')},
  ];
  return (
    <View style={styles.container}>
      {data.map(item => {
        return <CardServices item={item} key={item.key} />;
      })}
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#555',
    height: 270,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
});
