import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Doar({ navigation }) {

  const Separator = () => {
    return <View style={styles.separator} />;
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        <FontAwesome name="hospital-o" size={24} color="#B22222" /> Clínicas perto de Você
      </Text>

      <ScrollView>
      <TouchableOpacity style={styles.quad} onPress={() => navigation.navigate('clinicaA')}>
        <Text style={styles.texto}>Clinica A | 1.0km</Text>
        
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.quad} onPress={() => Alert.alert(`Horário de Funcionamento:\n08:00-19:00\nTelefone para Contato:\n(81)XXXXX-XXXX`)}>
        <Text style={styles.texto}>Clinica B | 1.7km</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.quad} onPress={() => Alert.alert(`Horário de Funcionamento:\n10:00-20:00\nTelefone para Contato:\n(81)XXXXX-XXXX`)}>
        <Text style={styles.texto}>Clinica C | 2.6km</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.quad} onPress={() => Alert.alert(`Horário de Funcionamento:\n07:00-17:00\nTelefone para Contato:\n(81)XXXXX-XXXX`)}>
        <Text style={styles.texto}>Clinica D | 3.9km</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.quad} onPress={() => Alert.alert(`Horário de Funcionamento:\n08:00-20:00\nTelefone para Contato:\n(81)XXXXX-XXXX`)}>
        <Text style={styles.texto}>Clinica E | 5.1km</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.quad} onPress={() => Alert.alert(`Horário de Funcionamento:\n24 horas\nTelefone para Contato:\n(81)XXXXX-XXXX`)}>
        <Text style={styles.texto}>Clinica F | 8.7km</Text>
      </TouchableOpacity>
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    marginTop: 50,
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: "#B22222",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingVertical: 30,
    color: '#f4f4f4',
  },
  quad: {
    backgroundColor: '#b22222',
    borderRadius: 10,
    margin: 5,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 21,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#b22222',
    marginBottom: 15,
  }
});