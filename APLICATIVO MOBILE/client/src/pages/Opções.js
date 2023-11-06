import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Switch } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


export function Opções({ navigation }) {

    const [ligado, setLigado] = useState(false)
    const toggleLigado = () => setLigado(!ligado)

    const [ligado2, setLigado2] = useState(false)
    const toggleLigado2 = () => setLigado2(!ligado2)

    const Separator = () => {
        return <View style={styles.separator} />;
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity style={styles.quad}>
                    <Text style={styles.texto}>
                        <Ionicons name="person" size={21} color="#B22222" />   Meu Perfil
                    </Text>
                </TouchableOpacity>
                <Separator />
                <View style={styles.quad}>
                    <Text style={styles.texto}>
                        <Fontisto name="bell" size={24} color="#B22222" />   Notificações
                    </Text>
                    <Switch
                        trackColor={{ false: '#959595', true: '#e36969' }}
                        thumbColor={ligado ? '#B22222' : '#555555'}
                        value={ligado}
                        onValueChange={toggleLigado}
                    />
                </View>
                <Separator />
                <View style={styles.quad}>
                    <Text style={styles.texto}>
                    <Ionicons name="download" size={24} color="#B22222" />  Atualização Automática
                    </Text>
                    <Switch
                        trackColor={{ false: '#959595', true: '#e36969' }}
                        thumbColor={ligado2 ? '#B22222' : '#555555'}
                        value={ligado2}
                        onValueChange={toggleLigado2}
                    />
                </View>
                <Separator/>
                <TouchableOpacity style={styles.quad}>
                    <Text style={styles.texto}>
                    <Ionicons name="power-outline" size={24} color="#B22222"/>  Sair da Conta
                    </Text>
                </TouchableOpacity>
                <StatusBar style='auto'/>
            </ScrollView>
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
        fontSize: 19,
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
        marginVertical: 5,
        borderBottomColor: "#B22222",
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});