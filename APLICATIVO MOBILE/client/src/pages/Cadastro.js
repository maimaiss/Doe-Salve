import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import React, { Component } from "react";
import { TextInputComponent } from 'react-native';
import { Cabecalho } from '../components/cabecalho';
import { NavigationContainer } from "@react-navigation/native";

export function Cadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [CPF, setCPF] = useState(0);
  const [endereco, setEndereco] = useState('');
  const [genero, setGenero] = useState('');
  const [sexo, setSexo] = useState('');
  const [tipoS, setTipoS] = useState('');
  const [numero, setNumero] = useState(0);

  return (
    <View style={styles.container}>


      <ScrollView style={styles.cadastro}>
        <Cabecalho />

        <View style={styles.alinhamento}>
          <Text style={styles.text}>Cadastro</Text>

          <View style={styles.caixa}>
            <TextInput
              style={styles.textInput}
              placeholder='Nome'
              onChangeText={(textoDigitado) => (setNome(textoDigitado))}
            />
          </View>

          <View style={styles.caixa}>
            <TextInput
              style={styles.textInput}
              placeholder='Idade'
              keyboardType='number-pad'
              onChangeText={(textoDigitado) => (setIdade(textoDigitado))}
            />
          </View>

          <View style={styles.caixa}>
            <TextInput
              style={styles.textInput}
              placeholder='Email'
              onChangeText={(textoDigitado) => (setEmail(textoDigitado))}
            />
          </View>

          <View style={styles.caixa}>
            <TextInput
              style={styles.textInput}
              placeholder='Senha'
              onChangeText={(textoDigitado) => (setSenha(textoDigitado))}
            />
          </View>

          <View style={styles.caixa}>
            <TextInput
              style={styles.textInput}
              placeholder='CPF'
              keyboardType='number-pad'
              onChangeText={(textoDigitado) => (setCPF(textoDigitado))}
            />
          </View>

          <View style={styles.caixa}>
            <TextInput
              style={styles.textInput}
              placeholder='Número'
              keyboardType='number-pad'
              onChangeText={(textoDigitado) => (setNumero(textoDigitado))}
            />
          </View>

          <View style={styles.caixa}>
            <TextInput
              style={styles.textInput}
              placeholder='Endereço'
              onChangeText={(textoDigitado) => (setEndereco(textoDigitado))}
            />
          </View>

          <View style={styles.caixa}>
            <TextInput
              style={styles.textInput}
              placeholder='Gênero'
              onChangeText={(textoDigitado) => (setGenero(textoDigitado))}
            />
          </View>

          <View style={styles.caixa}>
            <TextInput
              style={styles.textInput}
              placeholder='Sexo'
              onChangeText={(textoDigitado) => (setSexo(textoDigitado))}
            />
          </View>

          <View style={styles.caixa}>
            <TextInput
              style={styles.textInput}
              placeholder='Tipo Sanguíneo'
              onChangeText={(textoDigitado) => (setTipoS(textoDigitado))}
            />
            
          </View>

          <View style={styles.botao}>
            <Button
              title={'Cadastrar'}
              color='#B22222'
              onPress={() => navigation.navigate('home')}
            />
          </View>
        </View>
      </ScrollView>

      <StatusBar style='auto' />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  cadastro: {
    flex: 1,
  },
  alinhamento: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  textInput: {
    fontSize: 20,
    paddingHorizontal: 5,
    paddingRight: '50%',
  },
  text: {
    fontSize: 25,
    padding: 5,
    color: '#B22222'
  },
  botao: {
    width: '50%',
    marginTop: 10,
    borderRadius: 50,
  },
  caixa: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '90%',
    paddingVertical: 10,
    borderRadius: 7,
    opacity: 0.4,
    margin: 6,
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 6,
  }
});