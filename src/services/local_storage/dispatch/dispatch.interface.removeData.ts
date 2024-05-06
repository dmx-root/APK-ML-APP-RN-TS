import AsyncStorage     from '@react-native-async-storage/async-storage';

interface ControllerResponseInterface {
    code: number,
    message: string,
    data?: any
    information?: string
}

interface LocalStorageDispatchInterface {
    execute(): Promise<ControllerResponseInterface>
}

export class LocalStorageRemoveItem implements LocalStorageDispatchInterface{
    
    private item;

    constructor(item : string){
        this.item = item;
    }

    public async execute(): Promise<ControllerResponseInterface> {
        try {
            await AsyncStorage.removeItem(this.item);
            const response : ControllerResponseInterface = {
                code: 1,
                message: 'Elemento fue eliminado con éxito'
            }
            return response;
        } catch (error) {
            console.log(error)
            const response : ControllerResponseInterface = {
                code:-1,
                message: 'Error al intentar eliminar el dato',
            }
            return response;
        }
    }
}