import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const HeaderStart = ({name, amountInitial, backToHome, initial_limit}) => {
  const [eyeIsOpen, setEyeIsOpen] = useState(false);
  const first_name = name.split(' ')[0];
  const open = require('../../images/eye-open.png');
  const closed = require('../../images/eye-closed.png');

  function handleSetEyeIsOpen() {
    setEyeIsOpen(!eyeIsOpen);
  }

  const initial_limit_component = eyeIsOpen ? (
    <Text style={[styles.higlight, styles.small]}>
      R$ {initial_limit.toFixed(0)}
    </Text>
  ) : (
    <Image source={require('../../images/bolls.png')} />
  );

  const amount_initial_component = eyeIsOpen ? (
    <Text style={[styles.higlight, styles.text_medium]}>
      R$ {amountInitial}
    </Text>
  ) : (
    <Image source={require('../../images/bolls.png')} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Olá, <Text style={styles.higlight}>{first_name}</Text>{' '}
        </Text>

        <View style={styles.icons}>
          <Image source={require('../../images/search.png')} />
          <Image source={require('../../images/notifications.png')} />
          <TouchableOpacity onPress={backToHome}>
            <Image source={require('../../images/exit.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section_main}>
        <Text style={styles.text_small}>Saldo em conta</Text>
        <View style={styles.amount}>
          {amount_initial_component}
          <TouchableOpacity onPress={handleSetEyeIsOpen}>
            <Image source={eyeIsOpen ? open : closed} />
          </TouchableOpacity>
        </View>
        <View style={styles.section_bottom}>
          <Text style={styles.text_small}>Limite disponivel</Text>
          {initial_limit_component}
        </View>
      </View>
    </View>
  );
};

export default HeaderStart;

const styles = StyleSheet.create({
  container: {
    height: 200,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FF880D',
    justifyContent: 'space-between',
  },
  header: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    lineHeight: 49,
    color: '#101010',
  },
  higlight: {
    color: '#efefef',
    textTransform: 'capitalize',
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  text_small: {
    fontSize: 12,
    lineHeight: 20,
    color: '#101010',
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 1,
  },
  text_medium: {
    fontSize: 25,
    lineHeight: 40,
  },
  section_bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  small: {
    fontSize: 20,
    lineHeight: 32,
  },
});
