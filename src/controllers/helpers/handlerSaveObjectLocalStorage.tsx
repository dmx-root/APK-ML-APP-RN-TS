import AsyncStorage from '@react-native-async-storage/async-storage';
import { items } from '../../interfaces/storage/items';
import { Item } from '../../interfaces/app/homeRoutes';


export const handlerSaveObjectLocalStorage = async (item:string, data:any ) =>{

    const newData: string = JSON.stringify(data)
    await AsyncStorage.setItem(item,newData);
    
}

export const handlerGetSavedObjectLocalStorage  = async (item:items) => {
    const response:string|null = await AsyncStorage.getItem(item);
    if(response){
        const newData = JSON.parse(response);
        return newData;
    }
    return null;

}