import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/core';
import useStorage from '../components/useStorage';


export function Passwords() {
  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const {getItem, emptStorage} = useStorage();

  useEffect(()=>{
    async function loadPasswords() {
      const passwords = await getItem('@passwords');
      console.log(passwords);
      setListPasswords(passwords);
      console.log('focado');
    }

    loadPasswords();
  }, [focused]);
  


  
  return (
   <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.text}>Senhas</Text>
        
      </View>

      <View>
        <FlatList
          data={listPasswords}
          keyExtractor={(item)=>String(item)}
          renderItem={({item})=><Text>{item}</Text>}
        />
        <Pressable onLongPress={()=>emptStorage('@passwords')}>
            <Text style={styles.text}>Limpar Storage</Text>
        </Pressable>
      </View>
   </SafeAreaView>
  );  
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'gray'
  },
  text:{
    color: 'black',
    fontSize: 25
  }



})