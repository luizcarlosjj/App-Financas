import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto luz',
    value: '300,90',
    date: '17/09/22',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Boleto Água',
    value: '50,90',
    date: '11/07/22',
    type: 0 // despesas
  },
  {
    id: 3,
    label: 'pix',
    value: '20,90',
    date: '18/08/22',
    type: 1 // entradas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name={'Luiz Carlos'}/>
      
      <Balance saldo="2.500,00" gastos="-250,00"/>

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item}/>}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});
