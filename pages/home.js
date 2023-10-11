import {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import {PopUpNewPassword} from '../components/popup';

export function Home() {
  const [size, setState] = useState(6);
  const [newPassword, setNewPassword] = useState("");
  const [popUpPassword, setPopUpPassword] = useState(false);

  let charset = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV';

  function generate(){
    let result = '';
    const charsetLength = charset.length;
    for ( let i = 0; i < size; i++ ) {
        result += charset.charAt(Math.floor(Math.random() * charsetLength));
    }
    console.log(result);
    setNewPassword(result);
    setPopUpPassword(true);
  }


  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/cadeado.png')}
        style={styles.img}
      />
      <Text style={styles.text}>{size} Caracteres</Text>


      <View style={styles.viewSlider}>
        <Slider
        style={{height: 70}}
        minimumValue={6}
        maximumValue={20}
        value={size}
        onValueChange={(value) => setState(value.toFixed(0))}
        />
      </View>
    
      <TouchableOpacity style={styles.botao} onPress={generate}>
        <Text style={styles.text}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={popUpPassword} animationType='fade' transparent={true}>
        <PopUpNewPassword password={newPassword} setP={()=>setPopUpPassword(false)}/>
      </Modal>
     

    </View>
  );
}

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
  img: {
    width: 120,
    height: 120,
    marginTop: '10%',
    marginBottom:'10%'
  },
  viewSlider:{
    marginTop: '10%',
    width: '75%',
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  botao:{
    marginTop: 15,
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 10
  }
});
