import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
const PikerComponent = () => {
  const [carroSelecioando, setCarroSelecioando] = useState(0);

  const data = [
    {key: 0, value: 0, label: 'Golf 1.6'},
    {key: 1, value: 1, label: 'Palio'},
    {key: 2, value: 2, label: 'Gol'},
    {key: 3, value: 3, label: 'Uno'},
    {key: 4, value: 4, label: 'Siena'},
    {key: 5, value: 5, label: 'Fiesta'},
  ];

  return (
    <View style={styles.container}>
      <Text>Picker</Text>
      <Picker
        selectedValue={carroSelecioando}
        onValueChange={(itemValue, itemIndex) =>
          setCarroSelecioando(itemValue)
        }>
        {data.map((item, index) => {
          return (
            <Picker.Item key={item.key} value={item.value} label={item.label} />
          );
        })}
      </Picker>
      <Text>Carro selecionado: {data[carroSelecioando].label}</Text>
    </View>
  );
};

export default PikerComponent;

const styles = StyleSheet.create({});
