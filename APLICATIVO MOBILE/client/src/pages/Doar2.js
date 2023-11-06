import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NovosItens } from '../components/novosItens';
import { AdicionarItem } from '../components/adicionarItem';

export function ClinicaA() {

  const [lista, setLista] = useState();

  useEffect(() => {
    axios.get("http://10.0.0.185:3001/item").then(
      (response) => {
        setLista(response.data)
      }
    )
  }, [lista]);

  const submeterInformacao = (texto) => {
    axios.post("http://10.0.0.185:3001/item", { texto: texto });
    console.log(texto);
  };

  const deletarItem = (id) => {
    axios.delete(`http://10.0.0.185:3001/item/${id}`)
  };

  return (


    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>
          Clínica A
        </Text>

        <View style={styles.quad}>
          <Text style={styles.texto}>
            Seu local confiável para doação e análises laboratoriais. Comprometidos em fornecer serviços de qualidade e cuidado especializado para seus pacientes. Aqui estão as informações essenciais que você precisa saber:{'\n'}
            {'\n'}
            <Text style={styles.coisa}>
              Horário de Funcionamento:{'\n'}
            </Text>
            Segunda a sexta-feira: 8h às 18h{'\n'}
            Sábado: 8h às 12h{'\n'}
            {'\n'}
            <Text style={styles.coisa}>
              Para agendar consultas, obter informações adicionais ou esclarecer dúvidas, entre em contato através do número:{'\n'}</Text>
            (XX) XXXX-XXXX.{'\n'}
            {'\n'}
            A equipe de profissionais altamente qualificados está pronta para atendê-lo durante esses horários, garantindo um processo tranquilo e eficiente.
          </Text>
        </View>

        <AdicionarItem funcao={submeterInformacao} />


        <View>
          <FlatList data={lista}
            pagingEnabled
            snapToAlignment='start'
            renderItem={({ item }) => (
              <NovosItens props={item} funcao={deletarItem} />
            )} />
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    marginTop: 40,
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#b22222',
    marginBottom: 15,
  },
  coisa: {
    fontWeight: 'bold',
  },
  quad: {
    color: '#f4f4f4',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#B22222',
    margin: 5,
    paddingBottom: 0,
    borderRadius: 10,
    marginBottom: 10,
  },
  texto: {
    color: '#f4f4f4',
    paddingHorizontal: 16,
    paddingVertical: 20,
    fontSize: 17,
    textAlign: 'justify',
  },
});
