import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export function PopUpNewPassword({password, setP}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Nova senha: {password} </Text>
            <TouchableOpacity style={styles.botao} onPress={setP}>
                <Text style={styles.text}>OK</Text>
            </TouchableOpacity>
        </View>
    )}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'black',
        fontSize: 25
      },
      botao:{
        marginTop: 15,
        backgroundColor: '#eee',
        borderRadius: 20,
        padding: 10
      }
})