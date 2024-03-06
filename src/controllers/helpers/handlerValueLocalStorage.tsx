import AsyncStorage from '@react-native-async-storage/async-storage';
import { items } from '../../interfaces/storage/items';

export const handlerSaveValueLocalStorage:(item:items, newData:string)=>Promise<null|Error> = async (item:string, newData:string) => {
    try {
        await AsyncStorage.setItem(item,newData);
        return null
    } catch (error) {
        console.log(error);
        return new Error('Error al momento de cargar datos en el local storage');
    }
}

export const handlerGetValueLocalStorage: (item:items ) => Promise<string|null|Error> = async (item:items) => {
   try {
       const response:string|null = await AsyncStorage.getItem(item);
       if(response)return response;
       return null;
    
   } catch (error) {
        return new Error('Error al momento de extraer la información del local storage, limpie la caché');
   }
}

export const handlerRemoveValueLocalStorage:(item:items)=>Promise<void | Error>= async ( item:items) => {
    try {
        await AsyncStorage.removeItem(item);
    } catch (error) {
        console.log(error)
        return new Error('No se pudo eliminar el item');
    }
}