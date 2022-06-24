import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './src/Pages/Home/Home';
import Registration from './src/Pages/Registration/Registration';
import Start from './src/Pages/Start/Start';

const App = () => {
  const [page, setPage] = useState('home');
  const isHome = page === 'home';
  const isRegistration = page === 'registration';
  const isStart = page === 'start';

  function nextPage(page) {
    setPage(page);
  }
  return (
    <View style={styles.container}>
      {isHome && <Home nextPage={() => nextPage('registration')} />}
      {isRegistration && (
        <Registration nextPage={() => nextPage('registration')} />
      )}
      {isStart && <Start nextPage={() => nextPage('start')} />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },
});
