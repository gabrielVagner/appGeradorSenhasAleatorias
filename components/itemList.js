import { View, Text, StyleSheet, Pressable } from "react-native";


export function ItemList({item, deleteItem}) {
  return (
    <View>
        <Pressable style={styles.press} onLongPress={deleteItem}>
            <Text style={styles.text}>{item}</Text> 
        </Pressable>
    </View>
  );  
}

const styles = StyleSheet.create({
    press:{
        backgroundColor: "#333",
        marginBottom: 10,
        borderRadius: 15,
        padding: 10,

    },
    
    text:{
        color: '#fff',
        fontSize: 20,
    }

})