import AsyncStorage     from '@react-native-async-storage/async-storage';
import { items }        from '../../interfaces/storage/items';

export const handlerSaveObjectLocalStorage:(item:items, data:any )=>Promise<void> = async (item:string, data:any ) =>{
    try {
        const newData: string = JSON.stringify(data)
        await AsyncStorage.setItem(item,newData);
    } catch (error) {
        console.log(error)
    }
    
}

export const handlerGetSavedObjectLocalStorage  = async (item:items) => {
    const response:string|null = await AsyncStorage.getItem(item);
    if(response){
        const newData = JSON.parse(response);
        return newData;
    }
    return null;

}

export const handlerRemoveSavedObjectLocalStorage = async (item: items) => {
    try {
        await AsyncStorage.removeItem(item);
    } catch (error) {
        console.log(error)
    }
}