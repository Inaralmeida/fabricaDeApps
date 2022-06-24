import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Inputs from '../../components/Inputs/Inputs';
import Switchs from '../../components/Switchs/Switchs';
import Slider from '@react-native-community/slider';
import ButtonAction from '../../components/ButtonAction/ButtonAction';

const Registration = ({nextPage}) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    cpf: '',
    age: '',
    date: '',
    amountInitial: '',
    student: false,
    wage: false,
    credit_card: false,
    initial_limit: 2500,
  });
  function handleSetForm(text, key) {
    setForm({...form, [key]: text});
  }

  const inputData = [
    {
      key: 0,
      name: 'name',
      label: 'Nome Completo',
      value: form.name,
      setValue: handleSetForm,
      placeholder: 'Ex: Maria Aparecida da Silva',
    },
    {
      key: 1,
      name: 'email',
      label: 'Email',
      value: form.email,
      setValue: handleSetForm,
      placeholder: 'Ex: maria.apsilva@example.com',
    },
    {
      key: 2,
      name: 'cpf',
      label: 'CPF',
      value: form.cpf,
      setValue: handleSetForm,
      placeholder: 'Ex: 000.000.000-00',
    },
    {
      key: 3,
      name: 'age',
      label: 'Idade',
      value: form.age,
      setValue: handleSetForm,
      placeholder: 'Ex: 25',
    },
    {
      key: 4,
      name: 'date',
      label: 'Data de Nascimento',
      value: form.data,
      setValue: handleSetForm,
      placeholder: 'Ex: 10/09/1998',
    },
    {
      key: 5,
      name: 'amountInitial',
      label: 'Saldo Inicial',
      value: form.amountInitial,
      setValue: handleSetForm,
      placeholder: 'Ex: 500.00',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={require('../../images/back.png')}
            style={styles.icon_header}
          />
          <Image
            source={require('../../images/help.png')}
            style={styles.icon_header}
          />
        </View>
        <View style={styles.container_inputs}>
          {inputData.map(item => {
            return (
              <Inputs
                key={item.key}
                label={item.label}
                value={item.value}
                setValue={item.setValue}
                placeholder={item.placeholder}
                name={item.name}
              />
            );
          })}
        </View>
        <View>
          <Switchs
            value={form.student}
            setValue={handleSetForm}
            label="Estudante"
            name="student"
          />
          <Switchs
            value={form.wage}
            setValue={handleSetForm}
            label="Receber Salario aqui"
            name="wage"
          />
          <Switchs
            value={form.credit_card}
            setValue={handleSetForm}
            label="Iniciar com cartão de crédito"
            name="credit_card"
          />
        </View>

        {form.credit_card && (
          <View style={styles.slider}>
            <Text style={styles.label}>Seu limite inicial</Text>
            <Slider
              minimumValue={0}
              maximumValue={5000}
              maximumTrackTintColor="#ccc"
              minimumTrackTintColor="#FF880D"
              thumbTintColor="#FF880D"
              value={form.initial_limit}
              onValueChange={value => handleSetForm(value, 'initial_limit')}
            />
            <View style={styles.labels_slider}>
              <Text style={styles.label}>R$ 0</Text>
              <Text style={styles.label}>
                R$ {form.initial_limit.toFixed(0)}
              </Text>
              <Text style={styles.label}>R$ 5.000</Text>
            </View>
          </View>
        )}
        <View style={styles.button}>
          <ButtonAction text="Abrir conta" onPress={() => nextPage(form)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    height: 40,
    backgroundColor: '#FF880D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  icon_header: {
    width: 20,
    height: 20,
  },
  container_inputs: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slider: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  label: {
    color: '#f2f2f2',
    fontSize: 20,
    lineHeight: 30,
    marginLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  labels_slider: {
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
});
