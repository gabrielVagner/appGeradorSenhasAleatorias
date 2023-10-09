import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Slider from '@react-native-community/slider'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/cadeado.png')}
        style={styles.img}
      />
      <Text style={styles.text}>16 Caracteres</Text>


      <View style={styles.viewSlider}>
        <Slider
        style={{height: 70}}
        minimumValue={6}
        maximumValue={20}
        />
      </View>
    
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
    width: '75%'

  }
});
