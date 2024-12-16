import { View, Text, StyleSheet, Button } from 'react-native';

export const Contacts = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Bienvenido a la sección de contactos</Text>
            <Text style={styles.subText}>Aquí puedes gestionar tus contactos fácilmente</Text>
            <Button
                title="Volver al inicio"
                color="#4CAF50" // Cambiamos el color del botón
                onPress={() => {
                    navigation.navigate('WellcomeBrandonPesantez');
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F7FA', // Cambiamos el color de fondo
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00796B', // Cambiamos el color del texto principal
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: '#004D40', // Cambiamos el color del texto secundario
        marginBottom: 20,
    },
});
