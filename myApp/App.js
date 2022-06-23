import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <View style={styles.container}>
      <Switch
        value={isActive}
        onValueChange={value => setIsActive(value)}
        trackColor={{false: 'white', true: '#ffb940'}}
        thumbColor={isActive ? '#white' : '#ffb000'}
      />
      <Text>{isActive ? 'active' : 'disabled'}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
