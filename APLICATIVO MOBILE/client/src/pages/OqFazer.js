import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';


export function OqFazer({ navigation }) {
    return (

        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.quad}>
                        <Text style={styles.titulo}>
                            Antes da Coleta:
                        </Text>
                        <Text style={styles.texto}>
                            • Não vá em jejum e alimente-se com alimentos leves. {'\n'}
                            • Evite alimentos gordurosos no dia da doação. {'\n'}
                            • Hidrate-se.
                        </Text>
                    </View>
                    <View style={styles.quad}>
                        <Text style={styles.titulo}>
                            Etapas da Doação:
                        </Text>
                        <Text style={styles.texto}>
                            • Para realizar o seu cadastro leve consigo seu documento oficial de identidade com foto (RG, carteira de motorista, carteira de trabalho ou passaporte). {'\n'} {'\n'}
                            • Para a faixa etária entre 16 e 18 anos incompletos é necessário acompanhante maior de idade com documento. {'\n'} {'\n'}
                            • Após o cadastro ocorre a triagem clínica, que nada mais é que uma entrevista feita por profissional de saúde que irá avaliar as condições de saúde da pessoa que vai doar para não colocar em risco a pessoa que vai receber. {'\n'} {'\n'}
                            • A coleta do sangue dura em torno de 15 a 20 minutos. Ela é feita com material esterilizado, descartável e não apresenta nenhum risco para a pessoa que está doando. 
                        </Text>
                    </View>
                    <View style={styles.quad}>
                        <Text style={styles.titulo}>
                            Depois da Coleta:
                        </Text>
                        <Text style={styles.texto}>
                            • Faça um pequeno lanche e hidrate-se. Evite esforços físicos exagerados por pelo menos 12 horas, não fumar por cerca de 2 horas, evitar bebidas alcóolicas por 12 horas e não dirigir veículos de grande porte. Exercícios e práticas esportivas também devem ser evitadas logo após a doação. 
                        </Text>
                    </View>
                    <View style={styles.quad}>
                        <Text style={styles.titulo}>
                            Lembre-se:
                        </Text>
                        <Text style={styles.texto}>
                            • Mulheres podem doar sangue a cada intervalo de 90 dias, podendo fazer até 3 doações por ano. Homens podem fazer até 4 doações por ano, aguardando 60 dias de intervalo.
                        </Text>
                    </View>
                </View>


                <StatusBar style='auto' />
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
        color: '#f4f4f4',
        paddingHorizontal: 20,
        fontSize: 16,
        textAlign: 'justify'
    },
    titulo: {
        color: '#f4f4f4',
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    quad: {
        color: '#f4f4f4',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#B22222',
        //height: 150,
        //width: 400,
        margin: 5,
        padding: 10,
        borderRadius: 10,
    }
});