import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';

const Forms = ({states, buttonSave}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title]}>Formação Web Dev</Text>

          <Text style={styles.text_description}>
            No momento não estamos com processo seletivo aberto, ok? Mas em
            breve teremos novas turmas. Inscreva-se na lista de espera e fique
            sabendo em primeira mão.
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            value={states.name}
            onChangeText={text => states.setForm(text, 'name')}
            placeholder="Ex: Ana Maria da Silva"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={states.email}
            onChangeText={text => states.setForm(text, 'email')}
            placeholder="Ex: ana.msilva@example.com"
          />

          <Text style={styles.label}>Celular</Text>
          <TextInput
            style={styles.input}
            value={states.phone}
            onChangeText={text => states.setForm(text, 'phone')}
            placeholder="Ex: 11909090900"
          />

          <TouchableOpacity style={buttons.highlight} onPress={buttonSave}>
            <View style={buttons.highlight_area}>
              <Text style={buttons.highlight_text}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Forms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    borderColor: '#000',
    justifyContent: 'space-between',
  },
  header: {
    height: 170,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFD000',
    fontWeight: 'bold',
  },
  text_description: {
    lineHeight: 25,
    textAlign: 'center',
    fontSize: 15,
    color: '#f2f2f2',
  },
  form: {
    height: 380,
    marginTop: 50,
    justifyContent: 'space-between',
  },
  label: {marginBottom: 10, color: '#f2f2f2'},
  input: {
    borderColor: '#f2f2f2',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    color: '#000',
    backgroundColor: '#f2f2f2',
  },
});

const buttons = StyleSheet.create({
  highlight: {
    alignItems: 'center',
    marginTop: 20,
  },
  highlight_area: {
    height: 50,
    width: 250,
    backgroundColor: '#FFD000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight_text: {
    fontSize: 25,
    color: '#0b0b0b',
    fontWeight: 'bold',
  },
});
