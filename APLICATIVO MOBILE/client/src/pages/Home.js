import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Cabecalho } from '../components/cabecalho';

export function Home({ navigation }) {

    const [icones, setIcones] = useState([
        { nome: 'Minhas Doações', key: 2, icon: <Ionicons name="calendar" size={50} color="#f4f4f4" /> },
        { nome: 'O que fazer?', key: 3, icon: <Fontisto name="question" size={50} color="#f4f4f4" /> },
        { nome: 'Ajude a Comunidade', key: 4, icon: <FontAwesome5 name="handshake" size={50} color="#f4f4f4" /> },
        { nome: 'Opções', key: 5, icon: <Ionicons name="ios-settings-outline" size={50} color="#f4f4f4" /> },
    ])

    const [perfil, setPerfil] = useState([
        { nome: 'Doar', key: 1, icon:  <Fontisto name="blood-drop" size={50} color="#f4f4f4" /> },
    ])

    function handleIconPress(item) {
        if (item.nome === 'O que fazer?') {
            navigation.navigate('oqfazer')
        } else if (item.nome === 'Ajude a Comunidade') {
            navigation.navigate('comunidade')
          } else if (item.nome === 'Minhas Doações') {
            navigation.navigate('minhasDoações')
          } else if (item.nome === 'Opções') {
            navigation.navigate('opções')
          }
        }

    return (

        <View style={styles.container}>

            <Cabecalho/>

            <View style={styles.lista}>
                <FlatList
                    bounces={false}
                    numColumns={1}
                    data={perfil}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('doar')}>
                            <View style={styles.item}>
                                <View style={styles.icon}>
                                    {item.icon}
                                </View>
                                <Text style={styles.texto}> {item.nome} </Text>
                            </View>
                        </TouchableOpacity>
                    )} />


                <FlatList
                    bounces={false}
                    numColumns={2}
                    data={icones}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleIconPress(item)}>
                            <View style={styles.item2}>
                                <View style={styles.icon2}>
                                    {item.icon}
                                </View>
                                <Text style={styles.texto}> {item.nome} </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />

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
    lista: {
        marginTop: 0,
    },
    texto: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#f4f4f4'
    },
    item: {
        flex: 1,
        fontSize: 24,
        backgroundColor: '#B22222',
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,
        padding: 30,
        borderRadius: 10,
    },
    item2: {
        flex: 1,
        fontSize: 24,
        backgroundColor: '#B22222',
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 8,
        padding: 30,
        borderRadius: 10,
        height: 190,
        width: 190,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    icon2: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        marginBottom: 15,
    },
    textoCab: {
        fontSize: 30,
        color: '#B22222',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
    },
    cabecalho: {
        flexDirection: 'row',
        marginTop: 50,
        padding: 15,
        borderRadius: 10,
        paddingRight: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
});