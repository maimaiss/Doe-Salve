import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";


export function Comunidade({ navigation }) {

  const Separator = () => {
    return <View style={styles.separator} />;
  }


  return (

    <View style={styles.container}>

      <View style={styles.quad2}>
        <Text style={styles.texto2}>
          • Você sabia que uma única doação de sangue pode salvar até três vidas? As clínicas de sangue desempenham um papel crucial na saúde e no bem-estar de milhares de pessoas todos os dias. No entanto, elas dependem do apoio financeiro da comunidade para continuar suas operações e fornecer sangue seguro e vital para quem precisa.{'\n'}{'\n'}

          • Agora, mais do que nunca, as clínicas de sangue precisam da sua ajuda. Para Contribuir com doações em dinheiro é uma forma direta e impactante de apoiar seu trabalho vital. Seja qual for o valor, cada doação faz a diferença e pode ajudar a salvar vidas.
        </Text>
      </View>
      <TouchableOpacity style={styles.quad}>
        <Text style={styles.texto}>
          <FontAwesome5 name="donate" size={24} color="#B22222" />  Ajude clínicas de coleta de sangue
        </Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity style={styles.quad}>
        <Text style={styles.texto}>
          <FontAwesome5 name="user-friends" size={24} color="#B22222" />  Convide Amigos
        </Text>
      </TouchableOpacity>

      <StatusBar style='auto' />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    marginTop: 60,
  },
  texto: {
    flex: 1,
    fontSize: 18,
    textAlign: 'justify',
    paddingTop: 7,
  },
  quad: {
    color: '#f4f4f4',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 5,
    flexDirection: 'row',
    alignContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#B22222",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  quad2: {
    color: '#f4f4f4',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#B22222',
    margin: 5,
    paddingBottom: 0,
    borderRadius: 10,
    marginBottom: 10,
  },
  texto2: {
    color: '#f4f4f4',
    paddingHorizontal: 16,
    paddingVertical: 20,
    fontSize: 16,
    textAlign: 'justify',
  },
});