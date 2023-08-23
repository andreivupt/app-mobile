import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../../components/Header";
import Balance from "../../components/Balance";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Renato Gaucho"/>
            <Balance saldo="10.520,45" gastos="-652,50"/>
            <Text style={styles.title}>Últimas movimentações</Text>
            <StatusBar></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
    }
})