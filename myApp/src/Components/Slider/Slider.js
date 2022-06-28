import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

const Slider = () => {
  const [kg, setKg] = useState(70);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>

      <Slider
        minimumValue={0}
        maximumValue={250}
        maximumTrackTintColor="#000"
        minimumTrackTintColor="#ff00ff"
        thumbTintColor="#ff00ff"
        value={kg}
        onValueChange={value => setKg(value)}
      />

      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color: 'white',
          marginTop: 10,
        }}>
        Eu tenho: {kg.toFixed(0)}Kg
      </Text>
    </View>
  );
}

export default Slider

const styles = StyleSheet.create({})