import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export function Cabecalho() {
    return (
        <View style={styles.cabecalho}>
            <View>
                <Fontisto name="blood-drop" size={50} color="#B22222" />
            </View>
            <View>
                <Text style={styles.texto}> Doe&Salve </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
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
      },
})