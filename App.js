import {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'

export default function App() {
  const [size, setState] = useState(6);
  let charset = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV';

  function generate(){
    let result = '';
    const charsetLength = charset.length;
    for ( let i = 0; i < size; i++ ) {
        result += charset.charAt(Math.floor(Math.random() * charsetLength));
    }
    console.log(result);
  }


  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/cadeado.png')}
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
