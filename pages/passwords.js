import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/core';
import useStorage from '../components/useStorage';
import { ItemList } from '../components/itemList';


export function Passwords() {
  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const {getItem, removeItem, emptStorage} = useStorage();

  async function deleteP(item) {
    const newPasswords = await removeItem('@passwords', item);
    setListPasswords(newPasswords)
  }
  async function deleteLista() {
    const newPasswords = await emptStorage('@passwords');
    setListPasswords(newPasswords)
  }

  useEffect(()=>{
    async function loadPasswords() {
      const passwords = await getItem('@passwords');
      //console.log(passwords);
      setListPasswords(passwords);
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
          renderItem={({item})=><ItemList item={item} deleteItem={()=>deleteP(item)}/>}
        />
        <Pressable style={styles.clean} onLongPress={()=>deleteLista()}>
            <Text style={styles.text2}>Limpar Storage</Text>
        </Pressable>
      </View>
   </SafeAreaView>
  );  
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'gray',
    height: '15%',
    marginBottom: 10,
    paddingTop: 60,
    paddingLeft: 20
  },
  text:{
    color: 'black',
    fontSize: 25
  },
  clean:{
    marginTop: 30,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 6,
    alignItems: 'center',
    
  },
  text2:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35
  },
})