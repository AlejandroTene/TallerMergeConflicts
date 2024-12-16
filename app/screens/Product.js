import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text style={styles.title}>Bienvenidos a mi tienda, soy Brandon Pesantez</Text>
        <Text style={styles.text}>1. Doritos</Text>
        <Text style={styles.text1}>2. Cheetos</Text>
        <Text style={styles.text2}>3. Rufles</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomeBrandonPesantez');
            }}
            color="black"
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    },title: {
        color: 'black',
        fontSize: 20,
    },
    text: {
        color: 'blue',
        fontSize: 15,
    },
    text1: {
        color: 'red',
        fontSize: 15,
    },
    text2: {
        color: 'green',
        fontSize: 15,
    }
  });