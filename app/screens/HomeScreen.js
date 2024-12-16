import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenido a mi aplicación, soy Carlos Tene</Text>
        <Text>Realizando el trabajo en grupo</Text>
        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                    title='CONTACTS'
                    onPress={() => {
                        navigation.navigate('PhoneNumberNav');
                    }}
                />
            </View>



            <Button
                title='PRODUCTOS'
                onPress={() => {
                    navigation.navigate('ProductNavigation');
                }}
            />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        

    },
    boton1: {
        color:'green',
        marginRight: 60,

    },
});
