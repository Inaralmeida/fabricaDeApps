import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './src/Pages/Home/Home';
import Registration from './src/Pages/Registration/Registration';
import Start from './src/Pages/Start/Start';

const BancoSujeito = () => {
  const [page, setPage] = useState('home');
  const [data, setData] = useState({});
  const isHome = page === 'home';
  const isRegistration = page === 'registration';
  const isStart = page === 'start';

  function nextPage(page) {
    setPage(page);
  }

  function saveData(data) {
    setData(data);
    nextPage('start');
  }
  return (
    <View style={styles.container}>
      {isHome && <Home nextPage={() => nextPage('registration')} />}
      {isRegistration && <Registration nextPage={saveData} />}
      {isStart && <Start nextPage={() => nextPage('home')} data={data} />}
    </View>
  );
};

export default BancoSujeito;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },
});
