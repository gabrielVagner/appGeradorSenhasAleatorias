import { StyleSheet, Text, View, TouchableOpacity, Pressable} from 'react-native';
import * as Clipboard from 'expo-clipboard';


export function PopUpNewPassword({password, setP}){
  async function copyToClipboard(){
    await Clipboard.setStringAsync(password);
    alert('Senha Copiada.')
  };
  

  
  return(
    <View style={styles.container}>
      <View style={styles.container2}>
          <Text style={styles.text}>Nova senha:</Text>
          <Pressable onLongPress={copyToClipboard}>
            <Text style={styles.text}>{password} </Text>
          </Pressable>

          <View style={styles.containerB}>
            <TouchableOpacity style={styles.botao} onPress={setP}>
                <Text style={styles.text}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, styles.botaoS]} onPress={()=>console.log('salvar')} >
                <Text style={styles.text}>Salvar Senha</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  )}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(24,24,24, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:'75%',
    paddingBottom:'75%',
  },
  container2: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    borderRadius: 20,
    padding:'5%'
  },
  containerB: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between'
    
  },
  text: {
    color: 'black',
    fontSize: 25
  },
  botao:{
    marginTop: 15,
    backgroundColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    margin: 10
  },
  botaoS:{
    backgroundColor: '#56a556'
  }
})