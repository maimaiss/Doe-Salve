import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { Cabecalho } from "../components/cabecalho";
import { StatusBar } from 'expo-status-bar';

export function PaginaInicial({ navigation }) {
  return (
    <View style={styles.container}>

      <Cabecalho/>
      <View style={styles.caixafrase}>
        <Text style={styles.frase}>No Brasil, cerca de 3,5 milhões de pacientes necessitam de transfusões de sangue por ano.</Text>
        <Text style={styles.frase}>A doação de uma pessoa pode salvar em média, 4 vidas.</Text>
      </View>

      <View style={styles.caixaBotao}>
        <View >
          <Text style={styles.frasemot}>Você pode ser o próximo a salvar uma vida</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.botaoLogin}>Tenho uma conta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
          <Text style={styles.botaoCad}>Comece agora</Text>
        </TouchableOpacity>
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
  frase: {
    fontSize: 24,
    color: '#f4f4f4',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    backgroundColor: '#B22222',
    height: 150,
    width: 400,
    margin: 5,
    borderRadius: 10,
  },
  caixafrase: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frasemot: {
    fontSize: 17,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#B22222',
    fontWeight: 'bold',
    paddingBottom: 85,
  },
  caixaBotao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoLogin: {
    fontSize: 20,
    color: '#B22222',
    height: 50,
    width: 350,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  botaoCad: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#B22222',
    borderRadius: 20,
    height: 50,
    width: 350,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});