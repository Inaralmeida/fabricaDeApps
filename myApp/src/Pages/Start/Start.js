import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Services from '../../components/Services/Services';
import Notification from '../../components/Notification/Notification';
import HeaderStart from '../../components/HeaderStart/HeaderStart';

const Start = ({data, nextPage}) => {
  const {name, initial_limit, amountInitial, email, credit_card} = data;
  return (
    <View>
      <HeaderStart
        name={name}
        initial_limit={initial_limit}
        amountInitial={amountInitial}
        backToHome={nextPage}
      />
      <Notification email={email} />
      <Services />
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({});
