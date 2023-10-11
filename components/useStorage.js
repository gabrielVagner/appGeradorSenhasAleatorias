import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {

    const getItem = async (key) =>{
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log("Erro ao Resgatar Item:",error);
            return[];
        }

    }

    const setItem = async (key, item) =>{
        try {
            let passwords = await getItem(key);
            passwords.push(item);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
            //console.log(await getItem(key));

        } catch (error) {
            console.log("Erro ao Inserir Item:",error);
            return[];
        }

    }

    const removeItem = async (key, item) =>{
        try {
            let passwords = await getItem(key);
            let myPasswords = passwords.filter((password)=>{return(password!=item)});
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;

        } catch (error) {
            console.log("Erro ao Remover Item:",error);
            return[];
        }

    }
    const emptStorage = async (key) => {
        try {
            await AsyncStorage.setItem(key, '');
            console.log(await getItem(key));
        } catch (error) {
            return[]
        }

    }

    return{
        getItem,
        setItem,
        removeItem,
        emptStorage
    }

}


export default useStorage;