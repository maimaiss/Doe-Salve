import { useState } from 'react';
import { Cabecalho } from "../components/cabecalho";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';



export function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(0);

  return (
    <View style={styles.container}>
      <Cabecalho/>

      <View style={styles.login}>
        <Text style={styles.text}>Login</Text>

        <View style={styles.caixa}>
          <View style={styles.icons}>
            <Entypo name="mail" size={15} color="black" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder='Email'
            onChangeText={(textoDigitado) => (setEmail(textoDigitado))}
          />
        </View>

        <View style={styles.caixa}>
          <View style={styles.icons}>
            <Entypo name="key" size={15} color="black" />
          </View>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder='Senha'
            onChangeText={(textoDigitado) => (setSenha(textoDigitado))}
          />
        </View>

        <View style={styles.botao}>
          <Button
            title={'Entrar'}
            color='#B22222'
            onPress={() => navigation.navigate('home')}
          />
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 16,
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
    width: '75%',
    paddingVertical: 5,
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