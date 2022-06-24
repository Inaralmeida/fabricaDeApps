import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';

const Switchs = ({value, setValue, label, name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={value => setValue(value, name)}
        trackColor={{false: '#f2f2f2', true: '#ffb940'}}
        thumbColor="#FF880D"
      />
    </View>
  );
};

export default Switchs;

const styles = StyleSheet.create({
  container: {
    height: 65,
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  label: {
    color: '#f2f2f2',
    fontSize: 20,
    lineHeight: 30,
    marginLeft: 5,
  },
});
